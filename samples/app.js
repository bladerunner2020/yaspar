/* eslint-disable no-console */
const { toMilliseconds, toBoolean } = require('..');

console.log(toMilliseconds('3000')); // => 3000
console.log(toMilliseconds('300 ms')); // => 300
console.log(toMilliseconds('30 sec')); // => 30000
console.log(toMilliseconds('10 s')); // => 10000
console.log(toMilliseconds('5 min')); // => 300000
console.log(toMilliseconds('1 hour')); // => 3600000
console.log(toMilliseconds('1:20')); // => 80000
console.log(toMilliseconds('1:00:20')); // => 3620000

console.log(toBoolean('True')); // => true
console.log(toBoolean('no')); // => false
console.log(toBoolean('yes')); // => true
console.log(toBoolean('off')); // => false
console.log(toBoolean('on')); // => true
console.log(toBoolean('1')); // => true
