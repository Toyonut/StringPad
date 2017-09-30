# StringPad
JS methods for padding strings

Takes up to 3 parameters.
1. checkString - String to be checked.
2. requiredLength - how long you want the string to be.
3. padChar - Which character to pad with. Defaults to a single space.

```javascript
const { PadLeft, PadRight } = require('StringPad')
const StringPad = require('StringPad')

console.log(StringPad.PadLeft('Foo', 5, 1)) -> '11Foo'
console.log(StringPad.PadRight('Foo', 5, 1)) -> 'Foo11'
console.log(PadLeft('bar', 5)) -> '  bar'
console.log(PadRight('bar', 5)) -> 'bar  '

```

**Note**
The function has been changed so that if the padChar parameter is multiple characters, it will be trimmed if it goes over the required length.
If the requiredLength is less that the length of the string, it will be returned as is.
The regular imperative function is now the index.js as it satisfies all tests and works well.

**The recursive one...**
the Recursive function had one exception that would fail the 'Should return the original length string if it is longer than the required length' test. If the string leading character as the pad character in LeftPad it will be trimmed to the requiredLength. The same goes for the trailing characters in RightPad.
This doesn't seem solvable while using a recursive function as the whole function is called each time.
There may be a way around it I am not seeing yet.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
