function findMaxAndMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}

// Example usage:
const numbers = [5, 2, 7, 1, 9];
const result = findMaxAndMin(numbers);
console.log(result);