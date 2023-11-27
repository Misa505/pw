<?php
$servername = "localhost";
$username = "pma";
$password = "";
$dbname = "pw";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sqlDelete = "DELETE FROM portada";
if ($conn->query($sqlDelete) === TRUE) {
    echo "Registros eliminados correctamente";
} else {
    echo "Error al eliminar registros: " . $conn->error;
}

$conn->close();
header("Location: index.html");
exit(); // Asegura que el script se detenga después de la redirección
?>
