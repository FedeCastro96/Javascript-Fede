console.log ('OBJETOS------')


const usuario = {
    nombre: "Andres",
    mail: 'sarasa@gmail.com',
    id: 1234,
    saludar: function() {
        return "Bienvenidos"
    }
};

console.log(usuario.nombre);
console.log(usuario.mail);
console.log(usuario.id);
console.log(usuario.saludar());

console.log ('ARREYS---------')

const dias= [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
]

console.log(dias)  // ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']

console.log(dias[0])
console.log(dias[1])
console.log(dias[2])
console.log(dias[3])
console.log(dias[4])
console.log(dias[5])
console.log(dias[6]) // de esta forma retorna por día. 

//cambiar un día

dias[1] = 'dia de mierda'
console.log(dias)
console.table(dias) //---> lo imprime como tabla

//Agregar un día

console.log(dias.length, 'tamaño del array')

