import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { logger } from '../utils/logger';

// --- Interfaces ---
export interface AnswerRecord {
  studentId: string | number;
  questionId: string | number;
  examId?: string | number;
  answer: string;
}

interface DbInstance {
  db: Database.Database;
  lastUsed: number;
  stmts: {
    upsert: Database.Statement;
    get: Database.Statement;
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
      exam_id TEXT,
      answer TEXT,
      updated_at INTEGER,
      PRIMARY KEY (student_id, question_id)
      ) WITHOUT ROWID;
    CREATE INDEX IF NOT EXISTS idx_exam_student ON answers(exam_id, student_id);
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
      // We assume caller validates existence, but we can't open a DB in non-existent dir
      // Throwing here is better than crashing on new Database()
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
                INSERT OR REPLACE INTO answers (student_id, question_id, exam_id, answer, updated_at)
                VALUES (@studentId, @questionId, @examId, @answer, @timestamp)
            `),
            get: db.prepare(`
                SELECT question_id, answer FROM answers WHERE student_id = ?
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
        try {
            dbCache.get(oldestKey)?.db.close();
        } catch (e) {
            logger.error(`Failed to close DB ${oldestKey}: ${e}`);
        }
        dbCache.delete(oldestKey);
    }
}

// --- Operations ---
export const upsertBatch = (folderPath: string, records: AnswerRecord[]) => {
  const { db, stmts } = getDatabase(folderPath);

  const insertFn = db.transaction((answers: AnswerRecord[]) => {
    const timestamp = Date.now();
    for (const r of answers) {
      stmts.upsert.run({
        studentId: String(r.studentId),
        questionId: String(r.questionId),
        examId: r.examId ? String(r.examId) : null,
        answer: r.answer,
        timestamp
      });
    }
  });

  insertFn(records);
};

export const getAnswers = (folderPath: string, studentId: string | number): Record<string, string> => {
    const { stmts } = getDatabase(folderPath);
    const rows = stmts.get.all(String(studentId)) as { question_id: string, answer: string }[];
    
    const result: Record<string, string> = {};
    for (const row of rows) {
        result[row.question_id] = row.answer;
    }
    return result;
}
