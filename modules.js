// print the wrapper of module to see how it works
console.log(require('module').wrapper);

// consuming the test-module-1.js module
const Calculator = require('./test-module-1');
const myCalc = new Calculator();
console.log('Addition:', myCalc.add(10, 5)); // 15
console.log('Subtraction:', myCalc.subtract(10, 5)); // 5
console.log('Multiplication:', myCalc.multiply(10, 5)); // 50
console.log('Division:', myCalc.divide(10, 5)); // 2

// modules.exports.add
const calc = require('./test-module-2');
console.log(calc.add(10, 5)); // 15
console.log(calc.substract(10, 5)); // 15
console.log(calc.multiply(10, 5)); // 15

// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();

// to see the cached module
console.log(require.cache);
