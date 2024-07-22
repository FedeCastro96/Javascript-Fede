
/*Crear algoritmo que ayude a los argentinos a calcular el precio del Impuesto País para compras en el exterior en USD
 PrecioOriginal es el valor nominal que aparece en el producto a comprar en dolares. Ej: Remera a 10 USD
 Cómo todos sabemos, a ese valor en USD hay que adicionarle un porcentaje del 30%
 El precio del dolar en este trabajo se tomó a 1330 pesos
 */

function verificarValor() {                                                       // Nombre de la función
    let precioOriginal;                                                          // definimos la variable
    do {
        precioOriginal = prompt('Ingrese el precio original');                   // le pedimos al usuario el precio a calcular el impuesto
        precioOriginal = parseFloat(precioOriginal);                             // nos aseguramos de que sea un número
        if (isNaN(precioOriginal)|| precioOriginal<=0){                          // Condiciones: que sea mayor a cero y sea un número
            alert('No ingresó un número válido. Inténtelo de nuevo.');           // le alertamos al usuario que no puso un número válido        
        }
    }while (isNaN(precioOriginal) || precioOriginal <= 0);                         // Loop: mientras no sea un número o sea menor a cero👇🏻
    return precioOriginal;                                                       // 👆🏻 ejecutamos 'precioOriginal'
}


function precioConImpuesto(precioOriginal) {                                        // definimos la función que calcule el impuesto
    let precioFinalUSD = precioOriginal * 1.3;  
    let precioFinalPesos = precioFinalUSD * 1330                                   // adicionamos el impuesto al precio original
    alert(`El precio final en dólares es U$D ${precioFinalUSD} y el precio final en pesos es $${precioFinalPesos}` );                                 // informamos al usuario del precio final
        return {
        precioFinalUSD,
        precioFinalPesos
    };
}

let precioOriginal = verificarValor();                                           //ejecutamos las funciones
precioConImpuesto(precioOriginal);

