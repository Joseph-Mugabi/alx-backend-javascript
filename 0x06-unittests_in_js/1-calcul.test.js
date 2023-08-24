const assert = require('assert');
const calculateNumber = require("./1-calcul");

describe("Test CalculateNumber Function", function() {
  it("checks sum type", function() {
    const test1 = calculateNumber('SUM', 2.3, 3.5);
    assert.strictEqual(test1, 6);
  });
  it("checks Substraction type", function() {
    const test2 = calculateNumber('SUBTRACT', 2.5, -5.5);
    assert.strictEqual(test2, 8);
  });
  it("checks division type", function() {
    const test3 = calculateNumber('DIVIDE', 2.4, 5);
    assert.strictEqual(test3, 0.4);
  });
  it('checks error part DIVIDE', function() {
    const test4 = calculateNumber('DIVIDE', 3.3, 0);
    assert.strictEqual(test4, 'Error');
  })
})