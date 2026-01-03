import { io } from 'socket.io-client';

const URL = 'http://localhost:3000';
const NUM_USERS = 1000;
const ANSWERS = ['A', 'B', 'C', 'D'];

function spawnUser(id: number) {
    const socket = io(URL, {
        path: '/io',
        transports: ['websocket'],
        forceNew: true // Ensure distinct connections
    });

    socket.on('connect', () => {
        console.log(`User ${id} connected`);
        
        // Random interval between 1s and 5s per user
        const interval = Math.floor(Math.random() * 4000) + 1000;
        
        setInterval(() => {
            const payload = {
                examId: '1',
                exam_group_id: '1',
                examdetailsId: '1',
                studentId: id.toString(),
                questionId: Math.floor(Math.random() * 50) + 1,
                historyId: '1',
                answer: ANSWERS[Math.floor(Math.random() * ANSWERS.length)]
            };
            
            socket.emit('answer_by_student', payload);
        }, interval);
    });

    socket.on('connect_error', (err) => {
        console.error(`User ${id} connection error:`, err.message);
    });
}

console.log(`Starting simulation for ${NUM_USERS} users...`);
for (let i = 1; i <= NUM_USERS; i++) {
    spawnUser(i);
}
