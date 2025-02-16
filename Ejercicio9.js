const numbers = [1, 2, 3, 5, 45, 37, 58];
const numbers2 = [12, 32, 56, 23, 124, 8, 2];

function sumNumbers(numberList) {
  // Completar código
  let suma = 0;
  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i];
  }
  return suma;
}

console.log(sumNumbers(numbers));  //resultado 151
console.log(sumNumbers(numbers2)); //resultado 257