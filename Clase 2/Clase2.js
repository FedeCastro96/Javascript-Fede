/*let saldo = parseFloat(prompt("Ingrese su saldo"))

if(saldo >=0) {
    alert (`Tienes ${saldo} pesos`)
}
else if(isNaN(saldo)){
    alert ("tas re drogado, negri")
}
else if(saldo<0){
 alert("Tienes deuda")
}
else{
    alert("flujo desconocido")
}
alert ("fin del flujo")

*/

/*Ejercicio de Switch: 

En un departamento hay 6 inquilinos, 2 viven en el mismo cuarto. Crea un algoritmo con switch 
para que nuestra maquina pueda con el nombre dado, decirle a qué cuarto/piso ir


let nombre = prompt("diga su nombre").toLowerCase()
switch (nombre) {
    case "andres":
        alert("1A")
        break
    case "diana":
        alert("1b")
        break
    case "juan":
    case "jaime":
        alert("1c")
        break
    case "laura":
        alert("2a")
        break
    case "matilda":
        alert("2b")
        break
    default:
        alert("usted no vive acá")
    }
*/

// for (let i=0; i<5; i=i+2){
//     console.log("este es i:",i)
// }

let global = "Hola soy Global"
console.log(enScope)
let enScope =1 
{
    let enScope2 =2 
    var feo = 25 
}

{let enScope3 = 3
    {
        const enscope4 =1234
    }}