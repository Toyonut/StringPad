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

**Expectations**
1. Should return a string
2. Should throw TypeError if requiredLength is not a number
3. Should return a string of the correct length
4. Should be padded with a space if no char parameter is specified
5. Should be padded with the specified char if char parameter is specified
6. Should be trimmed to the correct length if the string goes over the required length
7. Should still be a string even if the pad char is a number
8. Should return the original length string if it is longer than the required length
9. Should be a right or left padded string

**Note**
The function has been changed so that if the padChar parameter is multiple characters, it will be trimmed if it goes over the required length.
If the requiredLength is less that the length of the string, it will be returned as is.
The regular imperative function is now the index.js as it satisfies all tests and works well.

**The recursive one...**
The recursive one was fixed by adding a check to the start of the function which returned the unmodified string immediately if the requiredLength was less than the length of our input. This satisfied the condition to return the original string if it is longer than the required length.
After the pad, but before the recursive function invocation, I added the check to see if the padded string was too long. This allowed me to trim it and return it so the length doesn't go over, but if it is still short, it goes through the function again.
It does mean I check the length twice, but it works.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
