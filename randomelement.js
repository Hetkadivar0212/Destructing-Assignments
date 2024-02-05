function extractElements(arr) {
  const [first, second, ...rest] = arr; // Destructuring assignment
  const last = rest.pop(); // Extracting the last element from the rest

  return [first, second, last];
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const extracted = extractElements(array);
console.log(extracted);