
function suma(a, b){ // a parametro
    console.log(arguments);
    return a + b;
}

let resultado = suma(5, 6); //5 argumento

console.log(resultado);

console.log(typeof suma);