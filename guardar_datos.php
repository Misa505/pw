<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $_SESSION['nombre'] = $_POST['nombre'];
    $_SESSION['apellidoPaterno'] = $_POST['apellidoPaterno'];
    $_SESSION['apellidoMaterno'] = $_POST['apellidoMaterno'];
    $_SESSION['edad'] = $_POST['edad'];
    $_SESSION['curso'] = $_POST['curso'];
    $_SESSION['fecha'] = $_POST['fecha'];

    $servername = "localhost";
    $username = "pma";
    $password = "";
    $dbname = "pw";

    // Crear conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Insertar datos en la base de datos
    $sql = "INSERT INTO portada (nombre, ape_pa, ape_mat, edad, curso, fecha)
            VALUES ('{$_SESSION['nombre']}', '{$_SESSION['apellidoPaterno']}', '{$_SESSION['apellidoMaterno']}',
                    '{$_SESSION['edad']}', '{$_SESSION['curso']}', '{$_SESSION['fecha']}')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro insertado correctamente";
    } else {
        echo "Error al insertar el registro: " . $conn->error;
    }

    // Cerrar conexión
    $conn->close();
    session_destroy();
    // Redirigir a la página de visualización
    header("Location: Ejercicio1.html");
}
?>
