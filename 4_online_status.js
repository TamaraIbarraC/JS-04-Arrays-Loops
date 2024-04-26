//Mostrar el estado en linea de una lista de usuarios
/*
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/

//SOLUCION generada por la alumna para mostrar solo el resultado de un array con 3 usuarios:

const onlineUsers = ['mockIng99', 'J0eyPunch', 'glassedFer'];

let onlineStatus = `${onlineUsers[0]}, ${onlineUsers[1]}, and 1 more online`;

console.log(onlineStatus);

//SOLUCION vista en clase con opcion de mostrar resultado para 1, 2 o mas elementos en el array:

function displayUsers(arr){
    const count = onlineStatus.length;
    let res;
    if (count === 1){
        res = `${arr[0]} is online`;
    } else if (count === 2){
        res = `${arr[0]}, ${arr[1]} is online`;
    } else {
        res = `${arr[0]}, ${arr[1]} and ${count - 2} more are online`;
    }
    return res;
}

console.log(displayUsers(onlineUsers));