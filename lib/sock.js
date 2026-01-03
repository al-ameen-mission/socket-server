const fs = require("fs");
const {logError, logDebug} = require("../lib/log");
const {Queue} = require("../lib/queue");
const { Server } = require("socket.io");
const moment = require("moment");

function InitSocketIO(server){
    let exam_queue = {};

    let io = new Server(server, {
        path: '/io',
        cors: {
            origin: "*", 
            methods: ["GET", "POST"]
        }
    });
    const onConnection = (socket) =>{
        let referer = new URL(socket.handshake.headers.referer);
        let domain = referer.hostname;
        let answer_path = (process.env.ANSWER_PATH).replace("{domain}", domain);

        if(!fs.existsSync(answer_path)){
            console.log(`'${answer_path}' directory not find`);
            socket.disconnect();
        }

        sendLog(socket, "Connected to socket server.")
        //init socket
        socket.on("init_exam",(req)=>{
            let exam_group_id = req.exam_group_id;
            let historyId = req.historyId;
            let studentId = req.studentId;


            if(exam_queue[exam_group_id] === undefined){
                exam_queue[exam_group_id] = {};
            }

            if(exam_queue[exam_group_id][studentId] !== undefined){
                sendLog(socket, "Already Initialized")
                return ;
            }

            exam_queue[exam_group_id][studentId] = new Queue();
            exam_queue[exam_group_id][studentId].catch((err) => {
                console.log(err.stack);
                exam_queue[exam_group_id][historyId].resume();
            });
            sendLog(socket, "Init successfully");
        })
        //On remaining time event
        socket.on("get_remaining_time", (req)=>{
            let endtimestamp_in_ms = req.endtimestamp;
            let nowtimestamp_in_ms = Date.now();

            exam_end_time = endtimestamp_in_ms;

            let remainig_time = (endtimestamp_in_ms-nowtimestamp_in_ms)/1000
            if(remainig_time<0){
                remainig_time=0;
            }
            socket.emit("remaining_time", {
                remaining_time : remainig_time
            });
        })
        //On Answer question
        socket.on("answer_by_student", (req) =>{
            let exam_group_id = req.exam_group_id;
            let studentId = req.studentId;

            initQueue(exam_group_id,studentId, socket);

            exam_queue[exam_group_id][studentId].add(req);
            // exam_queue[exam_group_id][studentId].resume(); // No longer needed with new Queue
            sendLog(socket, "successfully answer received.")
        })
        //On disconnect
        socket.on("disconnect", ()=>{

        })
    }
    //
    const initQueue = (exam_group_id, studentId, socket)=>{
        if(exam_queue[exam_group_id] === undefined){
            exam_queue[exam_group_id] = {};
        }
        if(exam_queue[exam_group_id][studentId] !== undefined){
            sendLog(socket, "Already Initialized")
        } else {
            exam_queue[exam_group_id][studentId] = new Queue({
                batchSize: 10,
                batchTime: 5000,
                key: (req) => req.questionId, // Deduplicate based on questionId
                processor: async (batch) => {
                    await saveBatchAnswers(batch, answer_path, domain);
                }
            });
            // catch handler no longer chainable directly on instance if not returned, but we supported it via options or method? 
            // Our new Queue implementation doesn't return promise on add, so catch is not relevant there.
            // Queue implementation has default error logging.
            
            sendLog(socket, "Init successfully");
        }
    }
    //save answer to file
    //save batch answers to file
    const saveBatchAnswers = async (batch, answer_path, domain) => {
        if (batch.length === 0) return;

        // Assuming all requests in a batch are for the same student (since queue is per student)
        let studentId = batch[0].studentId;
        let filename = studentId + ".json";
        let filepath = `${answer_path}${filename}`;

        try {
            let content = {};
            try {
                if (fs.existsSync(filepath)) {
                    let fileContent = await fs.promises.readFile(filepath, 'utf8');
                    content = JSON.parse(fileContent);
                }
            } catch (readErr) {
                logError(`Error reading file ${filepath}: ${readErr}`);
                // Proceed with empty content if file corrupt or unreadable, or maybe throw?
                // For now, let's assume we want to preserve partial data if possible
            }

            // Apply all updates
            batch.forEach(req => {
                content[req.questionId] = req.answer;
                if (req.answer === "") {
                    delete content[req.questionId];
                }
                
                logDebug(`[{(d:${domain},ts:"${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}",hID: ${req.historyId}, edID:${req.examdetailsId}, qID:${req.questionId}, a:${req.answer===""?0:req.answer})}]`);
            });

            await fs.promises.writeFile(filepath, JSON.stringify(content), { flag: 'w+' });

        } catch (ex) {
            logError(ex);
        }
    }
    //send log to client
    const sendLog = (socket, message)=>{
        socket.emit("log", message);
    }


    io.on("connection", onConnection)

}


module.exports = InitSocketIO;
