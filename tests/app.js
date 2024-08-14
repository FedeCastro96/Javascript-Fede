let nombre; 

//constante apuntar nombre
const apuntarNombre = document.getElementById('hola')
const apuntarMode = document.getElementById('mode')



function IngresarNombre (){
    
    // Preguntar el nombre al usuario
    while(true) {
        nombre = prompt('¿Cuál es tu nombre?');
    
    // Verificar si el nombre es nulo o no es un string válido
    if(nombre === null || !isNaN(nombre)){
       alert("Ingrese un nombre válido.");
       
    }else{
        console.log("el nombre ingresado es", nombre);
        apuntarNombre.innerHTML= (`Hola, ${nombre}`);
        break;
    }
}}

IngresarNombre();

function changeMode(){
    document.body.classList.toggle('dark-mode');
}


apuntarMode.addEventListener("click",changeMode)


