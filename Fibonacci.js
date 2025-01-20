function fib1(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  var a = 0;
  var b = 1;
  var fib = 0;
  var y = 2;
  while (y <= n) {
    fib = a + b;
    a = b;
    b = fib;
    y++;
  }
  return fib;
}
