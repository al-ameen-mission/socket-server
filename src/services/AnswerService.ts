import { upsertBatchAnswers } from "../lib/db";
import { logDebug, logError } from "../lib/log";
import { Queue } from "../lib/queue";
import { StudentRequest, AnswerRecord } from "../types";

// Global Write Queue Service
class AnswerService {
    private queue: Queue<StudentRequest>;

    constructor() {
        this.queue = new Queue<StudentRequest>({
            batchSize: 100,
            batchTime: 5000,
            key: (req) => `${req.studentId}_${req.questionId}`, // Deduplicate
            processor: async (batch) => {
                await this.processBatch(batch);
            }
        });
    }

    public submitAnswer(req: StudentRequest) {
        this.queue.add(req);
    }

    private async processBatch(batch: StudentRequest[]) {
        if (batch.length === 0) return;

        // Group by DB Path (answer_path)
        const domainBatches = new Map<string, StudentRequest[]>();

        for (const req of batch) {
            if (!req.answer_path) {
                logError('Missing answer_path in request');
                continue;
            }
            if (!domainBatches.has(req.answer_path)) {
                domainBatches.set(req.answer_path, []);
            }
            domainBatches.get(req.answer_path)!.push(req);
        }

        // Process each domain's batch
        for (const [folderPath, domainReqs] of domainBatches) {
            const records: AnswerRecord[] = domainReqs.map(req => ({
                studentId: req.studentId,
                questionId: req.questionId,
                examId: req.examdetailsId,
                answer: req.answer
            }));

            try {
                upsertBatchAnswers(folderPath, records);
                logDebug(`Saved ${records.length} answers to ${folderPath}/data.db`);
            } catch (err) {
                logError(`Failed to save batch for ${folderPath}: ${err}`);
            }
        }
    }
}

export const answerService = new AnswerService();
