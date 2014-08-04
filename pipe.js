
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  else if (num == 2 || num == 3) {
    return true;
  }
  
  for (var i = 2, half = num / 2; i <= half; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
