//CREAR NODOS
const parrafo4 = document.createElement('p');
const textoParrafo4 = document.createTextNode('Parrafo 4');
const parrafo5 = document.createElement("p"); 
parrafo5.innerHTML = "Parrafo 5"

//SELECCIONAR ELEMENTO PADRE
const elementoPadre = document.querySelector('.padre')

// AGREGAR NODOS
parrafo4.appendChild (textoParrafo4);
elementoPadre.append(parrafo4,parrafo5)
