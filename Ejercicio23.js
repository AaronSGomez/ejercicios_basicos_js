/* Usa un bucle para crear 3 arrays de películas filtrados por categorías.
Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.
Imprime cada array por consola */
const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },  
  { name: "The Matrix", durationInMinutes: 136 },  
  { name: "Amélie", durationInMinutes: 110 },  
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const movieSmall=[];
const movieMediun=[];
const movieBig=[];

for(let i=0; i<movies.length; i++){
  if(movies[i].durationInMinutes<100){
    movieSmall.push(movies[i]);
  }else if(movies[i].durationInMinutes>=100 && movies[i].durationInMinutes<200){
    movieMediun.push(movies[i]);
  }else{
    movieBig.push(movies[i]);
  }
}

console.log("PELICULAS PEQUEÑAS: ",movieSmall);
console.log("PELICULAS MEDIANAS: ",movieMediun);
console.log("PELICULAS GRANDES: ",movieBig);
