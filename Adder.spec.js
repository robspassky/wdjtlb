const Adder = require('./Adder')

const ADDEND = 5
const TERM = 3

describe('Adder class', () => {
  test('can create with an addend', () => {
    const sut = new Adder(ADDEND)
    expect(sut).toBeDefined()
  })

  test('can add', () => {
    const sut = new Adder(ADDEND)
    expect(sut.add(TERM)).toBe(ADDEND + TERM)
  })
})
