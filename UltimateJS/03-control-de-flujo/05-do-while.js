let i1=2;
while (i1<2) {
    if (i1%2==0){
        console.log('numero par i1',i1)
    }
    i1++; 
}  

// la consola no muestra nada. Primero analiza la primer condición (while). 
//Cómo i1 no es menor a dos, ya no corre la condición
// primero condición, despues bloque de código


let i2=2
do {
    if (i2%2==0){
        console.log('numero par i2 ',i2);
    }
    i2++;
} while (i2<2);

// en este caso, la verificación está al final.
// el primer if pregunta si i2 es par (que lo es)
// acto seguido, la consola muestra el valor de i2
// luego el código dice que mientras i2 sea menor a dos, itere. 
//i2 no es menor a dos, entonces corta.
// primero bloque de código, despues condición