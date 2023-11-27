window.onload = function() {
    // Recuperar el estilo almacenado en localStorage y aplicarlo al body
    var estilo = localStorage.getItem('estilo');
    if (estilo) {
        document.body.className = estilo;
    }
};

// Agrega aquí cualquier función adicional que necesites para el ejercicio

function enviarRespuesta(formularioId) {
    try {
        var formulario = document.getElementById(formularioId);

        // Obtén la respuesta del formulario
        var respuesta = formulario.elements['respuestaPregunta1'].value;

        // Puedes realizar validaciones adicionales aquí si es necesario

        // Enviar la respuesta al servidor usando AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'guardar_respuestas4.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // Evento para capturar la respuesta del servidor
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Muestra la respuesta en la consola del navegador
                console.log(xhr.responseText);
            }
            window.location.href = 'Ejercicio4.2.html';
        };

        // Convertir la respuesta a un formato adecuado para enviar
        var datos = 'respuesta=' + encodeURIComponent(respuesta);

        xhr.send(datos);
    } catch (error) {
        console.error('Error al enviar respuesta:', error);
    }
}

function enviarRespuesta2(formularioId) {
    try {
        var formulario = document.getElementById(formularioId);

        // Obtén la respuesta del formulario
        var respuesta = formulario.elements['respuestaPregunta2'].value;

        // Puedes realizar validaciones adicionales aquí si es necesario

        // Enviar la respuesta al servidor usando AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'guardar_respuestas4.2.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // Evento para capturar la respuesta del servidor
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Muestra la respuesta en la consola del navegador
                console.log(xhr.responseText);
            }
            window.location.href = 'Ejercicio4.3.html';
        };

        // Convertir la respuesta a un formato adecuado para enviar
        var datos = 'respuesta=' + encodeURIComponent(respuesta);

        xhr.send(datos);
    } catch (error) {
        console.error('Error al enviar respuesta:', error);
    }
}

function enviarRespuesta3(formularioId) {
    try {
        var formulario = document.getElementById(formularioId);

        // Obtén la respuesta del formulario
        var respuesta = formulario.elements['respuestaPregunta3'].value;

        // Puedes realizar validaciones adicionales aquí si es necesario

        // Enviar la respuesta al servidor usando AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'guardar_respuestas4.3.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // Evento para capturar la respuesta del servidor
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Muestra la respuesta en la consola del navegador
                console.log(xhr.responseText);
            }
            window.location.href = 'Ejercicio4.4.html';
        };

        // Convertir la respuesta a un formato adecuado para enviar
        var datos = 'respuesta=' + encodeURIComponent(respuesta);

        xhr.send(datos);
    } catch (error) {
        console.error('Error al enviar respuesta:', error);
    }
}

function borrarDatosYRedirigir() {
    try {
        // Realiza una solicitud al servidor para borrar los datos
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'borrar_respuestas3.php', true);

        // Evento para capturar la respuesta del servidor
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Muestra la respuesta en la consola del navegador
                console.log(xhr.responseText);

                // Redirige a la página anterior después de borrar los datos
                window.location.href = 'Ejercicio3.html';
            }
        };

        xhr.send();
    } catch (error) {
        console.error('Error al borrar datos:', error);
    }
}
function borrarDatosYRedirigir2() {
    try {
        // Realiza una solicitud al servidor para borrar los datos
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'borrar_respuestas4.php', true);

        // Evento para capturar la respuesta del servidor
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Muestra la respuesta en la consola del navegador
                console.log(xhr.responseText);

                // Redirige a la página anterior después de borrar los datos
                window.location.href = 'Ejercicio4.1.html';
            }
        };

        xhr.send();
    } catch (error) {
        console.error('Error al borrar datos:', error);
    }
}

function borrarDatosYRedirigir3() {
    try {
        // Realiza una solicitud al servidor para borrar los datos
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'borrar_respuestas4.2.php', true);

        // Evento para capturar la respuesta del servidor
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Muestra la respuesta en la consola del navegador
                console.log(xhr.responseText);

                // Redirige a la página anterior después de borrar los datos
                window.location.href = 'Ejercicio4.2.html';
            }
        };

        xhr.send();
    } catch (error) {
        console.error('Error al borrar datos:', error);
    }
}


// Aquí puedes agregar más funciones si es necesario

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