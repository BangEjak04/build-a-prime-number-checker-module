function isPrime(value) {
  if (typeof value !== "number" || !Number.isInteger(value) || value <= 1) {
    return false;
  }
  if (value <= 3) {
    return true;
  }
  if (value % 2 === 0 || value % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= value; i += 6) {
    if (value % i === 0 || value % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isPrime,
};
