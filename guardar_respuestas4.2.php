<?php
// Inicia la sesión si no está iniciada
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Establece la conexión a la base de datos (ajusta los datos según tu configuración)
    $servername = "localhost";
    $username = "pma";
    $password = "";
    $dbname = "pw";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Obtén la respuesta del formulario
    $respuesta = $_POST['respuesta'];

    // Sentencia preparada para prevenir inyección SQL
    $sql = "INSERT INTO ejercicio42 (respuesta) VALUES (?)";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("Error en la preparación de la sentencia: " . $conn->error);
    }

    // Vincula el parámetro
    $stmt->bind_param("s", $respuesta);

    // Ejecuta la sentencia
    if ($stmt->execute()) {
        echo "Respuesta insertada correctamente";
    } else {
        echo "Error al insertar la respuesta: " . $stmt->error;
    }

    // Cierra la sentencia y la conexión
    $stmt->close();
    $conn->close();
    session_destroy();
    header("Location: Ejercicio4.3.html");
}
?>
