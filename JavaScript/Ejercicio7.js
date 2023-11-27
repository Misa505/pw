window.onload = function() {
    // Recuperar el estilo almacenado en localStorage y aplicarlo al body
    var estilo = localStorage.getItem('estilo');
    if (estilo) {
        document.body.className = estilo;
    }
};
function cambiarColor(elemento) {
    // Obtener todos los botones con la clase "Respuesta" en la misma fila que el botón clicado
    var botones = elemento.parentNode.parentNode.querySelectorAll('.Respuesta');
  
    // Iterar sobre cada botón y quitar la clase "seleccionado"
    botones.forEach(function (boton) {
        boton.classList.remove('seleccionado');
    });
  
    // Agregar la clase "seleccionado" al botón clicado
    elemento.classList.add('seleccionado');
    console.log("Respuesta de la fila: " + elemento.parentNode.parentNode.firstElementChild.textContent);
}

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