# Yaspar 

**Yaspar** stands for *Yet Another String Parser*. It's a tine utility with no other dependencies that converts string to numeric values.


- **toMilliseconds(param)** converts string to milliseconds. **param** must be number or string. Converts **param** to milliseconds. The following time units are supported: *ms, s/sec/second/seconds, m/min/minute/minutes, h/hour/hours*. It also supports time format as *m:ss*, *h:mm:ss*.
- **toBoolean(param)** converts string to milliseconds. **param** must be boolean, number or string. Converts **para** to boolean. Supports the following strings *true/false, yes/no, on/off* (case insensitive). 

## Installation

```bash
npm install yaspar
```
or
  
```bash
yarn add yaspar
```

## Usage

Examples:

Converting strings to milliseconds:

```js
const { toMilliseconds } = require('yaspar');

console.log(toMilliseconds('3000')); // => 3000
console.log(toMilliseconds('300 ms')); // => 300
console.log(toMilliseconds('30 sec')); // => 30000
console.log(toMilliseconds('10 s')); // => 10000
console.log(toMilliseconds('5 min')); // => 300000
console.log(toMilliseconds('1 hour')); // => 3600000
console.log(toMilliseconds('1:20')); // => 80000
console.log(toMilliseconds('1:00:20')); // => 3620000
```

Converting strings to boolean:

```js
const { toBoolean } = require('yaspar');

console.log(toBoolean('True')); // => true
console.log(toBoolean('no')); // => false
console.log(toBoolean('yes')); // => true
console.log(toBoolean('off')); // => false
console.log(toBoolean('on')); // => true
console.log(toBoolean('1')); // => true
```

## License

MIT
