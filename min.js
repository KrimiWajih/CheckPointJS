function min(array) {
  var min = array[0];
  for (i = 1; i < array.length; i++) {
    if (numbers[i] < min) {
      min = array[i];
    }
  }
  return min;
}
