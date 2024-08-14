/* --------------------------------------- Escribir una función que reciba dos numeros y determine cual es mayor

let numero1 = prompt("ingrese un numero"); 
let numero2 =prompt("ingrese otro número");

function CualMayor () {
if (numero1>numero2){
    alert(`el numero ${numero1} es mayour que el ${numero2}`)
} else if (numero1< numero2) {
    alert(`el numero ${numero2} es mayour que el ${numero1}`)
}else {
    alert("Los números son iguales")
}

}

CualMayor();*/


/*   ---------------------------------------Ej calculadora de IVA ---------------------- 

let precio = prompt('ingrese el precio');
const IVA = 1.21;
let precioFinal;

function calcularIva(){
    while (precio<0 || isNaN(precio)){
        precio= prompt('Ingrese un precio válido');
    }
    precioFinal = precio*IVA
}

function mostrarPrecio (){
    console.log(precioFinal)
    alert (`el valor con IVA es ${precioFinal}`)
}

calcularIva();
mostrarPrecio();*/



/*   ---------------------------------------Ejercicio función suma ----------------------
let numero1
let numero2

function sumar(numero1,numero2){
    let suma = numero1+numero2;
    return suma;
}

let resultado = sumar(20,30); 


/*   ---------------------------------------Ejercicio función suma ----------------------

function cualMayor (numeros){
   let mayor = numeros[0];
    for(let i=1; i<numeros.length; i++){
        if(numeros[i]> mayor){
            mayor = numeros[i];
        }
    }
    return mayor;
}

const numeros = [3, 10, 2, 9, 5];
console.log(cualMayor(numeros)); */



/*   ---------------------------------------creación de objeto ----------------------

const persona = {
    nombre: 'Leo', 
    edad: 37, 
    ciudad:'Rosario'
}

function saludar(persona){
    return `Hola, soy ${persona.nombre}.
Tengo ${persona.edad} años.
Soy de ${persona.ciudad}.`
}
console.log(saludar(persona));

*/

/*   ---------------------------------------creación clase ----------------------*/

// Crea una clase llamada Persona con las siguientes características:
//Un constructor que reciba nombre y edad como parámetros y los asigne a las propiedades del objeto.
//Un método llamado saludar que devuelva un saludo con el nombre de la persona.

// class Persona{
//     constructor(nombre,edad){
//         this.nombre = nombre; 
//         this.edad = edad; 
//     }
//     saludar(){
//         return `Hola soy ${this.nombre}, tengo ${this.edad} años` 
//     }
// }

// const persona1 = new Persona("Juan",20)
// console.log(persona1.saludar());

// const persona2 = new Persona("Ana",50)
// console.log(persona2.saludar());

/*   ---------------------------------------Orden superior ----------------------*/

// const personasFamosas = [
//     { nombre: "Lionel", apellido: "Messi", edad: 36, soltero: false },
//     { nombre: "Emma", apellido: "Watson", edad: 33, soltero: true },
//     { nombre: "Robert", apellido: "Downey Jr.", edad: 59, soltero: false },
//     { nombre: "Ariana", apellido: "Grande", edad: 30, soltero: true },
//     { nombre: "Chris", apellido: "Hemsworth", edad: 40, soltero: false }
// ];

// //const solteros = personasFamosas.filter(persona => persona.soltero)
// console.log("Personas solteras:", solteros)

// //Utiliza el método find para encontrar la primera persona que tenga más de 35 años.
// const mayorDe35 = personasFamosas.find(persona => persona.edad > 35)
// console.log(mayorDe35) 


/*   ---------------------------------------For Each ----------------------*/


// const numeros = [50, 12, 37, 17, 25, 6]; 
// const animales =["Perro", "Gato", "Gato", "Cisne", "Tortuga"]
// const productos =[ 
//     {nombre: "Mesa", precio: 3500},
//     {nombre: "Silla de plástico", precio: 2000},
//     {nombre: "Silla de madera", precio: 2500},
//     {nombre: "Ventana", precio: 4500},
// //     {nombre: "Puerta", precio: 3000},   
// ]

// numeros.forEach((numero)=>{
//     console.log(numero)
// });

// productos.forEach((producto)=>{
//     console.log(producto.precio)
// })

// const perro = animales.find((animal)=> animal === "Perro")
// console.log(perro);

// let productoElegido = prompt ("Ingrese el producto que quiere comprar."); 

// console.log(productos.find((producto) => producto.nombre === productoElegido)); 

// const jugadores = ["Lionel","Angel","Julian","Dibu","Lionel"]

// // const jugador = jugadores.filter((jugador)=> jugador === "Lionel");
// // console.log(jugador);

// const sillas= productos.filter((producto) => producto.nombre.includes("Silla"));
// console.log(sillas);

// const hayParlante = productos.some (producto => producto.nombre === "Parlante")
// console.log(hayParlante)

// const preciosActualizados = productos.map((producto)=> {
//     return {
//         nombre: producto.nombre,
//         precio: producto.precio * 1.5
//     }
// });
// console.log(productos)
// console.log(preciosActualizados)

// const total = numeros.reduce ((acumulador, numero) => acumulador + numero,0) //el acumulador es la variable donde se van sumando las sumas individuales. 
// console.log(total);

// const totalCarrito = productos.reduce((accumulador, producto) => accumulador + producto.precio,0) //se pone ",0" porque es desde donde queremos arrancar la suma
// console.log(totalCarrito);

// animales.sort
// console.log(animales)

// numeros.sort((a,b)=> a-b);
// console.log (numeros)

// numeros.sort((a,b)=> a+b);
// console.log (numeros)

// console.log(numeros)

// console.log(Math.round(Math.random()*50+100));

// function numeroAleatorioEnteroEntre(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
// const NumeroRandom = numeroAleatorioEnteroEntre(50, 150)
// console.log(NumeroRandom)
  

console.log(Math.floor((Math.random()*50+100)));