window.onload = function() {
    // Recuperar el estilo almacenado en localStorage y aplicarlo al body
    var estilo = localStorage.getItem('estilo');
    if (estilo) {
        document.body.className = estilo;
    }
};
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