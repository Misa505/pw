document.querySelector("#pojo-a11y-toolbar > div.pojo-a11y-toolbar-overlay > div > ul > li:nth-child(2) > a > span.pojo-a11y-toolbar-text")

function aplicarModoAccesibilidad() {
    var modoAccesibilidad = document.getElementById("modoAccesibilidad").value;
    document.body.className = modoAccesibilidad;
    localStorage.setItem('estilo', modoAccesibilidad)
    var Formulario = document.getElementById("miFormulario");

    // Eliminar las clases existentes para restaurar el aspecto normal
    document.body.classList.remove("escala-de-grises", "contraste-negativo", "fondo-claro", "alto-contraste");
//------------ESCALA DE GRISES -----------------------------------------------------------------------
    if (modoAccesibilidad == "escala-de-grises") {
        document.body.classList.add("escala-de-grises");
        Formulario.classList.add("escala-de-grises");
    } else {
        // Si el modo de accesibilidad no es "escalaDeGrises", remueve la clase
        document.body.classList.remove("escala-de-grises");
        Formulario.classList.remove("escala-de-grises");
    } 
//------------CONTRASTE NEGATIVO -----------------------------------------------------------------------
    if (modoAccesibilidad == "contraste-negativo") {
        document.body.classList.add("contraste-negativo");
        Formulario.classList.add("contraste-negativo");
    }else {
        document.body.classList.remove("contraste-negativo");
        Formulario.classList.remove("contraste-negativo");
    }
//------------FONDO CLARO -----------------------------------------------------------------------
if (modoAccesibilidad == "fondo-claro") {
    document.body.classList.add("fondo-claro");
    Formulario.classList.add("fondo-claro");
}else {
    document.body.classList.remove("fondo-claro");
    Formulario.classList.remove("fondo-claro");
}
//------------ALTO CONTRASTE -----------------------------------------------------------------------
if (modoAccesibilidad == "alto-contraste") {
    document.body.classList.add("alto-contraste");
    Formulario.classList.add("alto-contraste");
}else {
    document.body.classList.remove("alto-contraste");
    Formulario.classList.remove("alto-contraste");
}

    console.log("Clases aplicadas:", document.body.classList);
}


//Titulo cambia colores
// var Titulo = document.getElementById("Titulo");
// var colores = ["red", "blue", "green"];
// var indiceColor = 0;
// function cambiarColor() {
//     Titulo.style.color = colores[indiceColor];
//     indiceColor = (indiceColor + 1) % colores.length;
// }

// // Configura un temporizador para llamar a la función cada 1000 milisegundos (1 segundo)
// setInterval(cambiarColor, 1000);









//Otro modoaccesibilidad
/*function aplicarModoAccesibilidad() {
    var modoAccesibilidad = document.getElementById("mySelection").value;
    if (modoAccesibilidad == "escalaDeGrises") {
        document.body.classList.add("escala-de-grises");
    } else if (modoAccesibilidad == "altoContraste") {
        document.body.classList.add("alto-contraste");
    }

    console.log("Clases aplicadas:", document.body.classList);
}
*/


