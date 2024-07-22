/*-------------------------------------------

 Notas: 
      *el valor que le ponemos a la función se llama argumento. Ej: Suma(argumento)
      *la parte entre llaves se llama parámetro

--------------------------------------------*/

let mensajeConsola = "Ejemplo 1: un parámetro y un argumento"
console.log(mensajeConsola)

function suma(parametroA){
    return parametroA + 2;
}

let resultado = suma(5); 
console.log(resultado); //--> 7

// -------------------------------------------------

let mensajeConsola2 = "Ejemplo 2: un parámetro y dos argumento"
console.log(mensajeConsola2)


let resultado2 = suma (5,6);
console.log(resultado2);  
    //la consola sigue mostrando 7 porque solo tenemos un argumento. 

// -------------------------------------------------------
 
let mensajeConsola3 = "Ejemplo 3: dos parámetros y dos argumento"
console.log(mensajeConsola3)

function suma3 (parametroA,parametroB){
    return parametroA+parametroB;
}

let resultado3 = suma3(5,6); 
console.log(resultado3);  // la consola devuelve 11
console.log(typeof suma); // la consola devuelve function

// -----------------------------------------------------------

let mensajeConsola4 = "Ejemplo 4:"
console.log(mensajeConsola4)

function suma4 (a,b) {
    console.log(arguments);
    return a+b;
}

let resultado4 = suma4 (5,6,1,2,3); //Arguments(5) [5, 6, 1, 2, 3
console.log(resultado);
console.log(typeof suma); 