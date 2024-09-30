function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

const range = (a, b) => { 
    const primes =[];
  for (let i = a; i < b; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

console.log(range(1, 10));
