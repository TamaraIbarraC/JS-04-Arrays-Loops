//Crear una funcion que tome 2 parametros (numero, longitud) y regrese un array de lngitud conteniendo multiplos del numero.
/*
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
*/

//SOLUCION generada por la alumna:

function multiples(num, length) {
    let arr = [];
    for (let i = 1; i <= length; i++) {
        arr.push(num * i);
    }
    return arr;
}

console.log(multiples(2,10));