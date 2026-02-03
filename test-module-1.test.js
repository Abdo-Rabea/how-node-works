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
});
