// Dado un numero, devolverlo dividido en mitades dentro de un array.
/*
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
*/

//a) SOLUCION de la alumna:

const num1 = 4;
const num2 = 10;

function numDiv(num){
    const halfNum = num / 2;
    return [halfNum, halfNum];
}

console.log(numDiv(num1));

//b) SOLUCION vista en clase usando push():

function numDivided(arr){
    let res = [];
    const half = arr / 2;
    res.push(half);
    res.push(half);
    return res;
}

console.log(numDivided(num1));