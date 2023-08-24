const calculateNumber = (type, a, b) => {  
  if (type === 'SUM') {
    const sum = Math.round(a) + Math.round(b);
    return sum;
  } else if (type === 'SUBTRACT') {
    const diff = Math.round(a) - Math.round(b);
    return diff;
  } else if (type === 'DIVIDE') {
    const rounda = Math.round(a);
    const roundb = Math.round(b);
    if (roundb === 0) return ('Error');
    const div = rounda / roundb;
    return div;
  }
}

module.exports = calculateNumber;
