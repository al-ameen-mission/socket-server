import { logError } from './log';

interface QueueOptions<T> {
  batchSize?: number;
  batchTime?: number;
  processor?: (batch: T[]) => Promise<void>;
  key?: (item: T) => string | number;
}

export class Queue<T> {
  private batchSize: number;
  private batchTime: number;
  private processor: (batch: T[]) => Promise<void>;
  private keyGenerator?: (item: T) => string | number;
  
  private buffer: Map<string | number, T> | T[];
  private timer: NodeJS.Timeout | null;
  private isProcessing: boolean;

  constructor(options: QueueOptions<T> = {}) {
    this.batchSize = options.batchSize || 10;
    this.batchTime = options.batchTime || 5000; // 5 seconds default TTL
    this.processor = options.processor || (async () => {});
    this.keyGenerator = options.key; // Function to generate unique key from item
    
    // Use Map if key generator provided, else Array
    this.buffer = this.keyGenerator ? new Map<string | number, T>() : [];
    this.timer = null;
    this.isProcessing = false;
  }

  add(item: T): void {
    if (this.keyGenerator) {
      const key = this.keyGenerator(item);
      (this.buffer as Map<string | number, T>).set(key, item);
    } else {
      (this.buffer as T[]).push(item);
    }
    
    // Start timer if not already running
    if (!this.timer) {
      this.timer = setTimeout(() => {
        this.flush('timer');
      }, this.batchTime);
    }
    
    // Flush if batch size reached
    const currentSize = this.keyGenerator ? (this.buffer as Map<string | number, T>).size : (this.buffer as T[]).length;
    if (currentSize >= this.batchSize) {
      this.flush('size');
    }
  }

  async flush(reason: string): Promise<void> {
    const currentSize = this.keyGenerator ? (this.buffer as Map<string | number, T>).size : (this.buffer as T[]).length;

    // Prevent concurrent flushes or empty flushes
    if (this.isProcessing || currentSize === 0) {
      return;
    }
    
    // Clear timer upon flush
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.isProcessing = true;
    
    let currentBatch: T[];
    if (this.keyGenerator) {
      currentBatch = Array.from((this.buffer as Map<string | number, T>).values());
      (this.buffer as Map<string | number, T>).clear();
    } else {
      currentBatch = [...(this.buffer as T[])];
      this.buffer = [];
    }

    try {
      await this.processor(currentBatch);
    } catch (err) {
      logError(err);
      // Optional: re-queue items or handle failure strategy
    } finally {
      this.isProcessing = false;
      
      // Check if items arrived while processing (deferred flush)
      const newSize = this.keyGenerator ? (this.buffer as Map<string | number, T>).size : (this.buffer as T[]).length;
      if (newSize > 0) {
        this.timer = setTimeout(() => {
          this.flush('timer-deferred');
        }, this.batchTime);
      }
    }
  }
}
