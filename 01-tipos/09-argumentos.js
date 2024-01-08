function suma(a, b){
    console.log(arguments);
    return a + b; //parametros
}

let resultado = suma (5, 6, 1, 2, 3); // el valor que uno le da es un argumento
console.log(resultado);
console.log(typeof suma);