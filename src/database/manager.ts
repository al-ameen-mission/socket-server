import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { logger } from '../utils/logger';
import config from '../config/env';

// --- Interfaces ---
export interface AnswerRecord {
  studentId: string | number;
  questionId: string | number;
  examId: string | number;         
  examDetailsId: string | number;  
  examGroupId: string | number;    
  answer: string;
}

interface DbInstance {
  db: Database.Database;
  lastUsed: number;
  stmts: {
    upsert: Database.Statement;
    get: Database.Statement;
    getByExam: Database.Statement;
    getByExamDetails: Database.Statement;
    getByExamGroup: Database.Statement;
  };
}

class ConnectionPool {
    private connections: DbInstance[] = [];
    private currentIndex: number = 0;
    private folderPath: string;

    constructor(folderPath: string) {
        this.folderPath = folderPath;
        const poolSize = config.DB_POOL_SIZE || 5;
        
        for (let i = 0; i < poolSize; i++) {
            this.connections.push(this.createConnection());
        }
    }

    private createConnection(): DbInstance {
        const dbPath = path.join(this.folderPath, 'data.db');
        const db = new Database(dbPath);
        
        db.pragma('journal_mode = WAL');
        db.pragma('synchronous = NORMAL');
        db.pragma('busy_timeout = 5000'); // Wait up to 5s for lock
        
        this.initSchema(db);

        return {
            db,
            lastUsed: Date.now(),
            stmts: {
                upsert: db.prepare(`
                    INSERT OR REPLACE INTO answers (student_id, question_id, exam_id, exam_details_id, exam_group_id, answer, updated_at)
                    VALUES (@studentId, @questionId, @examId, @examDetailsId, @examGroupId, @answer, @timestamp)
                `),
                get: db.prepare(`
                    SELECT student_id, question_id, exam_id, exam_details_id, exam_group_id, answer FROM answers WHERE student_id = ?
                `),
                getByExam: db.prepare(`
                    SELECT student_id, question_id, exam_id, exam_details_id, exam_group_id, answer FROM answers WHERE student_id = ? AND exam_id = ?
                `),
                getByExamDetails: db.prepare(`
                    SELECT student_id, question_id, exam_id, exam_details_id, exam_group_id, answer FROM answers WHERE student_id = ? AND exam_details_id = ?
                `),
                getByExamGroup: db.prepare(`
                    SELECT student_id, question_id, exam_id, exam_details_id, exam_group_id, answer FROM answers WHERE student_id = ? AND exam_group_id = ?
                `)
            }
        };
    }

    private initSchema(db: Database.Database) {
        db.exec(`
            CREATE TABLE IF NOT EXISTS answers (
              student_id TEXT NOT NULL,
              question_id TEXT NOT NULL,
              exam_id TEXT NOT NULL,
              exam_details_id TEXT NOT NULL,
              exam_group_id TEXT NOT NULL,
              answer TEXT,
              updated_at INTEGER,
              PRIMARY KEY (student_id, question_id)
            ) WITHOUT ROWID;
            CREATE INDEX IF NOT EXISTS idx_exam_student ON answers(exam_id, student_id);
            CREATE INDEX IF NOT EXISTS idx_exam_details ON answers(exam_details_id, student_id);
            CREATE INDEX IF NOT EXISTS idx_exam_group ON answers(exam_group_id, student_id);
        `);
    }

    public acquire(): DbInstance {
        const instance = this.connections[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.connections.length;
        instance.lastUsed = Date.now();
        return instance;
    }

    public closeAll() {
        for (const conn of this.connections) {
            try {
                conn.db.close();
            } catch (e) {
                logger.error(`Error closing connection: ${e}`);
            }
        }
    }

    public get size(): number {
        return this.connections.length;
    }
}

// --- Global Pool Cache ---
const poolCache = new Map<string, ConnectionPool>();

export const getPool = (folderPath: string): ConnectionPool => {
    const key = path.resolve(folderPath);
    if (poolCache.has(key)) {
        return poolCache.get(key)!;
    }

    if (!fs.existsSync(folderPath)) {
        throw new Error(`Database folder does not exist: ${folderPath}`);
    }

    const pool = new ConnectionPool(folderPath);
    poolCache.set(key, pool);
    return pool;
};

// --- Operations ---
export const upsertBatch = (folderPath: string, records: AnswerRecord[]) => {
    const pool = getPool(folderPath);
    const { db, stmts } = pool.acquire();

    const insertFn = db.transaction((answers: AnswerRecord[]) => {
        const timestamp = Date.now();
        for (const r of answers) {
            stmts.upsert.run({
                studentId: String(r.studentId),
                questionId: String(r.questionId),
                examId: String(r.examId),
                examDetailsId: String(r.examDetailsId),
                examGroupId: String(r.examGroupId),
                answer: r.answer,
                timestamp
            });
        }
    });

    insertFn(records);
};

export const getAnswers = (folderPath: string, studentId: string | number, filters?: { examId?: string, examGroupId?: string, examDetailsIds?: (string | number)[] }): AnswerRecord[] => {
    if (filters?.examDetailsIds && Array.isArray(filters.examDetailsIds) && filters.examDetailsIds.length > 0) {
        return getAnswersByExamDetails(folderPath, studentId, filters.examDetailsIds);
    } else if (filters?.examGroupId) {
        return getAnswersByExamGroup(folderPath, studentId, filters.examGroupId);
    } else if (filters?.examId) {
        return getAnswersByExam(folderPath, studentId, filters.examId);
    } 
    
    const pool = getPool(folderPath);
    const { stmts } = pool.acquire();
    return stmts.get.all(String(studentId)).map(mapRowToAnswerRecord);
}

export const getAnswersByExam = (folderPath: string, studentId: string | number, examId: string | number): AnswerRecord[] => {
    const pool = getPool(folderPath);
    const { stmts } = pool.acquire();
    return stmts.getByExam.all(String(studentId), String(examId)).map(mapRowToAnswerRecord);
}

export const getAnswersByExamGroup = (folderPath: string, studentId: string | number, examGroupId: string | number): AnswerRecord[] => {
    const pool = getPool(folderPath);
    const { stmts } = pool.acquire();
    return stmts.getByExamGroup.all(String(studentId), String(examGroupId)).map(mapRowToAnswerRecord);
}

export const getAnswersByExamDetails = (folderPath: string, studentId: string | number, examDetailsIds: (string | number)[]): AnswerRecord[] => {
    const pool = getPool(folderPath);
    const { db } = pool.acquire();
    if (!examDetailsIds || examDetailsIds.length === 0) return [];

    const placeholders = examDetailsIds.map(() => '?').join(',');
    const sql = `SELECT student_id, question_id, exam_id, exam_details_id, exam_group_id, answer FROM answers WHERE student_id = ? AND exam_details_id IN (${placeholders})`;
    return db.prepare(sql).all(String(studentId), ...examDetailsIds).map(mapRowToAnswerRecord);
}

const mapRowToAnswerRecord = (row: any): AnswerRecord => ({
    studentId: row.student_id,
    questionId: row.question_id,
    examId: row.exam_id,
    examDetailsId: row.exam_details_id,
    examGroupId: row.exam_group_id,
    answer: row.answer
});

export const getDbStats = () => {
    let totalOpen = 0;
    for (const pool of poolCache.values()) {
        totalOpen += pool.size;
    }
    return {
        openConnections: totalOpen,
        maxConnections: 'Dynamic (Pool-based)'
    };
};
