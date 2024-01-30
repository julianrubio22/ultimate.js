const txtop1 = document.getElementById("op1");
const txtOperador = document.getElementById("operacion");
const txtop2 = document.getElementById("op2");
const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

btnCalcular.addEventListener('click', calcular);

function calcular() {
    const operacion = txtOperador.value;
    const op1 = parseFloat(txtop1.value);
    const op2 = parseFloat(txtop2.value);

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)){
        let resultado;
        switch(operacion){
            case "+":
                resultado = op1 + op2
                break; // sirve oa
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1*op2
                break;
            case "/":
                resultado = op1/op2
                break;
        }
        pResultado.style = "color: white;"
        pResultado.innerText = "= " + resultado;
        document.getElementById("resultado").style.display = "block"
    }else{
        pResultado.style = "color: red;"
        pResultado.innerText = "CALCULO IMPOSIBLE";
        document.getElementById("resultado").style.display = "block"
        
    }
}
//----------------

var elementosConClase = document.getElementsByClassName("botonPrecio");

for (var i = 0; i < elementosConClase.length; i++) {
    elementosConClase[i].addEventListener("click", function(e){
        if (e.target.textContent === "Ver precio"){
            e.target.textContent = "5.000";
        }else {
            e.target.textContent = "Ver precio";
        }
    }
)};

//-------------------------

const botonMostrar = document.getElementById("mostrar");
botonMostrar.addEventListener('click', mostrar);

var parrafo = document.getElementById("miParrafo");
function mostrar(){
    parrafo.innerHTML = "esto es creado desde un id en html y texto es modificado desde JS";
    parrafo.style.color = "white";  
    document.getElementById("miParrafo").style.display = "block"
}
//---------
function actualizarReloj() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;

    var horaActual = horas + ":" + minutos + ":" + segundos;
    document.getElementById("reloj").innerText = horaActual;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();


//var nombre = prompt('hola, dime tu nombre');
//alert("ahora estas en la matrix, " + nombre);
//document.write("ahora estas en la matrix, " + nombre)
//var num1, num2, suma

//num1 = parseFloat(prompt("ingresar el primer numero:"));
//num2 = parseFloat(prompt("ingresar el segundo numero:"));
//suma = num1 + num2

//document.write('el resultado de la suma de: ' + suma);

/*var num1, num2, suma, num3, resultado

num1 = parseFloat(prompt("ingresar el primer numero:"));
num2 = parseFloat(prompt("ingresar el segundo numero:"));
//num3 = parseFloat(prompt("ingresa el tercer numero"));
suma = num1 + num2

document.write("el resulrado de la suma es: "+ suma);

num3 = parseFloat(prompt("ingresa el tercer numero para multiplicar con la suma anterior"));
resultado = num3 + suma
document.write("el resultado deñ numero tres es: " + resultado);*/




// constantes son variables que no tienen cambios,  es decir cuando se le asigna un valor no se puede remover
// get elemente by id es seleccionar un elemento del documento a traves del valor del id que se le haya asignado en el html
// el metodo add event listener es yn escuchador que indica al navegador que este atento a la interaccion del usuario . la ventaja es que se escribe totalmente en JS sin necesidad de tocar html
// function: basicamente un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para   que un procedimiento califique como funcion, debe tomar alguna entrada y devolver una salida donde hay alguna relacion obvia entre entrada y salida
// if if else: ejecuta una sentencia si una condicion especifica es evaluada como verdadera. si la condicion es evaluada, otra puede ser ejecutada
/* if (condicion){
    etc etc 
}else
switch:

*/