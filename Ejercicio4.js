//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
console.log('Imprimo array ');
console.log(aldeanos);
//4.1 - Saca a "Tendo" por consola atacando su posición.
console.log('Imprimo a Tendo por pantalla atacando a su posicion aldeanos[3] ='+aldeanos[3]);
//4.2 - Coloca en el último lugar de este array a "Cervasio".
aldeanos.push("Cervasio");
console.log('Añado a Cervasio al final del array');
console.log(aldeanos);
//4.3 - Cambia el primer elemento de este array por "Bambina".
console .log('Cambio el primer elemento del array por Bambina');
aldeanos[0]="Bambina";
console.log(aldeanos);
//4.4 - Dale la vuelta a este array.
console.log('Doy la vuelta al array');
aldeanos.reverse();
console.log(aldeanos);
//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
console.log('Cambio a Narciso por Canela');
aldeanos[aldeanos.indexOf("Narciso")]="Canela";
console.log(aldeanos);
//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
console.log('ultima posicion del array '+aldeanos[aldeanos.length-1]);