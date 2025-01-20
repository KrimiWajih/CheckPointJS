var chaine = "the quick brown for jumped over the lazy dog".split("");
function reverseChaine(chaine) {
  var tab = [];
  for (i = chaine.length - 1; i >= 0; i--) {
    tab.push(chaine[i]);
  }
  return tab;
}
console.log(reverseChaine(chaine).join(" "));
