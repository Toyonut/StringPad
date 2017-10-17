'use strict'

function PadLeft (checkString, requiredLength, padChar = ' ') {
  if (typeof requiredLength !== 'number') {
    throw new TypeError('Length should be a number')
  }

  if (checkString.length >= requiredLength) {
    return checkString
  }

  let paddedString = `${padChar}${checkString}`

  if (paddedString.length > requiredLength) {
    let trimAmount = paddedString.length - requiredLength // gives positive number to trim from start of string.
    return paddedString.slice(trimAmount)
  }

  return PadLeft(paddedString, requiredLength, padChar)
}

function PadRight (checkString, requiredLength, padChar = ' ') {
  if (typeof requiredLength !== 'number') {
    throw new TypeError('Length should be a number')
  }

  if (checkString.length >= requiredLength) {
    return checkString
  }

  let paddedString = `${checkString}${padChar}`

  if (paddedString.length > requiredLength) {
    let trimAmount = (requiredLength - paddedString.length) // gives negative number to trim from end of string
    return paddedString.slice(0, trimAmount)
  }

  return PadRight(paddedString, requiredLength, padChar)
}

module.exports = { PadLeft, PadRight }
