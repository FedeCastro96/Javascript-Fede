let i1=0; 

while(i1<3){
    i1++;
    if (i1===2){
        continue
    }
    console.log('i1 =',i1)
} // la consola devuelve 1 y 3 (se salta el dos.)

let i2=0

while (i2<5){
    i2++;
    if (i2===4){
        break
    }
    console.log('i2 =',i2);
} // la consola muestra 1,2,3,4

let i3=0

while(i3<9){
    i3++;
    if (i3===2){
        continue
    }
    if (i3===6){
        break
    }
    console.log('i3 =',i3)
} // la consola muestra 1,3,4 y 5