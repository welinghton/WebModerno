let a = 7;
let b = 94;

console.log("Variável a = " + a);
console.log("Variável b = " + b);

let temp = a; // c = 7
a = b;
b = temp;

console.log("Troca dos valores das variáveis realizada")
console.log("Variável a = " + a);
console.log("Variável b = " + b);