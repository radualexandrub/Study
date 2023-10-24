function range(start: number, end: number, step = 1) {
  return {
    // Symbol.iterator allow us to use this in a ES6 "for ... of" loop
    [Symbol.iterator]() {
      return this;
    },
    /* next() returns the current value in the loop */
    next() {
      if (start < end) {
        start += step;
        return { value: start, done: false };
      }
      return { value: end, done: true };
    },
  };
}

for (const n of range(0, 20, 5)) {
  console.log(n);
}
