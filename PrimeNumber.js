function isPrime(num) {
  let divisorCount = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisorCount++;
    }
    if (divisorCount > 2) {
      return false;
    }
  }
  return divisorCount === 2;
}
