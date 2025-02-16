const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

// Creo una funcion que recibe un array y una cadena y busca dentro del array si hay algun elemento que contenga la cadena
function filterProducts(list, product) {
list.forEach((list) => {
  if (list.includes(product)) { //usamos .includes de js para buscar si la cadena esta dentro del elemento
    console.log(list);
  }
});
}

//filterProducts(products, 'Camiseta'); 
filterProducts(products, 'Gorra');