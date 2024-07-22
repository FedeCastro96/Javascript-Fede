/* -------------------FORMATO
while (condición){
    bloque
}-----------------------------*/


//imprimir los primeros 10 numeros: 

let i=0; 

while (i<10) {
    console.log(i);
    i++; 
}  
 /* ----------LOGS: 
 muestra i= 1, 2,3,4,5,6,7,8,9,10
 lOGICA: mientras i sea menor a 10, se va a imprimir i y luego le va a volver a sumar 1. 
 ej: i=0 ; es menor a 10? si --> imprimo i=0 y le sumo 1; 
 ahora imprime i=1 y vuelve a loopear. */ 



// EJERCICIP DOS: imprimir solo los pares menores que 10 
i=1
while (i<10) {
    if (i%2==0){
        console.log('numero par',i)
    }
    i++; 
}  