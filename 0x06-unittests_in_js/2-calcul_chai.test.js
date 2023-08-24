const expect = require('chai').expect;
const calculateNumber = require("./2-calcul_chai");

describe("Test CalculateNumber Function", function() {
  it("checks sum type", function() {
    const test1 = calculateNumber('SUM', 2.3, 3.5);
    expect(test1).to.equal(6);
  });
  it("checks Substraction type", function() {
    const test2 = calculateNumber('SUBTRACT', 2.5, -5.5);
    expect(test2).to.equal(8);
  });
  it("checks division type", function() {
    const test3 = calculateNumber('DIVIDE', 2.4, 5);
    expect(test3).to.equal(0.4);
  });
  it('checks error part DIVIDE', function() {
    const test4 = calculateNumber('DIVIDE', 3.3, 0);
    expect(test4).to.equal('Error');
  })
})