'use strict'

function PadLeft (checkString, requiredLength, padChar = ' ') {
  checkString = checkString.toString()
  padChar = padChar.toString()

  if (checkString.length === requiredLength) {
    return checkString
  } else if (checkString.length > requiredLength) {
    let trimAmount = checkString.length - requiredLength
    return checkString.slice(trimAmount)
  } else {
    let paddedString = `${padChar}${checkString}`
    return PadLeft(paddedString, requiredLength, padChar)
  }
}

function PadRight (checkString, requiredLength, padChar = ' ') {
  checkString = checkString.toString()
  padChar = padChar.toString()

  if (checkString.length === requiredLength) {
    return checkString
  } else if (checkString.length > requiredLength) {
    let trimAmount = (requiredLength - checkString.length)
    return checkString.slice(0, trimAmount)
  } else {
    let paddedString = `${checkString}${padChar}`
    return PadRight(paddedString, requiredLength, padChar)
  }
}

module.exports = { PadLeft, PadRight }
