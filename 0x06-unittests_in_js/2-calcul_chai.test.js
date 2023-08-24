const assert = require('chai').expect;
const { expect } = require('chai');
const calculateNumber = require("./1-calcul");

describe("Test CalculateNumber Function", function() {
  it("checks sum type", function() {
    const test1 = calculateNumber('SUM', 2.3, 3.5);
    expect(test1).to.Equal(6);
  });
  it("checks Substraction type", function() {
    const test2 = calculateNumber('SUBTRACT', 2.5, -5.5);
    expect(test2).to.Equal(8);
  });
  it("checks division type", function() {
    const test3 = calculateNumber('DIVIDE', 2.4, 5);
    expect(test3).to.Equal(0.4);
  });
  it('checks error part DIVIDE', function() {
    const test4 = calculateNumber('DIVIDE', 3.3, 0);
    expect(test4).to.Equal('Error');
  })
})