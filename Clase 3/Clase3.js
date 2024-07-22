
// // Ejemplo de una función: 

// alert("Ejemplo 1, función sin parametros")

// function soliciarNombre (){ //estamos declarando la función. No tiene parametros por eso el'()'
//     let nombreIngresado = prompt("Ingresar nombre")
//     alert ("El nombre ingresado es "+nombreIngresado)
// }

// soliciarNombre();

// ------------------  Ejemplo de una función con parametros

// //Declaro la variable para guardar el resultado de la suma
// let resultado=0;

// //Funcion que suma dos numeros y asigna a resultado
// function sumar (primerNumero,segundoNumero){
//     resultado=primerNumero+segundoNumero
// }

// //Función que muestra resultado por consola
// function mostrar (mensaje){
//     console.log(mensaje)
// }

// //llamamos primero a sumar y luego a mostrar
// sumar(79,12)
// mostrar(resultado)


// //------------------ Ejemplo 3
// function solicitarNombre(){
//     let nombreIngresado = prompt ("Ingrese su nombre")
//     alert ("El nombre ingresado es "+nombreIngresado)
// }

// solicitarNombre();

// // Cómo harías para ejecutarla 5 veces? 
// function solicitarNombre(){
//     let nombreIngresado = prompt ("Ingrese su nombre")
//     alert ("El nombre ingresado es "+nombreIngresado)
// }
// for (let i=0; i<5; i++){
//     solicitarNombre ();
// }

// ----------- Ejemplo ahorrar pasos a través de una función: 

// let dni = ""
// do{
//     dni=prompt ("Ingrese su DNI")
// } while (dni==="" || dni===null || isNaN(dni))

// let nombre = ""
// do{
//     nombre= prompt ("Ingrese su nombre")
// } while (nombre==="" || nombre===null)

// let apellido = ""
// do{
//     apellido = prompt ("Ingrese su apellido")
// } while (apellido==="" || apellido===null)


//===============

// let numeroUsuario = prompt("Adivine qué numero elegi del 1 al 10")
// let numeroParseado = Number(numeroUsuario)
// let numeroProgramador=4
// if(numeroParseado===numeroProgramador){
//     alert ("numero correcto")
// }else if(numeroParseado<1||numeroParseado>10|| isNaN(numeroParseado)){
//     alert ("ingrese un numero válido")
// }
// else{
//     alert ("Numero incorrecto") }

// function adivinarNumero(){
// let numeroUsuario = prompt("Adivine qué numero elegi del 1 al 10")
// let numeroParseado = Number(numeroUsuario)
// let numeroProgramador=4
// if(numeroParseado===numeroProgramador){
//     alert ("numero correcto")
// }else if(numeroParseado<1||numeroParseado>10|| isNaN(numeroParseado)){
//     alert ("ingrese un numero válido")
// }
// else{
//     alert ("Numero incorrecto") }
// }

// adivinarNumero()


//===== patronización. EJ pedir datos: // 

                //let dni = ""
                // do{
                //     dni=prompt ("Ingrese su DNI")
                // } while (dni==="" || dni===null || isNaN(dni))

                // let nombre = ""
                // do{
                //     nombre= prompt ("Ingrese su nombre")
                // } while (nombre==="" || nombre===null)

                // let apellido = ""
                // do{
                //     apellido = prompt ("Ingrese su apellido")
                // } while (apellido==="" || apellido===null)

/*function ingresarDato(tipoDato){
    let dato = ""
    do{
        dato = prompt (`Ingrese su ${tipoDato}`) 
        } while (dato === "" || dato === null)
            alert (`su ${tipoDato} es: ${dato}`)
}
ingresarDato ("DNI")
ingresarDato("Nombre") */

/* ==========Microdesafío

La semana estudiaste la sintaxis para la creación de funciones, aqplicando los conocimientos adquiridos complea la función
Una vez completada tomala como base para la crear una función flecha pero pasando los valroeas a sumar como paramentros en la funcipn sumar. 