# StringPad
JS recursive methods for padding strings

Takes up to 3 parameters.
1. checkString - String to be checked
2. requiredLength - how long you want the string to be
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


Made using [Standard JS](https://standardjs.com/).
