const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe("Test calculateNumber Function", function() {
  it("Tests sum of whole_numbers", function() {
    const test1 = calculateNumber(1, 2);
    assert.strictEqual(test1, 3);
  });
  it("Test sum of one float_number", function() {
    const test2 = calculateNumber(3, 2.4);
    assert.strictEqual(test2, 5);
  });
  it("Test sum of both float_numbers", function() {
    const test3 = calculateNumber(1.7, 3.5);
    assert.strictEqual(test3, 6);
  });
  it("Tests sum of both float_numbers", function() {
    const test4 = calculateNumber(2.1, 2.3);
    assert.strictEqual(test4, 4);
  });
  it("Tests sum when one number_negative", function() {
    const test5 = calculateNumber(2, -3);
    assert.strictEqual(test5, -1);
  });
  it("Test sum with both negative_numbers", function() {
    const test6 = calculateNumber(-2, -4);
    assert.strictEqual(test6, -6);
  });
  it("Tests sum when one negative_float", function() {
    const test7 = calculateNumber(-1.4, 4);
    assert.strictEqual(test7, 3);
  });
  it("Tests sum both negative float_numbers", function() {
    const test8 = calculateNumber(-2.5, -4.5);
    assert.strictEqual(test8, -6);
  });
});
