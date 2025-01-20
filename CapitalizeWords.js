function CapitalizeWords(string) {
  if (string.length === 0) return string;
  let result = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === " ") {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }
  return result;
}
