import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { logger } from '../utils/logger';

// --- Interfaces ---
export interface AnswerRecord {
  studentId: string | number;
  questionId: string | number;
  examId: string | number;         // Required
  examDetailsId: string | number;  // Required
  examGroupId: string | number;    // Added & Required
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
    getByExamGroup: Database.Statement; // Added
  };
}

// --- Constants ---
const MAX_OPEN_DBS = 50; 
const dbCache = new Map<string, DbInstance>();

// --- Helper: Initialize Schema ---
const initSchema = (db: Database.Database) => {
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
};

// --- Core: Get Database Connection ---
export const getDatabase = (folderPath: string): DbInstance => {
  const key = path.resolve(folderPath);

  // 1. Return cached
  if (dbCache.has(key)) {
    const instance = dbCache.get(key)!;
    instance.lastUsed = Date.now();
    return instance;
  }

  // 2. Prune Cache if full
  if (dbCache.size >= MAX_OPEN_DBS) {
     pruneOldestConnection();
  }

  // 3. Ensure Directory (Safety)
  if (!fs.existsSync(folderPath)) {
      throw new Error(`Database folder does not exist: ${folderPath}`);
  }

  // 4. Open New Connection
  return openNewConnection(key, folderPath);
};

const openNewConnection = (key: string, folderPath: string): DbInstance => {
    const dbPath = path.join(folderPath, 'data.db');
    logger.info(`Opening DB connection: ${dbPath}`);

    const db = new Database(dbPath);
    // Performance tuning (WAL)
    db.pragma('journal_mode = WAL');
    db.pragma('synchronous = NORMAL');
    
    initSchema(db);

    const instance: DbInstance = {
        db,
        lastUsed: Date.now(),
        stmts: {
            upsert: db.prepare(`
                INSERT OR REPLACE INTO answers (student_id, question_id, exam_id, exam_details_id, exam_group_id, answer, updated_at)
                VALUES (@studentId, @questionId, @examId, @examDetailsId, @examGroupId, @answer, @timestamp)
            `),
            get: db.prepare(`
                SELECT question_id, answer FROM answers WHERE student_id = ?
            `),
            getByExam: db.prepare(`
                SELECT question_id, answer FROM answers WHERE student_id = ? AND exam_id = ?
            `),
            getByExamDetails: db.prepare(`
                SELECT question_id, answer FROM answers WHERE student_id = ? AND exam_details_id = ?
            `),
            getByExamGroup: db.prepare(`
                SELECT question_id, answer FROM answers WHERE student_id = ? AND exam_group_id = ?
            `)
        }
    };

    dbCache.set(key, instance);
    return instance;
}

const pruneOldestConnection = () => {
    let oldestKey = '';
    let oldestTime = Infinity;
    
    for (const [k, v] of dbCache.entries()) {
      if (v.lastUsed < oldestTime) {
        oldestTime = v.lastUsed;
        oldestKey = k;
      }
    }

    if (oldestKey) {
        logger.info(`Pruning inactive DB connection: ${oldestKey}`);
        closeDatabase(oldestKey);
    }
}

const closeDatabase = (key: string) => {
    try {
        const instance = dbCache.get(key);
        if (instance) {
           instance.db.close();
        }
    } catch (e) {
        logger.error(`Failed to close DB ${key}: ${e}`);
    }
    dbCache.delete(key);
}

// Automatic Cleanup of Idle Connections (TTL)
const IDLE_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes
const CLEANUP_INTERVAL_MS = 60 * 1000; // Check every minute

setInterval(() => {
    const now = Date.now();
    let closedCount = 0;
    
    for (const [key, instance] of dbCache.entries()) {
        if (now - instance.lastUsed > IDLE_TIMEOUT_MS) {
            closeDatabase(key);
            closedCount++;
        }
    }
    if (closedCount > 0) {
        logger.info(`TTL Cleanup: Closed ${closedCount} idle connections`);
    }
}, CLEANUP_INTERVAL_MS).unref(); // unref so it doesn't prevent app exit

// --- Operations ---
export const upsertBatch = (folderPath: string, records: AnswerRecord[]) => {
  const { db, stmts } = getDatabase(folderPath);

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

export const getAnswers = (folderPath: string, studentId: string | number, filters?: { examId?: string, examGroupId?: string, examDetailsIds?: (string | number)[] }): Record<string, string> => {
    // Priority: examDetailsIds (Array) > examGroupId > examId
    if (filters?.examDetailsIds && Array.isArray(filters.examDetailsIds) && filters.examDetailsIds.length > 0) {
        return getAnswersByExamDetails(folderPath, studentId, filters.examDetailsIds);
    } else if (filters?.examGroupId) {
        return getAnswersByExamGroup(folderPath, studentId, filters.examGroupId);
    } else if (filters?.examId) {
        return getAnswersByExam(folderPath, studentId, filters.examId);
    } 
    
    // Default: Get all
    const { stmts } = getDatabase(folderPath);
    const rows = stmts.get.all(String(studentId)) as { question_id: string, answer: string }[];
    return mapRowsToRecord(rows);
}

export const getAnswersByExam = (folderPath: string, studentId: string | number, examId: string | number): Record<string, string> => {
    const { stmts } = getDatabase(folderPath);
    const rows = stmts.getByExam.all(String(studentId), String(examId)) as { question_id: string, answer: string }[];
    return mapRowsToRecord(rows);
}

export const getAnswersByExamGroup = (folderPath: string, studentId: string | number, examGroupId: string | number): Record<string, string> => {
    const { stmts } = getDatabase(folderPath);
    const rows = stmts.getByExamGroup.all(String(studentId), String(examGroupId)) as { question_id: string, answer: string }[];
    return mapRowsToRecord(rows);
}

export const getAnswersByExamDetails = (folderPath: string, studentId: string | number, examDetailsIds: (string | number)[]): Record<string, string> => {
    const { db } = getDatabase(folderPath);
    if (!examDetailsIds || examDetailsIds.length === 0) return {};

    const placeholders = examDetailsIds.map(() => '?').join(',');
    const sql = `SELECT question_id, answer FROM answers WHERE student_id = ? AND exam_details_id IN (${placeholders})`;
    const rows = db.prepare(sql).all(String(studentId), ...examDetailsIds) as { question_id: string, answer: string }[];
    return mapRowsToRecord(rows);
}

const mapRowsToRecord = (rows: { question_id: string, answer: string }[]) => {
    const result: Record<string, string> = {};
    for (const row of rows) {
        result[row.question_id] = row.answer;
    }
    return result;
}

export const getDbStats = () => {
    return {
        openConnections: dbCache.size,
        maxConnections: MAX_OPEN_DBS
    };
};
