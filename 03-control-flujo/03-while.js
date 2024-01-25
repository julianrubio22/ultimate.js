// cuales son los numeros pares
/*
let i = 0;
while (i < 10) {
    if (i % 2 == 0) {
        console.log('numero par', i);
    }
    i++;
}

console.log('fuera del while');

*/let i = 2; // evaluar primero la condicion y despues ejecuta
while (i < 2) {
    if (i % 2 == 0) {
        console.log('numero par', i);
    }
    i++;
}
do{ // ejecutar y despues evaluar la condicion
    if (i % 2 == 0){
        console.log('numero par', i);
    }
    i++;
}while (i < 2);
