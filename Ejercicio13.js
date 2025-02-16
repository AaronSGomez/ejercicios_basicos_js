const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nombre) {
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === nombre) {
      return [true, i]; // devuelvo un array con dos valores, el primero es un booleano que indica si se encontró el nombre, el segundo es la posicion del nombre en el array
    }
  }
  return [false, null]; // si no se encontró el nombre, devuelvo un array con un booleano en false y null, ya que no se encuentra el nombre
}


console.log(nameFinder(names, 'Aaron'));  // Devuelve [false, null]
console.log(nameFinder(names, 'Natasha')); // Devuelve [true, 3]
console.log(nameFinder(names, 'Jessica')); // Devuelve [true, 9]