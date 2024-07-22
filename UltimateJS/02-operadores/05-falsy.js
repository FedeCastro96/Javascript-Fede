// Short-circuit

/** Devuelven Falso:: Se conocen a estos valores como falsy
 * False
 * 0
 * ''
 * null
 * undefined
 * NaN
 */

let nombre1 ='';
let username1 = nombre1 || 'Anonimo';

console.log(username1);  // En este caso la consola devuelve el string 'Anonimo', porque el valor de nombre no está definido.

let nombre2 ='Nombre de la persona';
let username2 = nombre2 || 'Anonimo';

console.log(username2); // En este caso la consolad devuelve el nombre de la persona, porque la variable está definida.

function fn1() {
    console.log ('soy la función 1');
    return true;
}

function fn2() {
    console.log ('soy la función 2');
    return true;
}

let x = fn1() && fn2(); // La consola devulve las dos funciones, porque usamos && y las dos devuelven tru

function fn3() {
    console.log ('soy la función 3');
    return false;
}

function fn4() {
    console.log ('soy la función 4');
    return true;
}

let y = fn3() && fn4(); // La consola solo devuelve la función 3. Dado que el operador lógico && (AND) evalúa a false si el primer operando es false, la función fn4 no se ejecuta.