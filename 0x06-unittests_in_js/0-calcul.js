const calculateNumber = (a, b) => {
  // check if either a or b is not a number (NaN)
  if (isNaN(a) || isNaN(b) == true) {
    // if either a or b is NaN, round the values to nearest integer & sum them
    const sum = Math.round(Number.isInteger(a)) + Math.round(Number.isInteger(b));
    return sum;
  } else {
    //if both a $ b are numbers, round e values 2 e nearest integer & sum them
    const sum = Math.round(a) + Math.round(b);
    return sum;
  }
}

module.exports = calculateNumber;
