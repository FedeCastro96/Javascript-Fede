
// Crear algoritmo de numeros impares de 0 a 10

// for (i=0;i<10;i++){
//     if (i%2 !=0){
//         console.log('numero impar', i)
//     }
// }

//-----------Otra forma de hacerlo

let i=0;

while (i<=10) {
    if (i%2!==0){
        console.log('impar i2',i)
    }
    i++ // esta parte es crucial para no hacer un loop infinito
}