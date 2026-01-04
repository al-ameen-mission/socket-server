
import { StudentRequest } from '../src/types';

const BASE_URL = 'http://socket.al-ameen.lo';
const HOSTNAME = 'socket.al-ameen.lo';

async function runBulkUploadTest() {
    console.log('Starting Bulk Upload Test...');

    const payload: { hostname: string; answers: Partial<StudentRequest>[] } = {
        hostname: HOSTNAME,
        answers: []
    };

    // Generate 50 dummy answers
    for (let i = 0; i < 50; i++) {
        payload.answers.push({
            sId: 1, // 10 students
            qId: `q_${i % 5}`,                    // 5 questions each
            eId: 'exam_test_1',
            edId: 'ed_test_1',
            egId: 'eg_test_1',
            ans: ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)]
        });
    }

    try {
        const start = performance.now();
        const response = await fetch(`${BASE_URL}/submissions/bulk`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const end = performance.now();

        if (response.ok) {
            const data = await response.json();
            console.log('✅ Bulk Upload Successful!');
            console.log(`   Status: ${response.status}`);
            console.log(`   Response:`, data);
            console.log(`   Time taken: ${(end - start).toFixed(2)}ms`);
        } else {
            console.error('❌ Bulk Upload Failed!');
            console.error(`   Status: ${response.status}`);
            console.error(`   Text:`, await response.text());
        }

    } catch (error) {
        console.error('❌ Network/System Error:', error);
    }
}

runBulkUploadTest();
