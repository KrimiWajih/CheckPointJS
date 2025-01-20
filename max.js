function max(array) {
  var x = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > x) {
      x = array[i];
    }
  }
  return x;
}
