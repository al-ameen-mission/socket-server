const fs = require("fs");
const {logError, logDebug} = require("../lib/log");
const {Queue} = require("dynamic-queue");
const socket = require("socket.io");
const moment = require("moment");
const portal = require("../lib/portal")();
function InitSocketIO(server){
    let exam_queue = {};
    let io = socket(server, {
        path: '/io'
    });
    const onConnection = (socket) =>{
        let referer = new URL(socket.handshake.headers.referer);
        let domain = referer.hostname;
        let domain_config = portal.getConfig(domain);

        if(!domain_config){
            logError(new Error(`No configuration found for this ${domain}`));
        }
        let answer_path = domain_config.getAnswerFilePath();

        if(!fs.existsSync(answer_path)){
            console.log(`'${answer_path}' directory not find`);
            socket.disconnect();
        }

        //logout other devices
        console.log(io.sockets.sockets);

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

            exam_queue[exam_group_id][studentId].push(async () => {
                saveAnswerInFile(req, answer_path, domain);
            });
            exam_queue[exam_group_id][studentId].resume();
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
            exam_queue[exam_group_id][studentId] = new Queue();
            exam_queue[exam_group_id][studentId].catch((err) => {
                logError(err);
                exam_queue[exam_group_id][studentId].resume();
            });
            sendLog(socket, "Init successfully");
        }
    }
    //save answer to file
    const saveAnswerInFile = (req , answer_path, domain) => {
        let filename = req.studentId+".json";
        let filepath = `${answer_path}${filename}`;

        try {
            let content = fs.readFileSync(filepath).toString();
            content = JSON.parse(content);
            content[req.questionId] = req.answer;
            if(req.answer==""){
                delete content[req.questionId];
            }

            fs.writeFile(filepath, JSON.stringify(content), { flag: 'w+' }, function (err) {
                if (err){
                    throw err;
                }
            });

        } catch (ex){
            logError(ex);
        }

        logDebug(`[{(d:${domain},ts:"${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}",hID: ${req.historyId}, edID:${req.examdetailsId}, qID:${req.questionId}, a:${req.answer===""?0:req.answer})}]`);
    }
    //send log to client
    const sendLog = (socket, message)=>{
        socket.emit("log", message);
    }


    io.on("connection", onConnection)

}


module.exports = InitSocketIO;
