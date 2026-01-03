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
    // Context added for processing
    answer_path?: string;
    domain?: string;
}

interface AnswerContent {
    [key: string | number]: any;
}

// Global Write Queue
const writeQueue = new Queue<StudentRequest>({
    batchSize: 100, // Larger batch size for global queue
    batchTime: 5000,
    key: (req) => `${req.studentId}_${req.questionId}`, // Deduplicate globally per student+question
    processor: async (batch) => {
        await processGlobalBatch(batch);
    }
});

async function processGlobalBatch(batch: StudentRequest[]) {
    // Group batch items by unique file path (studentId)
    // Map<FilePath, Array<Request>>
    const filesToUpdate = new Map<string, StudentRequest[]>();

    for (const req of batch) {
        if (!req.answer_path || !req.studentId) continue;
        
        let filename = req.studentId + ".json";
        let filepath = `${req.answer_path}${filename}`;
        
        if (!filesToUpdate.has(filepath)) {
            filesToUpdate.set(filepath, []);
        }
        filesToUpdate.get(filepath)!.push(req);
    }

    // Process each file sequentially (or safely parallel if IO permits, but let's stick to simple loop)
    for (const [filepath, requests] of filesToUpdate) {
        await saveRequestsToFile(filepath, requests);
    }
}

async function saveRequestsToFile(filepath: string, requests: StudentRequest[]) {
    if (requests.length === 0) return;
    const sampleReq = requests[0]; // For logging context

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
        requests.forEach(req => {
            content[req.questionId] = req.answer;
            if (req.answer === "") {
                delete content[req.questionId];
            }
            // Use provided domain or fallback
            const d = req.domain || 'unknown';
            logDebug(`[{(d:${d},ts:"${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}",hID: ${req.historyId}, edID:${req.examdetailsId}, qID:${req.questionId}, a:${req.answer === "" ? 0 : req.answer})}]`);
        });

        await fs.promises.writeFile(filepath, JSON.stringify(content), { flag: 'w+' });

    } catch (ex) {
        logError(ex);
    }
}

function InitSocketIO(server: HttpServer) {
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
            // Initialization is now lightweight, just ready check
            // No strict need to track exam_queue unless for other logic
            // Removed exam_queue logic as it was primarily for Queues
            
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
            // Attach context needed for processing
            req.answer_path = answer_path;
            req.domain = domain;
            
            // Add to global write queue
            writeQueue.add(req);

            sendLog(socket, "successfully answer received.")
        })

        //On disconnect
        socket.on("disconnect", () => {

        })
    }

    //send log to client
    const sendLog = (socket: Socket, message: string) => {
        socket.emit("log", message);
    }


    io.on("connection", onConnection)

}


export default InitSocketIO;
