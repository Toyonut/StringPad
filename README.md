# StringPad
JS recursive methods for padding strings

Takes up to 3 parameters.
1. checkString - String to be checked.
2. requiredLength - how long you want the string to be.
3. padChar - Which character to pad with. Defaults to a single space.

if the required length is less than the original length of the string, the original string is returned.

```javascript
const { PadLeft } = require('StringPad')
const { PadRight } = require('StringPad')
const StringPad = require('StringPad')

console.log(StringPad.PadLeft('Foo', 5, 1)) -> '11Foo'
console.log(StringPad.PadRight('Foo', 5, 1)) -> 'Foo11'
console.log(PadLeft('bar', 5)) -> '  bar'
console.log(PadRight('bar', 5)) -> 'bar  '

```

The function has been changed so that if the padChar parameter is multiple characters, it will be trimmed if it goes over the required length.
A side effect of this is that if the requiredLength is less than the checkString length, the string will be trimmed to the required length.
Not sure if this is a good or bad thing.


[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
