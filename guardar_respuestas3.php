<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $servername = "localhost";
    $username = "pma";
    $password = "";
    $dbname = "pw";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    foreach ($_POST as $persona => $respuesta) {
        // Sentencia preparada para prevenir inyección SQL
        $sql = "INSERT INTO ejercicio3 (persona, respuesta) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);

        if (!$stmt) {
            die("Error en la preparación de la sentencia: " . $conn->error);
        }

        // Vincular parámetros
        $stmt->bind_param("ss", $persona, $respuesta);

        // Ejecutar la sentencia
        if ($stmt->execute()) {
            echo "Registro insertado correctamente para persona $persona<br>";
        } else {
            echo "Error al insertar el registro para persona $persona: " . $stmt->error . "<br>";
        }

        // Cerrar la sentencia para la siguiente iteración
        $stmt->close();
    }

    $conn->close();
    session_destroy();
    header("Location: ejercicio4.1.html");
    exit(); // Asegura que el script se detenga después de la redirección
}
?>
