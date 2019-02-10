function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN && toN === 0) {
    return 0;
  } else {
    return fromN + sum(--toN)
  }
}

module.exports = sum;
