function wordCount(text) {
  const words = text.split(" ");
  const wordCountMap = new Map();

  // Count occurrences of each word
  for (let word of words) {
      word = word.trim(); // Remove any leading or trailing spaces
      if (word.length > 0) {
          const count = wordCountMap.get(word) || 0;
          wordCountMap.set(word, count + 1);
      }
  }

  return wordCountMap;
}

// Example usage:
const text = "Hello world hello there world";
const wordCounts = wordCount(text);

// Output the word counts
wordCounts.forEach((count, word) => {
  console.log(`${word}: ${count}`);
});