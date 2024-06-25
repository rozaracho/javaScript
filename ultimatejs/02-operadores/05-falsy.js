// Short circuit 


//false -> falsy

//false
//0
//null
//''
//undefined
//NaN

let nombre = '';
let userName = nombre || 'Anonimo';
console.log(userName);

function fn1(){
    return false;
}

function fn2(){
    return true;
}

let x = fn1() && fn2();