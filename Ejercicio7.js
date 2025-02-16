function greaterNumber(numberOne , numberTwo) {
if (numberOne > numberTwo) { 
    return numberOne;
}else if (numberOne == numberTwo) {
    return "Los números son iguales";
}else {
    return numberTwo;
}
}

console.log(greaterNumber(2, 3)); // devuelve 3
console.log(greaterNumber(122, 8)); // devuelve 122
console.log(greaterNumber(2, 2)); // devuelve "Los números son iguales"