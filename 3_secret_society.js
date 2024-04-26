//Encontrar el nombre de una sociedad secreta basandose en la 1a letra de cada miembro
/*
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
*/

// a) SOLUCION generada por la alumna usando e[0] para obtener la primera letra de cada miembro del array:

const secretName1 = ["Esperanza", "Franco", "Nia"];
const secretName2 = ["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"];
const secretName3 = ["Harry", "Ron", "Hermione"];

function secret(names) {
    let firsts = [];
    names.forEach((e) => firsts.push(e[0]));
    console.log(firsts.sort().join(''));
}

secret(secretName2);

// b) SOLUCION vista en clase usando charAt(0):

function secretNameSoc(arr){
    let firstLet = [];
    arr.forEach((e) => firstLet.push(e.charAt(0)));
    return firstLet.sort().join('');
}

console.log(secretNameSoc(secretName2));