window.onload = function() {
  // Recuperar el estilo almacenado en localStorage y aplicarlo al body
  var estilo = localStorage.getItem('estilo');
  if (estilo) {
      document.body.className = estilo;
    }
};

// Objeto para almacenar las respuestas

function enviarRespuestas() {
  // Convierte el objeto de respuestas a una cadena JSON
  var respuestasJSON = JSON.stringify(respuestas);

  // Envía las respuestas al servidor usando AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'guardar_respuestas.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  // Evento para capturar la respuesta del servidor
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          // Muestra la respuesta en la consola del navegador
          console.log(xhr.responseText);
      }
  };

  xhr.send(respuestasJSON);
}

function cambiarColor(elemento, fila, respuesta) {
  // Obtener todos los elementos de la fila con la clase "Respuesta"
  var respuestas = document.querySelectorAll('.tablaCentral tr:nth-child(' + fila + ') .Respuesta');

  // Iterar sobre cada elemento y quitar la clase "seleccionado"
  respuestas.forEach(function (respuestaElemento) {
    respuestaElemento.classList.remove('seleccionado');
  });

  // Agregar la clase "seleccionado" al elemento clicado
  elemento.classList.add('seleccionado');
  console.log("Respuesta de la fila " + fila + ": " + respuesta);
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