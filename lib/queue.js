const { logError } = require('./log');

class BatchQueue {
  constructor(options = {}) {
    this.batchSize = options.batchSize || 10;
    this.batchTime = options.batchTime || 5000; // 5 seconds default TTL
    this.processor = options.processor || (async () => {});
    this.keyGenerator = options.key; // Function to generate unique key from item
    
    // Use Map if key generator provided, else Array
    this.buffer = this.keyGenerator ? new Map() : [];
    this.timer = null;
    this.isProcessing = false;
  }

  add(item) {
    if (this.keyGenerator) {
      const key = this.keyGenerator(item);
      this.buffer.set(key, item);
    } else {
      this.buffer.push(item);
    }
    
    // Start timer if not already running
    if (!this.timer) {
      this.timer = setTimeout(() => {
        this.flush('timer');
      }, this.batchTime);
    }
    
    // Flush if batch size reached
    const currentSize = this.keyGenerator ? this.buffer.size : this.buffer.length;
    if (currentSize >= this.batchSize) {
      this.flush('size');
    }
  }

  async flush(reason) {
    const currentSize = this.keyGenerator ? this.buffer.size : this.buffer.length;

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
    
    let currentBatch;
    if (this.keyGenerator) {
      currentBatch = Array.from(this.buffer.values());
      this.buffer.clear();
    } else {
      currentBatch = [...this.buffer];
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
      const newSize = this.keyGenerator ? this.buffer.size : this.buffer.length;
      if (newSize > 0) {
        this.timer = setTimeout(() => {
          this.flush('timer-deferred');
        }, this.batchTime);
      }
    }
  }
}

module.exports = { Queue: BatchQueue };
