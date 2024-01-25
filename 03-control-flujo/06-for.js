// let i = 2;
// while (i < 2){
//     if (i % 2 == 0){
//         console.log('numero par', i);
//     }
//     i++;
// }

// for (let i = 2;i < 10;i++) {
//     if (i % 2 == 0){
//         console.log('numero par', i);
//     }
// }

// let animales = ['perro', 'dragon', 'perrito'];

// for(let animal of animales){
//     console.log(animal);
// }

// let i = 0;
// while (i < animales.length) {
//     console.log(animales[i]);
//     i++;
// }

let user = {
    id: 1,
    name: 'polo',
    age: 25,
};

for (let propiedad in user) {
    console.log(propiedad, user[propiedad]);
}

let animales = ['perro', 'dragon', 'perrito'];
for (let indice in animales) {
    console.log(indice ,animales[indice]);
}