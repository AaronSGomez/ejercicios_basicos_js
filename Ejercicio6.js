
//1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
console.log("bucle de numeros del 0 al 9");
for (let i=0; i<10; i++) {
    console.log("el valor i es: " + i);
}

/* 
1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo 
cuando el resto del numero dividido entre 2 sea 0.
*/
console.log("bucle de numeros PARES del 0 al 9");
for (let i=0; i<10; i++) {
  if (i%2 ==0 && i!=0) {
    console.log("el valor i es: " + i);
  }
}

/* 
1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a '¡Dormido!'. */ 
console.log("Contando ovejas PARA DOMIR");
for (let i=0; i<10; i++) {
  if (i<9) {
    console.log("Intentando dormir 🐑");
  } else {
    console.log("¡Dormido!");
  }
}