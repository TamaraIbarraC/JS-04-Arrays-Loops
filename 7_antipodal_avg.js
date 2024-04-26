//Dado un Array, regresar un array mas corto siguiendo estos pasos:
/*
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.

Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/

//SOLUCION de la alumna:

const numbers = [1, 2, 3, 5, 22];

//Dividiendo el array en partes iguales:

function splitArray(array) {
    let half = Math.floor(array.length / 2);
    let firstHalf, secondHalf;
    //Si el array se conforma de un numero PAR de elementos:
    if (array.length % 2 === 0) {
        firstHalf = array.slice(0, half);
        secondHalf = array.slice(half);
    //Si el array se conforma de un numero IMPAR:
    } else {
        firstHalf = array.slice(0, half);
        secondHalf = array.slice(half + 1);
    }
    //Devolver la primera mitad del array y el INVERSO de la segunda mitad:
    return [firstHalf, secondHalf.reverse()];
}

//Sumando elementos entre arrays y diviendo por 2:

function sumAndDivide(a1, a2){
    const sumDiv = [];
    for (let i = 0; i < a1.length; i++) {
        sumDiv.push((a1[i] + a2[i]) / 2);
    }
    return sumDiv;
}

//Declarando las variables como del primer y segundo array ya divididos para cargar el array original "numbers":

const [firstHalf, secondHalf] = splitArray(numbers);

console.log(sumAndDivide(firstHalf, secondHalf));