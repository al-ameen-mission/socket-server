import { io } from 'socket.io-client';

const URL = 'http://localhost:3000';
const NUM_USERS = 2000;
const BATCH_SIZE = 50;
const BATCH_DELAY_MS = 1000;
const ANSWERS = ['A', 'B', 'C', 'D'];

function spawnUser(id: number) {
    const socket = io(URL, {
        path: '/io',
        transports: ['websocket'],
        forceNew: true
    });

    socket.on('connect', () => {
        // Random interval between 1s and 5s per user
        const interval = Math.floor(Math.random() * 4000) + 1000;
        
        setInterval(() => {
            const payload = {
                eId: '1',
                egId: '1',
                edId: '1',
                sId: id.toString(),
                qId: Math.floor(Math.random() * 50) + 1,
                hId: '1',
                ans: ANSWERS[Math.floor(Math.random() * ANSWERS.length)]
            };
            
            socket.emit('answer_by_student', payload);
        }, interval);
    });

    socket.on('connect_error', (err) => {
        console.error(`User ${id} connection error:`, err.message);
    });
}

async function startSimulation() {
    console.log(`Starting simulation for ${NUM_USERS} users in batches of ${BATCH_SIZE}...`);
    
    for (let i = 1; i <= NUM_USERS; i += BATCH_SIZE) {
        const end = Math.min(i + BATCH_SIZE - 1, NUM_USERS);
        console.log(`Spawning users ${i} to ${end}...`);
        
        for (let j = i; j <= end; j++) {
            spawnUser(j);
        }
        
        if (end < NUM_USERS) {
            await new Promise(resolve => setTimeout(resolve, BATCH_DELAY_MS));
        }
    }
    
    console.log('All users spawned.');
}

startSimulation();
