export const calculateFunctionSpeed = (fn, ...args) => {
  let t1 = performance.now();
  fn(...args);
  let t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
};
