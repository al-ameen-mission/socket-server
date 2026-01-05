
import { upsertBatch, getAnswers } from '../src/database/manager';
import fs from 'fs';
import path from 'path';

const TEST_DIR = '/tmp/answers/delete_test';

async function runDeleteTest() {
    console.log('Starting Delete Test...');

    // Cleanup first
    if (fs.existsSync(TEST_DIR)) {
        fs.rmSync(TEST_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(TEST_DIR, { recursive: true });

    const sId = 'student_del_1';
    const qId = 'q1';

    // 1. Insert Initial Answer
    console.log('Step 1: Inserting "Option A"');
    upsertBatch(TEST_DIR, [{
        sId, qId, eId: 'e1', edId: 'ed1', egId: 'eg1', answer: 'Option A'
    }]);

    // Check
    let answers = getAnswers(TEST_DIR, sId);
    if (answers.length === 1 && answers[0].answer === 'Option A') {
        console.log('✅ Initial Insert OK');
    } else {
        console.error('❌ Initial Insert Failed', answers);
        process.exit(1);
    }

    // 2. Insert Empty Answer (Should Delete)
    console.log('Step 2: Inserting "" (Empty String)');
    upsertBatch(TEST_DIR, [{
        sId, qId, eId: 'e1', edId: 'ed1', egId: 'eg1', answer: ''
    }]);

    // Check
    answers = getAnswers(TEST_DIR, sId);
    if (answers.length === 0) {
        console.log('✅ Deletion OK (Record removed)');
    } else {
        console.error('❌ Deletion Failed. Record still exists:', answers);
        process.exit(1);
    }

    // 3. Insert Whitespace Answer (Should Delete)
    // First Re-insert
    upsertBatch(TEST_DIR, [{
        sId, qId, eId: 'e1', edId: 'ed1', egId: 'eg1', answer: 'Option B'
    }]);
    
    console.log('Step 3: Inserting "   " (Whitespace)');
    upsertBatch(TEST_DIR, [{
        sId, qId, eId: 'e1', edId: 'ed1', egId: 'eg1', answer: '   '
    }]);

    // Check
    answers = getAnswers(TEST_DIR, sId);
    if (answers.length === 0) {
        console.log('✅ Whitespace Deletion OK');
    } else {
        console.error('❌ Whitespace Deletion Failed', answers);
        process.exit(1);
    }

    console.log('🎉 All Tests Passed');
    // Cleanup
    fs.rmSync(TEST_DIR, { recursive: true, force: true });
}

runDeleteTest().catch(console.error);
