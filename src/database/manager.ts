import path from 'path';
import fs from 'fs';
import { logger } from '../utils/logger';

// --- Interfaces ---
export interface AnswerRecord {
  studentId: string | number;
  questionId: string | number;
  examId: string | number;         
  examDetailsId: string | number;  
  examGroupId: string | number;    
  answer: string;
}

// --- Operations ---

// Helper to ensure directory exists
const ensureDir = (dirPath: string) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

const getStudentFilePath = (folderPath: string, studentId: string | number) => {
    const answersDir = path.join(folderPath);
    ensureDir(answersDir);
    return path.join(answersDir, `${studentId}.json`);
};

export const upsertBatch = (folderPath: string, records: AnswerRecord[]) => {
    // Group records by studentId to minimize file IO
    const recordsByStudent = new Map<string, AnswerRecord[]>();
    for (const record of records) {
        const sId = String(record.studentId);
        if (!recordsByStudent.has(sId)) {
            recordsByStudent.set(sId, []);
        }
        recordsByStudent.get(sId)!.push(record);
    }

    // Process each student
    for (const [studentId, studentRecords] of recordsByStudent) {
        try {
            const filePath = getStudentFilePath(folderPath, studentId);
            
            let existingData: Record<string, string> = {};
            
            // Read existing
            if (fs.existsSync(filePath)) {
                try {
                    const fileContent = fs.readFileSync(filePath, 'utf-8');
                    existingData = JSON.parse(fileContent);
                } catch (e) {
                    logger.warn(`Failed to parse existing JSON for student ${studentId}: ${e}. Overwriting/Starting fresh.`);
                }
            }

            // Update with new answers
            let changed = false;
            for (const r of studentRecords) {
                const qId = String(r.questionId);
                if (existingData[qId] !== r.answer) {
                    existingData[qId] = r.answer;
                    changed = true;
                }
            }

            // Write back if changed
            if (changed) {
                fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
            }

        } catch (e) {
            logger.error(`Error processing batch for student ${studentId}: ${e}`);
        }
    }
};





