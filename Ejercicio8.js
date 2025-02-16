
const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.', 'Black Widow', 'Hawkeye', 'Vision', 'Scarlet Witch'];
function findLongestWord(stringList) {
  // Completar código
  let nombre = '';
  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > nombre.length) {
      nombre = stringList[i];
      //console.log(nombre);
    }
  }
  return nombre;
}
console.log(findLongestWord(avengers)); // Scarlet Witch