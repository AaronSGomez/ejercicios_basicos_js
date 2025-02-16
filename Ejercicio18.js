const placesToTravel = [
  {id: 5, name: 'Japan'}, 
  {id: 11, name: 'Venecia'}, 
  {id: 23, name: 'Murcia'}, 
  {id: 40, name: 'Santander'}, 
  {id: 44, name: 'Filipinas'}, 
  {id: 59, name: 'Madagascar'}];

  let x = 40;
  for (const element of placesToTravel) {
    if (element.id == x) {
      console.log("Se ha encontrado el lugar a Eliminar: ", element.name);
      placesToTravel.splice(placesToTravel.indexOf(element), 1);
    }
  }



console.log(placesToTravel);