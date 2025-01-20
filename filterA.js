var numbers = [6, 5, 9, 7, 2, 3, 1, 20];
function filterArray(arr, condition) {
  return arr.filter(condition);
}
//Example
let oddNumbers = filterArray(numbers, function (num) {
  return num % 2 !== 0;
});
console.log(oddNumbers);
