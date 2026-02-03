class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}
// export it
module.exports = Calculator;

// add test code here
// Example usage:
const calc = new Calculator();
console.log('Add: ', calc.add(5, 3)); // 8
console.log('Subtract: ', calc.subtract(5, 3)); // 2
console.log('Multiply: ', calc.multiply(5, 3)); // 15
console.log('Divide: ', calc.divide(6, 3)); // 2

// i want to use library 'jest' to test this module
// To run the tests, make sure you have Jest installed in your project:
// npm install --save-dev jest
// Then, you can create a separate test file named 'test-module-1.test.js' with the following content:
// create this file: test-module-1.test.js
/*
const Calculator = require('./test-module-1');
describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test('adds two numbers', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('subtracts two numbers', () => {
    expect(calc.subtract(5, 3)).toBe(2);
  });

  test('multiplies two numbers', () => {
    expect(calc.multiply(4, 3)).toBe(12);
  });

  test('divides two numbers', () => {
    expect(calc.divide(6, 2)).toBe(3);
  });

  test('throws error when dividing by zero', () => {
    expect(() => calc.divide(5, 0)).toThrow('Cannot divide by zero');
  });
});
*/
