function extractNameAndStreet(person) {
  const { name, address: { street } } = person;
  return { name, street };
}

// Example usage:
const person = {
  name: 'John Doe',
  age: 30,
  address: {
      street: '123 Main St',
      city: 'Anytown'
  }
};

const result = extractNameAndStreet(person);
console.log(result);