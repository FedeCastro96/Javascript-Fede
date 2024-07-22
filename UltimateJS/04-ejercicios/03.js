
/**
 * Le vamos a dar un indice y nos tiene que decir que elemento es
 * indice validar que no sea menor a cer y que el elemento exista en el array
 */

function getbyIdx(arr,idx){
    if (idx<0 || arr.length<=idx){
        return 'Elemento no existe';
    }
    return arr[idx];
}

let resultado = getbyIdx([1,2],0);
console.log(resultado);