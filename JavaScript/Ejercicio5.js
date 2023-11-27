window.onload = function() {
    // Recuperar el estilo almacenado en localStorage y aplicarlo al body
    var estilo = localStorage.getItem('estilo');
    if (estilo) {
        document.body.className = estilo;
    }
};
function cambiarColor(elemento, fila) {
    // Obtener todos los elementos de la fila con la clase "Respuesta" dentro de la tabla con el id correspondiente
    var respuestas = document.querySelectorAll('#' + fila + ' .Respuesta');
  
    // Iterar sobre cada elemento y quitar la clase "seleccionado"
    respuestas.forEach(function (respuestaElemento) {
        respuestaElemento.classList.remove('seleccionado');
    });
  
    // Agregar la clase "seleccionado" al elemento clicado
    elemento.classList.add('seleccionado');
    console.log("Respuesta de la fila " + fila + ": " + elemento.innerText);
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