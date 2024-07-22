// AND (&&)

console.log('Operador AND (&&)');

console.log(true&&true); //[true] -> le estmoas preguntando si true es true
console.log(true&&false); //[false]

let mayor =true;
let suscrito = true;

console.log(mayor&&suscrito); //[true]: Es true si los dos son true

console.log('Operador OR (||)');
console.log(mayor||suscrito); //[true]: es true si uno de los demás es true

console.log('Operador NOT (!)');
console.log(!mayor); // //[false]:es false porque mayor es true y lo estamos invirtiendo.

let catalogo =!mayor;
console.log(catalogo);
