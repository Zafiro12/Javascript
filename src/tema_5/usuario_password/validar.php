<?php
if (isset($_GET['usuario']) && isset($_GET['password'])) {
    $usuario = $_GET['usuario'];
    $password = $_GET['password'];
    if ($usuario == 'admin' && $password == '1234') {
        echo 'Bienvenido';
    } else {
        echo 'Usuario o contraseña incorrectos';
    }
} else {
    echo 'Usuario o contraseña incorrectos';
}
