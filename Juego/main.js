//inicialización de variables
let tarjetasDestapadas = 0; 
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null; 
let segundoResultado = null; 
let movimientos = 0; 
let aciertos = 0;
let temporizador = false;
let timer = 45;
let tiempoRegresivo = null; 
let timerInicial = 45;

// Apuntando a documento HTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante')

//generalización de números aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

//funciones
function contarTiempo(){
    tiempoRegresivoId = setInterval(()=>{
    timer--;
    mostrarTiempo.innerHTML = `Tiempo: ${timer}`;
    if (timer==0){
        clearInterval(tiempoRegresivoId);
        bloquearTarjetas();
        }
    },1000)
}

function bloquearTarjetas(){
    for (let i=0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros [i];
        tarjetaBloqueada.disabled = true; 
    }
}


//funcion principal
function destapar(id){

    if (temporizador == false){
        contarTiempo();
        temporizador = true; 
    }


    tarjetasDestapadas++; 
    console.log("Numero de tarjeta clickada", tarjetasDestapadas);

    if(tarjetasDestapadas == 1){
        //mostrar primer numero
        tarjeta1 = document.getElementById(id);
        console.log("id de la tarjeta1",tarjeta1)
        primerResultado = numeros[id]
        console.log("valor de la tarjeta1", primerResultado)
        tarjeta1.innerHTML = primerResultado;

        //Deshabiliar el primer boton
        tarjeta1.disabled = true; 
    }else if (tarjetasDestapadas==2){
    // mostrar segundo numero
    tarjeta2 = document.getElementById(id);
    console.log("id de la tarjeta2",tarjeta2)
    segundoResultado = numeros[id]; 
    console.log("valor de la tarjeta2", segundoResultado)
    tarjeta2.innerHTML = segundoResultado

    //desabilitar el segundo boton
    tarjeta2.disabled = true;

    // incrementar movimientos
        movimientos++; 
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`

        if(primerResultado == segundoResultado){
            //encerar contador de tarjetas destapadas
            tarjetasDestapadas = 0; 

            //aumentar variable aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId)
                mostrarAciertos.innerHTML= `Aciertos: ${aciertos} 😁 `
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 🤘🏻`
                mostrarTiempo.innerHTML = `Fantástico! Solo te demoraste ${timerInicial - timer} segundos`;
                setTimeout(() => {
                    alert('Puto el que lee');
                }, 100);
            }
        }else{
            //mostrar momentaneamente los valores y volver a tapar
            setTimeout(()=>{
                tarjeta1.innerHTML= ''; 
                tarjeta2.innerHTML= ''; 
                tarjeta1.disabled= false;
                tarjeta2.disabled= false;
                tarjetasDestapadas = 0;
            },800);
        }
    } 
}