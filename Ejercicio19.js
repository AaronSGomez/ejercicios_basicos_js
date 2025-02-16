/* Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato 
Recuerda usar la función .includes() para comprobar la palabra. */

const toys = [
  {id: 5, name: 'Transformers'}, 
  {id: 11, name: 'LEGO'}, 
  {id: 23, name: 'Hot Wheels'}, 
  {id: 40, name: 'Rascador de gato'},
  {id: 40, name: 'FurReal Friends gato interactivo'},
  {id: 60, name: 'Nerf Blaster'},
  {id: 71, name: 'Sylvanian Families - Familia gato'}
];

//también podéis crear uno nuevo con solo los que NO incluyan esa palabra.
//Funciona mejor que el otro
const juguetes=[];
let i=0;
for (const element of toys) {
  if (!element.name.includes('gato')) {
    juguetes[i]=element;
    i++;
  }
}
console.log(juguetes);

//si hay dos posiciones seguidas que contienen la palabra gato, solo elimina la primera

/* for (const element of toys) {
  if (element.name.includes('gato')) {
    console.log(element);
    toys.splice(toys.indexOf(element), 1);
  }
} 
console.log(toys);   */
 
//SOLUCIÓN
for (let i = 0; i < toys.length; i++) {
  if (toys[i].name.includes('gato')) {
    toys.splice(i, 1);
    i--; // Reducimos el índice para verificar correctamente el siguiente elemento
  }
  //console.log(i);
}
console.log(toys); 

