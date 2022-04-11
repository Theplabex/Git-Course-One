'use strict'

let numeroEstable = 46;

for(let i= 0; i <= numeroEstable; i++){
    console.log(i);
}

//////////////////////////////////////////divisor
console.log("****************************************");
///////////////////////////////////////////divisor

let myArray = [1,2,2,1,2,3,2,1,5,5,6,8,4,5,4,3,2,1,3,21,3,2,1,3,2,13,2,1,32,1,32,1,32,1,32,1,21,];
for(let e in myArray){
    console.log(myArray[e]);
}

//////////////////////////////////////////divisor
console.log("****************************************");
///////////////////////////////////////////divisor

function suma(num1,num2){
    let total = num1 + num2;
    return total;
}
let sumaTotal = suma(myArray[15], myArray[24]);
console.log(sumaTotal);

//////////////////////////////////////////divisor
console.log("****************************************");
///////////////////////////////////////////divisor

let objetoOne = new Object();
objetoOne.nombre = "alex";
objetoOne.apellido = "exie";

let nombreCompleto = objetoOne.nombre + " " + objetoOne.apellido;
let CompletoNombre = `${objetoOne.nombre} ${objetoOne.apellido}`;

console.log(nombreCompleto);

//////////////////////////////////////////divisor
console.log("****************************************");
///////////////////////////////////////////divisor *git