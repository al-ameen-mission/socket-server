import { upsertBatch, AnswerRecord } from '../database/manager';
import { logger } from '../utils/logger';
import { StudentRequest } from '../types';

// Custom Minimal Queue Implementation
// We embed it here to avoid complex external dependencies for now, keeping it self-contained.
type BatchProcessor<T> = (items: T[]) => Promise<void>;

class BatchQueue<T> {
    private buffer: Map<string, T> = new Map();
    private timer: NodeJS.Timeout | null = null;
    
    constructor(
        private batchSize: number,
        private batchTimeMs: number,
        private processor: BatchProcessor<T>,
        private keyGenerator: (item: T) => string
    ) {}

    add(item: T) {
        // Deduplicate using key
        const key = this.keyGenerator(item);
        this.buffer.set(key, item);

        if (this.buffer.size >= this.batchSize) {
            this.flush();
        } else if (!this.timer) {
            this.timer = setTimeout(() => this.flush(), this.batchTimeMs);
        }
    }

    private async flush() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        if (this.buffer.size === 0) return;

        const items = Array.from(this.buffer.values());
        this.buffer.clear();

        try {
            await this.processor(items);
        } catch (e) {
            logger.error(`Queue processing failed: ${e}`);
        }
    }

    public get size(): number {
        return this.buffer.size;
    }
}

// Service
class SubmissionService {
    private queue: BatchQueue<StudentRequest>;
    private totalSaves: number = 0;

    constructor() {
        // Init Queue: Batch 100 items or flush every 2s
        this.queue = new BatchQueue<StudentRequest>(
            100, 
            2000, 
            this.processBatch.bind(this),
            (req) => `${req.studentId}_${req.questionId}` // Key for deduplication
        );
    }

    public enqueue(req: StudentRequest) {
        this.totalSaves++;
        this.queue.add(req);
    }

    private async processBatch(batch: StudentRequest[]) {
        logger.debug(`Processing batch of ${batch.length} answers`);
        
        // Group by Domain Path
        const domainGroups = new Map<string, StudentRequest[]>();

        for (const req of batch) {
            if (!req.answer_path) {
                logger.warn('Skipping request with missing answer_path');
                continue;
            }
            if (!domainGroups.has(req.answer_path)) {
                domainGroups.set(req.answer_path, []);
            }
            domainGroups.get(req.answer_path)!.push(req);
        }

        // Write to DBs
        for (const [folderPath, requests] of domainGroups) {
            const records: AnswerRecord[] = requests.map(r => ({
                studentId: r.studentId,
                questionId: r.questionId,
                examId: r.examdetailsId, // Note: In StudentRequest it's examdetailsId (lowercase 'd')
                examDetailsId: r.examdetailsId,
                examGroupId: r.exam_group_id, // Added required field
                answer: r.answer
            }));

            try {
                upsertBatch(folderPath, records);
                logger.info(`Persisted ${records.length} answers to ${folderPath}`);
            } catch (e) {
                logger.error(`Failed to write batch to ${folderPath}: ${e}`);
            }
        }
    }
    public getQueueStats() {
        return {
            bufferSize: this.queue.size,
            totalSaves: this.totalSaves
        };
    }
}

export const submissionService = new SubmissionService();
