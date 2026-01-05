import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { logger } from '../utils/logger';
import config from '../config/env';

// --- Interfaces ---
export interface AnswerRecord {
  sId: string | number;
  qId: string | number;
  eId: string | number;
  edId: string | number;
  egId: string | number;
  answer: string;
}

interface DbConnection {
    db: Database.Database;
    stmts: {
        upsert?: Database.Statement;
        del?: Database.Statement;
    };
}

// --- Connection Management ---

// Cache structure
// One writer per folderPath
// Multiple readers per folderPath (Pool)
interface DbInstance {
    writer: DbConnection;
    readers: Database.Database[]; 
    readerIndex: number; // For Round-Robin
}

const dbCache = new Map<string, DbInstance>();
const READER_POOL_SIZE = 5;

const ensureDir = (dirPath: string) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

const initSchema = (db: Database.Database) => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS answers (
            s_id TEXT NOT NULL,
            q_id TEXT NOT NULL,
            e_id TEXT NOT NULL,
            ed_id TEXT NOT NULL,
            eg_id TEXT NOT NULL,
            answer TEXT,
            updated_at INTEGER,
            PRIMARY KEY (s_id, q_id)
        ) WITHOUT ROWID;
        CREATE INDEX IF NOT EXISTS idx_exam_student ON answers(e_id, s_id);
        CREATE INDEX IF NOT EXISTS idx_exam_details ON answers(ed_id, s_id);
        CREATE INDEX IF NOT EXISTS idx_exam_group ON answers(eg_id, s_id);
        CREATE INDEX IF NOT EXISTS idx_student ON answers(s_id);
    `);
};

const initializeDb = (folderPath: string): DbInstance => {
    ensureDir(folderPath);
    const dbPath = path.join(folderPath, 'data.db');
    const key = path.resolve(folderPath);

    logger.info(`Initializing DB at ${dbPath} (WAL Mode)`);

    // 1. Writer Connection
    const writerDb = new Database(dbPath);
    writerDb.pragma('journal_mode = WAL');
    writerDb.pragma('synchronous = NORMAL');
    writerDb.pragma('busy_timeout = 5000');
    initSchema(writerDb);

    const writer: DbConnection = {
        db: writerDb,
        stmts: {
            upsert: writerDb.prepare(`
                INSERT OR REPLACE INTO answers (s_id, q_id, e_id, ed_id, eg_id, answer, updated_at)
                VALUES (@sId, @qId, @eId, @edId, @egId, @answer, @timestamp)
            `),
            del: writerDb.prepare(`
                DELETE FROM answers WHERE s_id = @sId AND q_id = @qId
            `)
        }
    };

    // 2. Reader Pool
    const readers: Database.Database[] = [];
    for (let i = 0; i < READER_POOL_SIZE; i++) {
        // Read-only connections to the SAME file
        // They benefit from WAL mode enabled by the writer
        const readerDb = new Database(dbPath, { readonly: true, fileMustExist: true });
        readerDb.pragma('busy_timeout = 5000'); // Wait if checkpointing
        readers.push(readerDb);
    }

    const instance: DbInstance = { writer, readers, readerIndex: 0 };
    dbCache.set(key, instance);
    
    return instance;
};

const getDbInstance = (folderPath: string): DbInstance => {
    const key = path.resolve(folderPath);
    if (dbCache.has(key)) {
        return dbCache.get(key)!;
    }
    return initializeDb(folderPath);
};

// --- Operations ---

export const upsertBatch = (folderPath: string, records: AnswerRecord[]) => {
    const { writer } = getDbInstance(folderPath);
    const { db, stmts } = writer;

    const insertFn = db.transaction((answers: AnswerRecord[]) => {
        const timestamp = Date.now();
        for (const r of answers) {
            if (!r.answer || r.answer.trim() === '') {
                stmts.del!.run({
                    sId: String(r.sId),
                    qId: String(r.qId)
                });
            } else {
                stmts.upsert!.run({
                    sId: String(r.sId),
                    qId: String(r.qId),
                    eId: String(r.eId),
                    edId: String(r.edId),
                    egId: String(r.egId),
                    answer: r.answer,
                    timestamp
                });
            }
        }
    });

    insertFn(records);
};

// Helper for mapping rows
const mapRow = (row: any): AnswerRecord => ({
    sId: row.s_id,
    qId: row.q_id,
    eId: row.e_id,
    edId: row.ed_id,
    egId: row.eg_id,
    answer: row.answer
});

// Read Operations - Uses Reader Pool
export const getAnswers = (folderPath: string, sId: string | number, filters?: { eId?: string, egId?: string, edIds?: (string | number)[] }): AnswerRecord[] => {
    try {
        // Warning: If DB doesn't exist, initializing it might create a blank file.
        // If strict read-only behavior is needed before ANY write, we should check existence first.
        // However, initializeDb handles creation. Assuming that's acceptable.
        
        const instance = getDbInstance(folderPath);
        
        // Round-Robin Reader Selection
        const readerDb = instance.readers[instance.readerIndex];
        instance.readerIndex = (instance.readerIndex + 1) % instance.readers.length;

        let query = 'SELECT * FROM answers WHERE s_id = ?';
        const params: any[] = [String(sId)];

        if (filters?.edIds && filters.edIds.length > 0) {
            const placeholders = filters.edIds.map(() => '?').join(',');
            query += ` AND ed_id IN (${placeholders})`;
            params.push(...filters.edIds);
        } else if (filters?.egId) {
            query += ' AND eg_id = ?';
            params.push(String(filters.egId));
        } else if (filters?.eId) {
            query += ' AND e_id = ?';
            params.push(String(filters.eId));
        }

        const stmt = readerDb.prepare(query);
        return stmt.all(...params).map(mapRow);
    } catch (e: any) {
        logger.error(`Read error: ${e}`);
        return [];
    }
};

export const getAnswersByExam = (folderPath: string, eId: string | number, filters?: { sId?: string | number, egId?: string | number, edId?: string | number }): AnswerRecord[] => {
    try {
        const instance = getDbInstance(folderPath);
        
        // Round-Robin Reader Selection
        const readerDb = instance.readers[instance.readerIndex];
        instance.readerIndex = (instance.readerIndex + 1) % instance.readers.length;

        let query = 'SELECT * FROM answers WHERE e_id = ?';
        const params: any[] = [String(eId)];

        if (filters?.sId) {
            query += ' AND s_id = ?';
            params.push(String(filters.sId));
        }
        if (filters?.egId) {
            query += ' AND eg_id = ?';
            params.push(String(filters.egId));
        }
        if (filters?.edId) {
            query += ' AND ed_id = ?';
            params.push(String(filters.edId));
        }

        const stmt = readerDb.prepare(query);
        return stmt.all(...params).map(mapRow);
    } catch (e: any) {
        logger.error(`Read By Exam error: ${e}`);
        return [];
    }
};

export const getDbStats = () => {
    return {
        mode: 'SQLite WAL',
        info: `1 Writer, ${READER_POOL_SIZE} Readers`
    };
};
