function swapValues(x, y) {
  [x, y] = [y, x]; // Destructuring assignment to swap values
  return [x, y];
}

// Example usage:
let x = 5, y = 10;
[x, y] = swapValues(x, y);
console.log("x:", x);
console.log("y:", y);