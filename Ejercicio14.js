const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  // Completar
  let count = {};
  list.forEach((word) => {  // Recorremos la lista con forEach buscando cada palabra
    if (count[word]) {
      count[word] += 1;
    } else {
      count[word] = 1;
    }
  });
  return count;
}
console.log(repeatCounter(words));

const palabras = [
  "casa", "perro", "gato", "casa", "coche", "perro", "casa", "libro", "gato", "casa",
  "arbol", "perro", "libro", "casa", "coche", "gato", "libro", "perro", "casa", "libro",
  "gato", "coche", "arbol", "perro", "casa", "libro", "gato", "casa", "perro", "libro",
  "coche", "arbol", "gato", "casa", "libro", "perro", "casa", "libro", "perro", "gato"]; 

console.log(repeatCounter(palabras));
