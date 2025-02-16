/* Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante */
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
  { name: "Filete", isVegan: false},
  { name: "Barbacoa", isVegan: false},
  { name: "Bacon", isVegan: false}
];  

let fruta=0;
for (let i = 0; i < foodSchedule.length; i++) {
  if(fruits.length==fruta){
    console.log("Ya no es posible agregar mas frutas de sustitucion sin repetirlas");
  }else if (foodSchedule[i].isVegan === false) {
    foodSchedule[i].name = fruits[fruta];
    foodSchedule[i].isVegan=true;
    fruta++;
  }
}

console.log(foodSchedule);