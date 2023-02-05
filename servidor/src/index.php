<?php
const DB_HOST = 'db';
const DB_NAME = 'bd_usuarios';
const USER = 'jose';
const PASS = 'josefa';

header('Access-Control-Allow-Origin: *');

try {
    $pdo = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, USER, PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec('SET NAMES "utf8"');
} catch (PDOException $e) {
    die(json_encode(['error' => $e->getMessage()]));
}

$_POST = json_decode(file_get_contents('php://input'), true);

if (!isset($_POST['nombre']) || !isset($_POST['clave'])) {
    die(json_encode(['error' => 'No se recibieron los datos']));
}
try {
    $sql = 'SELECT * FROM usuarios WHERE nombre = :nombre AND clave = :clave';
    $s = $pdo->prepare($sql);
    $s->bindValue(':nombre', $_POST['nombre']);
    $s->bindValue(':clave', $_POST['clave']);
    $s->execute();
} catch (PDOException $e) {
    die(json_encode(['error' => $e->getMessage(), 'cod' => 500]));
}

if ($s->rowCount() > 0) {
    $row = $s->fetch();
    $respuesta = [
        'nombre' => $row['nombre'],
        'tipo' => $row['tipo']
    ];
    echo json_encode($respuesta);
} else {
    echo json_encode(['error' => 'Usuario o clave incorrectos', 'cod' => 400]);
}
