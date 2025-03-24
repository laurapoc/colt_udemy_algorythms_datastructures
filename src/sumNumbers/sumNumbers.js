import { calculateFunctionSpeed } from "../utils.js";

export const sumOfAllNumbersFromOneUpToGivenNumber = (n) => {
  const numbersArray = new Array(n).fill(0).map((_, index) => index + 1);

  let sum = 0;

  numbersArray.forEach((number) => {
    sum += number;
  });

  return sum;
};

const addUpTo = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(addUpTo(4));
console.log(addUpTo(10));

calculateFunctionSpeed(addUpTo, 1000000000);
// calculateFunctionSpeed(sumOfAllNumbersFromOneUpToGivenNumber, 1000000000); // returns FATAL ERROR: invalid table size Allocation failed - JavaScript heap out of memory
