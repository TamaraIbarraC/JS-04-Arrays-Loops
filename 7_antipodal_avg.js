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

//- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.

function splitArray(array) {
    const half = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, half);
    const secondHalf = array.slice(half);
    return [firstHalf, secondHalf];
}

function inverseArray(array) {
    const inverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        inverse.push(array[i]);
    }
    return inverse;
}

function sumArrays(array1, array2) {
    const sum = [];
    for (let i = 0; i < array1.length; i++) {
        sum.push(array1[i] + inverseArray(array2)[i]);
    }
    return sum;
}

function divideArray(array) {
    const divided = [];
    for (let i = 0; i < array.length; i++) {
        divided.push(array[i] / 2);
    }
    return divided;
}

const [firstHalf, secondHalf] = splitArray(numbers);

console.log(divideArray(sumArrays(firstHalf, inverseArray(secondHalf))));

