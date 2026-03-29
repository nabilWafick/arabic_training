/**
 * Performance Utilities
 * Collection of utilities for measuring and optimizing application performance
 */

// Type for any function
type AnyFunction = (...args: unknown[]) => unknown;

/**
 * Measure the execution time of a function
 * @param label - Label for the measurement
 * @param fn - Function to measure
 * @returns The result of the function
 */
export function measureTime<T>(label: string, fn: () => T): T {
  if (process.env.NODE_ENV !== 'production') {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`[Performance] ${label}: ${(end - start).toFixed(2)}ms`);
    return result;
  }
  return fn();
}

/**
 * Measure async function execution time
 * @param label - Label for the measurement
 * @param fn - Async function to measure
 * @returns Promise with the result
 */
export async function measureTimeAsync<T>(label: string, fn: () => Promise<T>): Promise<T> {
  if (process.env.NODE_ENV !== 'production') {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    console.log(`[Performance] ${label}: ${(end - start).toFixed(2)}ms`);
    return result;
  }
  return fn();
}

/**
 * Debounce a function - delays execution until after wait ms have elapsed
 * since the last call
 * @param fn - Function to debounce
 * @param ms - Milliseconds to wait
 * @returns Debounced function
 */
export function debounce<T extends AnyFunction>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
      timeoutId = null;
    }, ms);
  };
}

/**
 * Debounce with leading edge - executes immediately then debounces
 * @param fn - Function to debounce
 * @param ms - Milliseconds to wait
 * @returns Debounced function
 */
export function debounceLeading<T extends AnyFunction>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastCallTime = 0;

  return function (this: unknown, ...args: Parameters<T>) {
    const now = Date.now();
    
    if (now - lastCallTime >= ms) {
      fn.apply(this, args);
      lastCallTime = now;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
        lastCallTime = Date.now();
        timeoutId = null;
      }, ms - (now - lastCallTime));
    }
  };
}

/**
 * Throttle a function - ensures function is called at most once per ms
 * @param fn - Function to throttle
 * @param ms - Minimum milliseconds between calls
 * @returns Throttled function
 */
export function throttle<T extends AnyFunction>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => void {
  let lastCallTime = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: Parameters<T>) {
    const now = Date.now();
    const timeSinceLastCall = now - lastCallTime;

    if (timeSinceLastCall >= ms) {
      fn.apply(this, args);
      lastCallTime = now;
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
        lastCallTime = Date.now();
        timeoutId = null;
      }, ms - timeSinceLastCall);
    }
  };
}

/**
 * Request idle callback with fallback for unsupported browsers
 * @param callback - Function to run when idle
 * @param options - Options for the idle callback
 * @returns ID that can be used to cancel
 */
export function requestIdleCallback(
  callback: IdleRequestCallback,
  options?: IdleRequestOptions
): number {
  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      return window.requestIdleCallback(callback, options);
    }
    // Fallback using setTimeout
    return (window as Window).setTimeout(() => {
      callback({
        didTimeout: false,
        timeRemaining: () => 50,
      });
    }, options?.timeout ?? 1) as unknown as number;
  }
  return 0;
}

/**
 * Cancel idle callback
 * @param id - ID returned from requestIdleCallback
 */
export function cancelIdleCallback(id: number): void {
  if (typeof window !== 'undefined') {
    if ('cancelIdleCallback' in window) {
      window.cancelIdleCallback(id);
    } else {
      (window as Window).clearTimeout(id);
    }
  }
}

/**
 * Memoize a function - caches results based on arguments
 * @param fn - Function to memoize
 * @param getKey - Optional function to generate cache key
 * @returns Memoized function
 */
export function memoize<T extends AnyFunction>(
  fn: T,
  getKey?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>();

  return function (this: unknown, ...args: Parameters<T>) {
    const key = getKey ? getKey(...args) : JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args) as ReturnType<T>;
    cache.set(key, result);
    return result;
  } as T;
}

/**
 * Memoize with max cache size (LRU-like)
 * @param fn - Function to memoize
 * @param maxSize - Maximum cache entries
 * @returns Memoized function
 */
export function memoizeWithLimit<T extends AnyFunction>(
  fn: T,
  maxSize: number = 100
): T {
  const cache = new Map<string, ReturnType<T>>();

  return function (this: unknown, ...args: Parameters<T>) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      // Move to end (most recently used)
      const value = cache.get(key);
      cache.delete(key);
      cache.set(key, value!);
      return value;
    }

    const result = fn.apply(this, args) as ReturnType<T>;
    
    // Evict oldest if at capacity
    if (cache.size >= maxSize) {
      const firstKey = cache.keys().next().value;
      if (firstKey !== undefined) {
        cache.delete(firstKey);
      }
    }
    
    cache.set(key, result);
    return result;
  } as T;
}

/**
 * Run a function after the current call stack clears
 * Uses microtask queue for immediate execution after current task
 * @param fn - Function to run
 */
export function defer(fn: () => void): void {
  if (typeof queueMicrotask !== 'undefined') {
    queueMicrotask(fn);
  } else {
    Promise.resolve().then(fn);
  }
}

/**
 * Batch multiple calls into a single execution
 * Useful for batching DOM updates or state changes
 * @param fn - Function to batch
 * @returns Batched function
 */
export function batch<T>(fn: (items: T[]) => void): (item: T) => void {
  let pending: T[] = [];
  let scheduled = false;

  return (item: T) => {
    pending.push(item);
    
    if (!scheduled) {
      scheduled = true;
      defer(() => {
        const items = pending;
        pending = [];
        scheduled = false;
        fn(items);
      });
    }
  };
}

/**
 * Create a lazy-initialized value
 * @param init - Initialization function
 * @returns Getter function that lazily initializes
 */
export function lazy<T>(init: () => T): () => T {
  let value: T;
  let initialized = false;

  return () => {
    if (!initialized) {
      value = init();
      initialized = true;
    }
    return value;
  };
}

/**
 * Chunk an array for processing in batches
 * @param array - Array to chunk
 * @param size - Chunk size
 * @returns Array of chunks
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * Process array items with yield to avoid blocking
 * @param items - Items to process
 * @param processor - Function to process each item
 * @param chunkSize - Number of items per chunk
 */
export async function processInChunks<T, R>(
  items: T[],
  processor: (item: T, index: number) => R,
  chunkSize: number = 50
): Promise<R[]> {
  const results: R[] = [];
  const chunks = chunk(items, chunkSize);

  for (const currentChunk of chunks) {
    // Process chunk
    for (let i = 0; i < currentChunk.length; i++) {
      results.push(processor(currentChunk[i], results.length));
    }
    
    // Yield to allow other tasks
    await new Promise(resolve => setTimeout(resolve, 0));
  }

  return results;
}
