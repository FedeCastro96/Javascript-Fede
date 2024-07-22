//para definir un array hay que definir una variable

let arrayLiteralVacio = []; //Array literal vacío

let animales = ['vaca','perro'];
console.log(animales);  

/*  ---> Log <---
(2) ['vaca', 'perro']
0: "vaca"                  ----------> Los arrays arrancan en 0
1: "perro"
length: 2
[[Prototype]]: Array(0)  
---> End of comment <---*/ 

console.log(animales[0]);   // log: vaca

// AGREGAR UN TERCER ANIMAL

animales [2]= 'pato';

console.log(animales);

/*
(3) ['vaca', 'perro', 'pato']
0: "vaca"
1: "perro"
2: "pato"
length: 3
[[Prototype]]: Array(0) */

//Si agrego un ID más grande, se va a llenar con espacios vacíos. 

animales[10]= 'dragón'; //Defino a dragón como ID=10
console.log(animales);

/* (11) ['vaca', 'perro', 'pato', empty × 7, 'dragón']
0: "vaca"
1: "perro"
2: "pato"
10: "dragón"  ---> ID = 10
length: 11   --> la longitud del array es de 11 aunque haya varios vacíos 

SI ahora intento traer el ID 6 👇🏻👇🏻*/

console.log(animales [6])  // Undefined
console.log(typeof animales)  // La consola dice que es un objeto

console.log(animales.length); // longitud de 11

