<?php
// Inicia la sesión si no está iniciada
session_start();

// Establece la conexión a la base de datos (ajusta los datos según tu configuración)
$servername = "localhost";
$username = "pma";
$password = "";
$dbname = "pw";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Sentencia SQL para borrar los datos (ajusta según tu estructura de la base de datos)
$sql = "DELETE FROM ejercicio41";

if ($conn->query($sql) === TRUE) {
    echo "Datos borrados correctamente";
} else {
    echo "Error al borrar datos: " . $conn->error;
}

// Cierra la conexión
$conn->close();
header("Location: ejercicio4.1.html");
exit();
?>
