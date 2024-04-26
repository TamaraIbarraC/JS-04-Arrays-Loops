//Sumar resistencias en serie
/*
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
*/
//Note: Use abs value to return positives.

// a) SOLUCION generada por la alumna usando una FUNCION:

const resistance1 = [-1, 5, 6, 3];
const resistance2 = [14, 3.5, 6];
const resistance3 = [8, 15, 100];

function sumRes(resistance){
    const resAbs = resistance.map((e) => Math.abs(e));
    const sumRes = resAbs.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    console.log(`'${sumRes} ohms'`);
}

sumRes(resistance1);

// b) SOLUCION vista en clase:

function sumResistance(arr){
    const arrAbs = [];
    let resistance = 0;
    arr.forEach((e) => arrAbs.push(Math.abs(e)));
    arrAbs.forEach((e) => (resistance = resistance + e));
    console.log(`'${resistance} ohms'`);
}

sumResistance(resistance1);

// c) SOLUCION 2 vista en clase, usando FOR:

function sumResistance2(arr){
    let resistance = 0;
    for(let i = 0; i < arr.length; i++){
        resistance += Math.abs(arr[i]);
    }
    console.log(`'${resistance} ohms'`);
}

sumResistance2(resistance1);