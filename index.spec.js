/* global describe, test, expect */
const wdjtlb = require('./index')

describe('exported api of wdjtlb', () => {
  test('addTwo() adds 2 to argument', () => {
    expect(wdjtlb.addTwo(3)).toBe(5)
  })
})
