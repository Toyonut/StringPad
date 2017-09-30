'use strict'

function PadLeft (checkString, requiredLength, padChar = ' ') {
  checkString = checkString.toString()
  padChar = padChar.toString()

  if (typeof requiredLength !== 'number') {
    throw new TypeError('Length should be a number')
  }

  if (checkString.length === requiredLength) {
    return checkString
  }

  if (checkString.length > requiredLength) {
    if (checkString.substring(0, padChar.length) !== padChar) {
      return checkString
    } else {
      let trimAmount = checkString.length - requiredLength
      return checkString.slice(trimAmount)
    }
  } else {
    let paddedString = `${padChar}${checkString}`
    return PadLeft(paddedString, requiredLength, padChar)
  }
}

function PadRight (checkString, requiredLength, padChar = ' ') {
  checkString = checkString.toString()
  padChar = padChar.toString()

  if (typeof requiredLength !== 'number') {
    throw new TypeError('Length should be a number')
  }

  if (checkString.length === requiredLength) {
    return checkString
  }

  if (checkString.length > requiredLength) {
    if (checkString.slice(padChar.length * -1) !== padChar) {
      return checkString
    } else {
      let trimAmount = (requiredLength - checkString.length)
      return checkString.slice(0, trimAmount)
    }
  } else {
    let paddedString = `${checkString}${padChar}`
    return PadRight(paddedString, requiredLength, padChar)
  }
}

module.exports = { PadLeft, PadRight }
