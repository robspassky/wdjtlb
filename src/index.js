const Adder = require('./Adder')

/**
 * Add two to a number
 * @param {number} a - The number to add two to
 */
function addTwo (a) {
  const adder = new Adder(2)
  return adder.add(a)
}

module.exports = {
  addTwo
}
