<?php  
$host = "127.0.0.1";

$puerto = "39041";

$usuario = "root";

$contrasena = "root";

$DB = "test";

$stringCon = "host=" . $host . " dbname=" . $DB . " user=" . $usuario . " password=" .$contrasena;

$conexion = pg_connect($stringCon) or die('Could not connect: ' . pg_last_error());;


?>