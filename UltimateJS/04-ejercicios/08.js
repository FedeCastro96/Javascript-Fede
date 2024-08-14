/* crear algoritmo que tome un array de objetos y devuelva un array de pares*/

let array = [{
    id: 1,
    name:'nico',
},{
    id:2,
    name: 'felipe'
},{
    id:3,
    name: 'diego',
}];

let pares = [
    [1,{id:1,name: "nico"}],
    [2,{id:2,name: "felipe"}],
    [3,{id:3,name: "diego"}],
];

function toPairs(arr){
    let pairs = [];
    for (idx in arr){
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento]
    }

    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);