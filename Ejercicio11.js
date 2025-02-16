
const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
const prueba = [6, 2, 'no', 4, 'si', 2, 'cabe', 2, 'duda', 2];

function averageWord(list) {
  let suma = 0;
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'string') {
      suma += list[i].length;
    }else{
      suma += list[i];
    }
  }
  //console.log("el total de la suma es ", suma);
  //console.log("la longitud del array es ",list.length);
  return suma/list.length;
}

console.log("el promedio mixto de Strings longitud y suma de numeros es = ", averageWord(mixedElements)); //resultado 5.88
console.log("el promedio mixto de Strings longitud y suma de numeros es = ", averageWord(prueba)); //resultado 3