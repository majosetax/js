
/* fundamentos de javascript 

   variables y tipos de datos */

let majo = 'majo';

let saludo = "hola " + majo;

console.log(saludo);

/* funciones */

function areaTriangulo() {
    let base = 2;
    let altura = 3;
    console.log('Area del triangulo: ' + ((base * altura) / 2));
}

areaTriangulo();

/* condicionales */

function positivoNegativo(){

let numero = -2;

if (numero > 0) {
    console.log('El numero es positivo');
}
else {
    console.log('El numero es negativo');
}
}

positivoNegativo();

/* bucles */

function bucle(){
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
}

bucle();

/* Manipulacion del DOM 
   Seleccion de elementos*/

document.getElementById('botonTexto').innerHTML = 'Boton ahora';


/* Modificacion del contenido */

document.addEventListener('click', function(){
    document.getElementById('enlace').style.backgroundColor = 'red';
});

/* Eventos */

const botonTexto = document.getElementById('botonTexto')
const mostrarTexto = document.getElementById('mostrarTexto')
botonTexto.addEventListener('click',function(){
    mostrarTexto.textContent = 'Mensaje mostrado';
});

