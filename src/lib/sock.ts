import fs from "fs";
import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";
import { answerService } from "../services/AnswerService";
import { StudentRequest } from "../types";

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
        
        // Context resolution
        let answer_path = (process.env.ANSWER_PATH || '').replace("{domain}", domain);

        if (!fs.existsSync(answer_path)) {
            console.log(`'${answer_path}' directory not found`);
            socket.disconnect();
            return;
        }

        sendLog(socket, "Connected to socket server.")
        
        // On remaining time event
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

        // On Answer question
        socket.on("answer_by_student", (req: StudentRequest) => {
            // Attach context
            req.answer_path = answer_path;
            req.domain = domain;
            
            // Delegate to Service
            answerService.submitAnswer(req);
            
            sendLog(socket, "successfully answer received.")
        })

        // On disconnect
        socket.on("disconnect", () => {
            // cleanup if needed
        })
    }

    // send log to client
    const sendLog = (socket: Socket, message: string) => {
        socket.emit("log", message);
    }

    io.on("connection", onConnection)
}

export default InitSocketIO;
