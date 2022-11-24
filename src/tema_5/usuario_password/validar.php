<?php
if (isset($_POST['usuario']) && isset($_POST['password'])) {
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];
    if ($usuario == 'admin' && $password == '1234') {
        echo 'Bienvenido';
    } else {
        echo 'Usuario o contraseña incorrectos';
    }
} else {
    echo 'Usuario o contraseña incorrectos';
}
