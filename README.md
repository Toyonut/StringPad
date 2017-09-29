# StringPad
JS recursive methods for padding strings

Takes up to 3 parameters.
1. checkString - String to be checked.
2. requiredLength - how long you want the string to be.
3. padChar - Which character to pad with. Defaults to a single space.

```javascript
const { PadLeft } = require('StringPad')
const { PadRight } = require('StringPad')
const StringPad = require('StringPad')

console.log(StringPad.PadLeft('Foo', 5, 1)) -> '11Foo'
console.log(StringPad.PadRight('Foo', 5, 1)) -> 'Foo11'
console.log(PadLeft('bar', 5)) -> '  bar'
console.log(PadRight('bar', 5)) -> 'bar  '

```

**Note** The function has been changed so that if the padChar parameter is multiple characters, it will be trimmed if it goes over the required length.
If the requiredLength is less that the length of the string, it will be returned as is. There is one exception to this shown by the failing test, if the string leading character as the pad character in LeftPad it will be trimmed to the requiredLength. The same goes for the trailing characters in RightPad.
Not sure how to solve this one, going to sleep.


[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
