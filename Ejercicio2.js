//parte 1
const jedi = {nombre: "Luke Skywalker", edad: 19};
jedi.edad = 25;
console.log(jedi);


//parte 2 -Presentación al estilo Leia Organa
let nombre = 'Leia'; 
let apellido = 'Organa';
let edad= 20;
console.log('Hola, soy ' + nombre + ' ' + apellido + ' ,tengo ' + edad + ' años y soy una princesa de Alderaan');

//parte 3- Calculando el coste total de sables de luz
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
console.log('El precio total de dos sables de luz: "' +sable1.nombre + '" y "' + sable2.nombre + '" es ' + (sable1.precio + sable2.precio));

//parte 4- Actualizando el precio final de las naves:
let precioBaseGlobal = 10000;
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

precioBaseGlobal= 25000;
nave1.precioFinal= precioBaseGlobal+nave1.precioBase;
nave2.precioFinal= precioBaseGlobal+nave2.precioBase;
console.log('El precio final de la nave "' + nave1.nombre + '" es ' + nave1.precioFinal);
console.log('El precio final de la nave "' + nave2.nombre + '" es ' + nave2.precioFinal);