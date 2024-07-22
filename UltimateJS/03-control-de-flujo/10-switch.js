let ganador = 'betis';

switch (ganador){
    case 'Barcelona':
        console.log('Ganó el Barsa');
        break
    case 'Real':
        console.log('Ganó el Real');
        break
    default: 
    console.log('empate')
}


// si la variable ganador dice 'Barcelona', el output será 'ganó el barsa'
// si la variable ganador dice 'Real', el output será 'ganó el real'
// si la variable ganador dice cualquier cosa que no sea Barcelona o Real, el output será 'empate'
// esto es lo mismo que if else, pero más práctico