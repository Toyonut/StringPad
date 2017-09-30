'use strict'

function PadLeft (checkString, requiredLength, padChar = ' ') {
  checkString = checkString.toString()
  padChar = padChar.toString()

  if (typeof requiredLength !== 'number') {
    throw new TypeError('Length should be a number')
  }

  if (checkString.length >= requiredLength) {
    return checkString
  }

  do {
    checkString = `${padChar}${checkString}`
  } while (checkString.length < requiredLength)

  if (checkString.length > requiredLength) {
    let trimAmount = checkString.length - requiredLength
    return checkString.slice(trimAmount)
  } else {
    return checkString
  }
}

function PadRight (checkString, requiredLength, padChar = ' ') {
  checkString = checkString.toString()
  padChar = padChar.toString()

  if (typeof requiredLength !== 'number') {
    throw new TypeError('Length should be a number')
  }

  if (checkString.length >= requiredLength) {
    return checkString
  }

  do {
    checkString = `${checkString}${padChar}`
  } while (checkString.length < requiredLength)

  if (checkString.length > requiredLength) {
    let trimAmount = (requiredLength - checkString.length)
    return checkString.slice(0, trimAmount)
  } else {
    return checkString
  }
}

module.exports = { PadLeft, PadRight }
