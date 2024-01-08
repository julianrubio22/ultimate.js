// personaje de tv
let nombre = "juli";
let serie = "the office";
let edad = 20;

let personaje = {
    nombre: "juli",
    serie: "the office",
    edad: 20,
}
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['edad']);

personaje.edad = 12;
let llave = 'edad';
personaje[llave] = 15;

delete personaje.serie
console.log(personaje);