function PadLeft (checkString, requiredLength, padChar = ' ') {
  checkString = checkString.toString()
  padChar = padChar.toString()
  if (checkString.length >= requiredLength) {
    return checkString
  } else {
    let paddedString = `${padChar}${checkString}`
    return PadLeft(paddedString, requiredLength, padChar)
  }
}

function PadRight (checkString, requiredLength, padChar = ' ') {
  checkString = checkString.toString()
  padChar = padChar.toString()
  if (checkString.length >= requiredLength) {
    return checkString
  } else {
    let paddedString = `${checkString}${padChar}`
    return PadRight(paddedString, requiredLength, padChar)
  }
}

module.exports = { PadLeft, PadRight }
