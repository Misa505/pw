window.onload = function() {
    // Recuperar el estilo almacenado en localStorage y aplicarlo al body
    var estilo = localStorage.getItem('estilo');
    if (estilo) {
        document.body.className = estilo;
    }
};

function enviarRespuestas() {
    try {
        // Inicializar objeto para almacenar respuestas
        var respuestas = {};

        // Obtener las respuestas de los elementos select
        for (var i = 1; i <= 6; i++) {
            var selectElement = document.getElementById('respuesta' + i);

            // Verificar si el elemento existe antes de intentar acceder a sus propiedades
            if (selectElement) {
                var selectedOption = selectElement.options[selectElement.selectedIndex].text;
                respuestas['persona' + i] = selectedOption;
            } else {
                console.error('Elemento select no encontrado:', 'respuesta' + i);
            }
        }

        // Convertir el objeto de respuestas a una cadena JSON
        var respuestasJSON = JSON.stringify(respuestas);

        // Enviar las respuestas al servidor usando AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'guardar_respuestas3.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

        // Evento para capturar la respuesta del servidor
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Muestra la respuesta en la consola del navegador
                console.log(xhr.responseText);
            }
        };

        xhr.send(respuestasJSON);
    } catch (error) {
        console.error('Error al enviar respuestas:', error);
    }
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