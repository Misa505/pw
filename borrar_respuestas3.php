<?php
$servername = "localhost";
$username = "pma";
$password = "";
$dbname = "pw";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Eliminar todos los registros de la tabla ejercicio3
$sqlDelete = "DELETE FROM ejercicio3";
if ($conn->query($sqlDelete) === TRUE) {
    echo "Registros eliminados correctamente";
} else {
    echo "Error al eliminar registros: " . $conn->error;
}

$conn->close();
header("Location: ejercicio3.html");
exit(); // Asegura que el script se detenga después de la redirección
?>

