/** Adds a constant term */
class Adder {
  /**
   * Create an Adder
   * @param {number} x - The addend
   */
  constructor (x) {
    this.addend = x
  }

  /**
   * Perform addition
   * @param {number} term - The number to add to addend
   */
  add (term) {
    return this.addend + term
  }
}

module.exports = Adder
