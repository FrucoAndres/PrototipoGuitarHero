const circulov1 = document.getElementById('cv1');
const circulov2 = document.getElementById('cv2');
const circulov3 = document.getElementById('cv3');
const circulov4 = document.getElementById('cv4');

const circulo1 = document.getElementById('circulo1');
const circulo2 = document.getElementById('circulo2');
const circulo3 = document.getElementById('circulo3');
const circulo4 = document.getElementById('circulo4');

const circulovg1 = document.getElementById('chg1');
const circulovg2 = document.getElementById('chg2');
const circulovg3 = document.getElementById('chg3');
const circulovg4 = document.getElementById('chg4');

let puntaje = 0;

// Función para mover un círculo verticalmente
function moverCirculoVerticalmente(circulo) {
    const velocidad = Math.random() * 4 + 1; // Velocidad aleatoria entre 1 y 3 (ajusta según tus preferencias)
    let posicionY = 0;

    function animar() {
        posicionY += velocidad;
        circulo.style.transform = `translateY(${posicionY}px)`;

        // Si llega a cierto límite, reinicia la posición

        if (posicionY >= 720) {
            posicionY = -200;

            setTimeout(animar, Math.random() * 1600); // Espera un tiempo aleatorio antes de reaparecer
        } else {
            requestAnimationFrame(animar);
        }
        console.log(puntaje)
    }

    animar();

}

// Llama a la función para cada círculo
moverCirculoVerticalmente(circulo1);
moverCirculoVerticalmente(circulo2);
moverCirculoVerticalmente(circulo3);
moverCirculoVerticalmente(circulo4);

// Variable para rastrear si las teclas están presionadas
let teclaAPresionada = false;
let teclaSPresionada = false;
let teclaDPresionada = false;
let teclaFPresionada = false;

// Función para actualizar el puntaje constantemente
function actualizarPuntaje() {
    // Obtener el elemento span del puntaje
    puntajeElemento = document.getElementById('puntaje');

    puntajeElemento.textContent = puntaje;

    setTimeout(actualizarPuntaje, 1000);
}

// Detecta la pulsación de una tecla
// Función para cambiar el color del círculo vacío dependiendo de su posición en Y
function cambiarColorCirculo(circulo, circuloVacio, circuloVacioGrande, posYMin, posYMax, color) {
    // Obtener la posición en Y del círculo
    let rect = circulo.getBoundingClientRect();
    let posY = rect.top; // Posición superior del rectángulo

    // Verificar si está entre posYMin y posYMax píxeles
    if (posY >= posYMin && posY <= posYMax) {
        circuloVacio.style.backgroundColor = 'grey'; // Fondo gris oscuro

        // Asignar el color del borde correspondiente al color del círculo principal
        circuloVacioGrande.style.backgroundColor = color;

        puntaje++;
        actualizarPuntaje();
    } else {
        circuloVacio.style.backgroundColor = 'grey';
        circuloVacioGrande.style.backgroundColor = 'transparent'; // Hacer el círculo grande transparente cuando el círculo no está encima
    }
}

// Manejar el evento keydown para todos los círculos
document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        cambiarColorCirculo(circulo1, circulov1, circulovg1, 450, 560, "#f87d3f");
        teclaAPresionada = true;
    } else if (event.key === 's') {
        cambiarColorCirculo(circulo2, circulov2, circulovg2, 450, 560, "#f0d56c");
        teclaSPresionada = true;
    } else if (event.key === 'd') {
        cambiarColorCirculo(circulo3, circulov3, circulovg3, 450, 560, "#7ad7ff");
        teclaDPresionada = true;
    } else if (event.key === 'f') {
        cambiarColorCirculo(circulo4, circulov4, circulovg4, 450, 560, "#ff53a9");
        teclaFPresionada = true;
    }
});

// Detecta cuando se suelta una tecla
document.addEventListener('keyup', (event) => {
    if (event.key === 'a') {
        // Vuelve al color original al soltar la tecla "a"
        circulov1.style.backgroundColor = ''; // Deja que el navegador maneje el estilo por defecto
        circulovg1.style.backgroundColor = '';
        teclaAPresionada = false;
    } else if (event.key === 's') {
        // Vuelve al color original al soltar la tecla "s"
        circulov2.style.backgroundColor = '';
        circulovg2.style.backgroundColor = '';
        teclaSPresionada = false;
    } else if (event.key === 'd') {
        // Vuelve al color original al soltar la tecla "d"
        circulov3.style.backgroundColor = '';
        circulovg3.style.backgroundColor = '';
        teclaDPresionada = false;
    } else if (event.key === 'f') {
        // Vuelve al color original al soltar la tecla "f"
        circulov4.style.backgroundColor = '';
        circulovg4.style.backgroundColor = '';
        teclaFPresionada = false;
    }
});