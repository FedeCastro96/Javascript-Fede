// son agrupaciones de datos que tiene sentido tenerlos juntos

// Personaje de tv

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 12;

/* ESCENARIO HIPOTÉTICO: creo un objeto vacío
let personaje = {}; //objeto literal: creado solo con esa sintaxis

console.log(personaje); // la consola muestra '{}' y [[Prototype]]: Object

AHORA LE DOY PROPIEDADES A ESE OBJETO 👇🏻👇🏻*/

let personaje = {
    nombre: "Tanjiro",        //-> Propiedad o llave-valor
    anime: "Demon Slayer",
    edad: 16, 
};

console.log(personaje); // {nombre: 'Tanjiro', anime: 'Demon Slayer', edad: 16}

// Si solo quiero ver una propiedad: hay dos métodos 

console.log(personaje.anime); //Demon Slayer
console.log(personaje['nombre']); //Tanjiro

//Para cambiar una propiedad: 

personaje.edad = 18;
// -> personaje['edad']=18 de esta forma tmb funciona 

console.log(personaje.edad);

//para eliminar una propiedad...

delete personaje.anime;
console.log(personaje);
console.log(personaje.anime); //la consola marca undefined porque está eliminado


