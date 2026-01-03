import Database from 'better-sqlite3';
import path from 'path';
import { logger } from './log';
import fs from 'fs';

import { AnswerRecord } from '../types';

interface DbInstance {
  db: Database.Database;
  lastUsed: number;
  stmts: {
    upsert: Database.Statement;
    get: Database.Statement;
  };
}

// Memory Safety: Limit open DB connections
const MAX_OPEN_DBS = 50; 
const dbCache = new Map<string, DbInstance>();

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

export const getDatabase = (folderPath: string): DbInstance => {
  // Normalize path as key
  const key = path.resolve(folderPath);

  if (dbCache.has(key)) {
    const instance = dbCache.get(key)!;
    instance.lastUsed = Date.now();
    return instance;
  }

  // Memory Protection: Close LRU if full
  if (dbCache.size >= MAX_OPEN_DBS) {
    let oldestKey = '';
    let oldestTime = Infinity;
    for (const [k, v] of dbCache.entries()) {
      if (v.lastUsed < oldestTime) {
        oldestTime = v.lastUsed;
        oldestKey = k;
      }
    }
    if (oldestKey) {
      logger.info(`Closing inactive DB: ${oldestKey}`);
      try {
        dbCache.get(oldestKey)?.db.close();
      } catch (e) {
        logger.error(`Error closing DB ${oldestKey}: ${e}`);
      }
      dbCache.delete(oldestKey);
    }
  }

  // Ensure directory exists
  if (!fs.existsSync(folderPath)) {
     // Usually sock.ts checks this, but for safety
     // fs.mkdirSync(folderPath, { recursive: true });
     // User requirement implies folder should exist, assume valid path passed
  }

  const dbPath = path.join(folderPath, 'data.db');
  logger.info(`Opening/Creating DB at ${dbPath}`);
  
  const db = new Database(dbPath);
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
};

// Batch Writer
export const upsertBatchAnswers = (folderPath: string, records: AnswerRecord[]) => {
  const { db, stmts } = getDatabase(folderPath);

  const insertMany = db.transaction((answers: AnswerRecord[]) => {
    const timestamp = Date.now();
    for (const record of answers) {
      stmts.upsert.run({
        studentId: String(record.studentId),
        questionId: String(record.questionId),
        examId: record.examId ? String(record.examId) : null,
        answer: record.answer,
        timestamp
      });
    }
  });

  try {
    insertMany(records);
  } catch (err) {
    logger.error(`Batch Insert Failed for ${folderPath}: ${err}`);
    throw err;
  }
};

// Reader
export const getStudentAnswers = (folderPath: string, studentId: string | number) => {
  try {
    const { stmts } = getDatabase(folderPath);
    const rows = stmts.get.all(String(studentId));
    
    // Convert back to map format expected by frontend { qId: answer }
    const answerMap: Record<string, any> = {};
    for (const row of rows as any[]) {
      answerMap[row.question_id] = row.answer;
    }
    return answerMap;
  } catch (err) {
    logger.error(`Get Answers Failed for ${folderPath}: ${err}`);
    return {};
  }
};
