const { PadLeft } = require('./index')
const { PadRight } = require('./index')
const { expect } = require('chai')

describe('PadLeft', () => {
  it('should return a string', () => {
    expect(PadLeft('Hello', 10)).to.be.a.string
  })

  it('Should return a string of the correct length', () => {
    expect((PadLeft('hello', 20)).length).to.equal(20)
    expect((PadLeft('hello', 40)).length).to.equal(40)
    expect((PadLeft('hello', 50)).length).to.equal(50)
  })

  it('Should be padded with a space if no char parameter is specified', () => {
    expect((PadLeft('hello', 10)).substring(0, 5)).to.equal('     ')
    expect((PadLeft('hello', 8)).substring(0, 3)).to.equal('   ')
    expect((PadLeft('hello', 12)).substring(0, 7)).to.equal('       ')
  })

  it('Should be padded with the specified char if char parameter is specified', () => {
    expect((PadLeft('hello', 10, 'k')).substring(0, 5)).to.equal('kkkkk')
    expect((PadLeft('hello', 9, 'v')).substring(0, 4)).to.equal('vvvv')
    expect((PadLeft('hello', 11, 'a')).substring(0, 6)).to.equal('aaaaaa')
    expect((PadLeft('hello', 6, '7')).substring(0, 1)).to.equal('7')
    expect((PadLeft('hello', 10, 3)).substring(0, 5)).to.equal('33333')
  })

  it('Should still be a string even if the pad char is a number', () => {
    expect(PadLeft('Hello', 10, 1)).to.be.a.string
  })

  it('Should be a left padded string', () => {
    expect((PadLeft('hello', 10))).to.equal('     hello')
    expect((PadLeft('hello', 8))).to.equal('   hello')
    expect((PadLeft('hello', 12))).to.equal('       hello')
    expect((PadLeft('hello', 10, 9))).to.equal('99999hello')
    expect((PadLeft('hello', 8, 'z'))).to.equal('zzzhello')
    expect((PadLeft('hello', 12, 'w'))).to.equal('wwwwwwwhello')
  })
})

describe('PadRight', () => {
  it('should return a string', () => {
    expect(PadRight('Hello', 10)).to.be.a.string
  })

  it('Should return a string of the correct length', () => {
    expect((PadRight('hello', 20)).length).to.equal(20)
    expect((PadRight('hello', 40)).length).to.equal(40)
    expect((PadRight('hello', 50)).length).to.equal(50)
  })

  it('Should be padded with a space if no char parameter is specified', () => {
    expect((PadRight('hello', 10)).slice(-5)).to.equal('     ')
    expect((PadRight('hello', 8)).slice(-3)).to.equal('   ')
    expect((PadRight('hello', 12)).slice(-7)).to.equal('       ')
  })

  it('Should be padded with the specified char if char parameter is specified', () => {
    expect((PadRight('hello', 10, 'k')).slice(-5)).to.equal('kkkkk')
    expect((PadRight('hello', 9, 'v')).slice(-4)).to.equal('vvvv')
    expect((PadRight('hello', 11, 'a')).slice(-6)).to.equal('aaaaaa')
    expect((PadRight('hello', 6, '7')).slice(-1)).to.equal('7')
    expect((PadRight('hello', 10, 3)).slice(-5)).to.equal('33333')
  })

  it('Should still be a string even if the pad char is a number', () => {
    expect(PadRight('Hello', 10, 1)).to.be.a.string
  })

  it('Should be a right padded string', () => {
    expect((PadRight('hello', 10))).to.equal('hello     ')
    expect((PadRight('hello', 8))).to.equal('hello   ')
    expect((PadRight('hello', 12))).to.equal('hello       ')
    expect((PadRight('hello', 10, 9))).to.equal('hello99999')
    expect((PadRight('hello', 8, 'z'))).to.equal('hellozzz')
    expect((PadRight('hello', 12, 'w'))).to.equal('hellowwwwwww')
  })
})