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
        pResultado.style = "color: orange;"
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

$(document).ready(function(){
    //$(".prueba_de_jquery").css({"background-color": "yellow"});
    $(".btn_mostrar_naranja").click(function(){
        $("#segundo").append("<p> 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore odio quibusdam illo hic adipisci, repellat aliquam officiis est alias porro impedit voluptatem facilis, aut nostrum, doloribus sint quia in officia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet tenetur quod quis laudantium tempora, explicabo ex ut sequi cumque inventore dignissimos a dolorem quae maiores praesentium! Eligendi dolorum architecto officiis.</p>");
    });
});