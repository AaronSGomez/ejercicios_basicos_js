const numbers = [12, 21, 38, 5, 45, 37, 6];
const numbers2 = [4, 5, 8, 8, 9, 7, 10, 5];

function average(numberList) {
  // Completar
  let suma = 0;
  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i];
  }
  return suma / numberList.length;
}

console.log(average(numbers)); //resultado 23 con decimales
console.log(average(numbers2)); //resultado 7