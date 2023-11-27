<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <link rel="stylesheet" type="text/css" href="diseño.css">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mostrar Datos</title>
</head>
<body>
    <h1>Bateria Psicopedagogica</h1>

    <?php if (isset($_SESSION['nombre'])): ?>
    <p>Nombre: <?php echo $_SESSION['nombre']; ?></p>
    <p>Apellido Paterno: <?php echo $_SESSION['apellidoPaterno']; ?></p>
    <p>Apellido Materno: <?php echo $_SESSION['apellidoMaterno']; ?></p>
    <p>Edad: <?php echo $_SESSION['edad']; ?></p>
    <p>Curso: <?php echo $_SESSION['curso']; ?></p>
    <p>Fecha de Aplicación: <?php echo $_SESSION['fecha']; ?></p>
    <?php else: ?>
    <p>No se han ingresado datos.</p>
    
    <?php endif; ?>

    <footer>
        <p>&copy; 2023 Luciano Contreras Lucas Molina y Misael Meza. Todos los derechos reservados.</p>
    </footer>
</body>
</html>
