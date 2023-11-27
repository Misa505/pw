<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Almacena las respuestas en variables de sesión
    foreach ($data as $pregunta => $respuesta) {
        $_SESSION[$pregunta] = $respuesta;
    }

    // Almacena las respuestas en la base de datos
    $servername = "localhost";
    $username = "pma";
    $password = "";
    $dbname = "pw";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    foreach ($data as $pregunta => $respuesta) {
        // Extraer el número de pregunta con expresiones regulares
        preg_match('/(\d+)$/', $pregunta, $matches);
        $numeroPregunta = $matches[1];
    
        // Asegúrate de que las columnas y la tabla coincidan con tu base de datos
        $sql = "INSERT INTO ejercicio1 (pregunta, respuesta) VALUES ('pregunta$numeroPregunta', '$respuesta')";
        
        // Imprime la consulta para depuración
        echo "Consulta SQL: $sql<br>";
    
        if ($conn->query($sql) === TRUE) {
            echo "Registro insertado correctamente";
        } else {
            echo "Error al insertar el registro: " . $conn->error;
        }
    }
    
    

    $conn->close();
    session_destroy();
}
?>
