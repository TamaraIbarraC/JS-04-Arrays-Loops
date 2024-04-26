//Escribir una funcion para determinar si algun array es dominante positivo, es decir, cuando la mayoria de sus elementos son positivos.
/*
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/

//SOLUCION generada por la alumna:

const positiveDom = [1, -3, -5, 4, 6767];

function positiveDominance(arr){
    let positive = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positive++;
        }
    }
    if(positive > arr.length/2){
        console.log(true);
    }else{
        console.log(false);
    }
}

positiveDominance(positiveDom);

/*Explicacion: 
1) Se crea una funcion llamada 'positiveDominance' que tiene el parametro arr. 
2) Se define una variable let llamada 'positive' que inicia con un valor de cero.
3) Se crea un bucle for que recorre el array arr, evaluando si el valor en la posicion 'i' es mayor a cero, luego aumentar una unidad a la variable 'positive'' y volver a evaluar.
4) Se crea una condicional que evalua si la variable 'positive' es mayor a la mitad del tamaño del array (para definir si el array es mayoritariamente positivo), si es asi, se imprime en consola el valor booleano true, si no, se imprime el valor booleano false.
5) Se ingresa el array con numeros a la funcion 'positiveDominance'.
*/