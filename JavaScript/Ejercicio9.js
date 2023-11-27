window.onload = function() {
    // Recuperar el estilo almacenado en localStorage y aplicarlo al body
    var estilo = localStorage.getItem('estilo');
    if (estilo) {
        document.body.className = estilo;
    }
};
document.addEventListener('DOMContentLoaded', function () {
    var order = [0, 4, 2, 5, 3, 1];
    var tables = document.querySelectorAll('table');

    function pintarCasilla(tableIndex, cellIndex) {
        // Pinta la casilla en el índice dado de la tabla específica
        tables[tableIndex].rows[Math.floor(cellIndex / 3)].cells[cellIndex % 3].classList.add('active');
    }

    function animarActividad() {
        // Itera sobre el orden dado y pinta las casillas una por una con cierto retraso
        var i = 0;
        var interval = setInterval(function () {
            pintarCasilla(0, order[i]);
            i++;
            if (i === order.length) {
                clearInterval(interval);
            }
        }, 1000); // Puedes ajustar el valor de 1000 para cambiar la velocidad de la animación
    }

    // Llama a la función para iniciar la animación
    animarActividad();
});

document.addEventListener('DOMContentLoaded', function () {
    function cambiarColorBoton(event) {
        var target = event.target;

        // Verificar si el botón no tiene la clase "Ejemplo"
        if (!target.classList.contains('Ejemplo') && target.tagName === 'BUTTON') {
            // Cambiar el color de fondo del botón al hacer clic
            target.style.backgroundColor = 'red'; // Puedes cambiar 'red' por el color que prefieras
        }
    }

    // Obtener todas las tablas con botones
    var tablas = document.querySelectorAll('table');

    // Agregar un event listener a cada botón dentro de las tablas
    tablas.forEach(function (tabla) {
        tabla.addEventListener('click', cambiarColorBoton);
    });
});

class ReproductorAudio {
    constructor(audioId) {
        this.audio = document.getElementById(audioId);
    }
  
    reproducirPausar() {
        // Pausar todos los demás audios antes de reproducir este
        detenerTodosLosAudios();
  
        if (this.audio.paused) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }
  }

function reproducirPausar(id) {
    const reproductor = new ReproductorAudio(id);
    reproductor.reproducirPausar();
  }
  
  function detenerTodosLosAudios() {
    // Obtener todos los elementos de audio en la página
    const elementosDeAudio = document.querySelectorAll('audio');
  
    // Pausar todos los audios
    elementosDeAudio.forEach(audio => {
        if (!audio.paused) {
            audio.pause();
        }
    });
  }