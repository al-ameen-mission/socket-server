import fs from "fs";
import { logError, logDebug } from "./log";
import { Queue } from "./queue";
import { Server, Socket } from "socket.io";
import moment from "moment";
import { Server as HttpServer } from "http";

interface StudentRequest {
    exam_group_id: string | number;
    historyId: string | number;
    studentId: string | number;
    questionId: string | number;
    answer: string;
    examdetailsId: string | number;
    endtimestamp?: number;
}

interface AnswerContent {
    [key: string | number]: any;
}

function InitSocketIO(server: HttpServer) {
    let exam_queue: any = {};

    let io = new Server(server, {
        path: '/io',
        cors: {
            origin: "*", 
            methods: ["GET", "POST"]
        }
    });

    const onConnection = (socket: Socket) => {
        let refererUrl = socket.handshake.headers.referer;
        if (!refererUrl) {
            console.log('No referer found');
            socket.disconnect();
            return;
        }
        let referer = new URL(refererUrl);
        let domain = referer.hostname;
        let answer_path = (process.env.ANSWER_PATH || '').replace("{domain}", domain);

        if (!fs.existsSync(answer_path)) {
            console.log(`'${answer_path}' directory not find`);
            socket.disconnect();
            return;
        }

        sendLog(socket, "Connected to socket server.")
        //init socket
        socket.on("init_exam", (req: StudentRequest) => {
            let exam_group_id = req.exam_group_id;
            let historyId = req.historyId;
            let studentId = req.studentId;

            if (exam_queue[exam_group_id] === undefined) {
                exam_queue[exam_group_id] = {};
            }

            if (exam_queue[exam_group_id][studentId] !== undefined) {
                sendLog(socket, "Already Initialized")
                return;
            }

            // For init, we don't necessarily need the batch queue unless we are queueing setup tasks.
            // But preserving existing structure where we assign a queue.
            // The previous code initialized a Queue here but didn't pass options. 
            // We should use the same init logic as below or just a placeholder if it's meant to be the same queue.
            // Actually, initQueue function handles creation with correct options.
            initQueue(exam_group_id, studentId, socket, answer_path, domain);
            
            sendLog(socket, "Init successfully");
        })
        //On remaining time event
        socket.on("get_remaining_time", (req: StudentRequest) => {
            let endtimestamp_in_ms = req.endtimestamp || 0;
            let nowtimestamp_in_ms = Date.now();

            let remainig_time = (endtimestamp_in_ms - nowtimestamp_in_ms) / 1000
            if (remainig_time < 0) {
                remainig_time = 0;
            }
            socket.emit("remaining_time", {
                remaining_time: remainig_time
            });
        })
        //On Answer question
        socket.on("answer_by_student", (req: StudentRequest) => {
            let exam_group_id = req.exam_group_id;
            let studentId = req.studentId;

            initQueue(exam_group_id, studentId, socket, answer_path, domain);

            if (exam_queue[exam_group_id] && exam_queue[exam_group_id][studentId]) {
                exam_queue[exam_group_id][studentId].add(req);
            }
            sendLog(socket, "successfully answer received.")
        })
        //On disconnect
        socket.on("disconnect", () => {

        })
    }
    //
    const initQueue = (exam_group_id: string|number, studentId: string|number, socket: Socket, answer_path: string, domain: string) => {
        if (exam_queue[exam_group_id] === undefined) {
            exam_queue[exam_group_id] = {};
        }
        if (exam_queue[exam_group_id][studentId] !== undefined) {
            // Already initialized, do nothing or log
            // sendLog(socket, "Already Initialized") // Optional: repetitive log
        } else {
            exam_queue[exam_group_id][studentId] = new Queue<StudentRequest>({
                batchSize: 10,
                batchTime: 5000,
                key: (req) => req.questionId, // Deduplicate based on questionId
                processor: async (batch) => {
                    await saveBatchAnswers(batch, answer_path, domain);
                }
            });
            // sendLog(socket, "Init successfully"); // Optional to avoid double sending
        }
    }
    
    //save batch answers to file
    const saveBatchAnswers = async (batch: StudentRequest[], answer_path: string, domain: string) => {
        if (batch.length === 0) return;

        // Assuming all requests in a batch are for the same student (since queue is per student)
        let studentId = batch[0].studentId;
        let filename = studentId + ".json";
        let filepath = `${answer_path}${filename}`;

        try {
            let content: AnswerContent = {};
            try {
                if (fs.existsSync(filepath)) {
                    let fileContent = await fs.promises.readFile(filepath, 'utf8');
                    content = JSON.parse(fileContent);
                }
            } catch (readErr) {
                logError(`Error reading file ${filepath}: ${readErr}`);
            }

            // Apply all updates
            batch.forEach(req => {
                content[req.questionId] = req.answer;
                if (req.answer === "") {
                    delete content[req.questionId];
                }

                logDebug(`[{(d:${domain},ts:"${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}",hID: ${req.historyId}, edID:${req.examdetailsId}, qID:${req.questionId}, a:${req.answer === "" ? 0 : req.answer})}]`);
            });

            await fs.promises.writeFile(filepath, JSON.stringify(content), { flag: 'w+' });

        } catch (ex) {
            logError(ex);
        }
    }
    //send log to client
    const sendLog = (socket: Socket, message: string) => {
        socket.emit("log", message);
    }


    io.on("connection", onConnection)

}


export default InitSocketIO;
