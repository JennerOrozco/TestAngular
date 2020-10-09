<?php  

header("Access-Control-Allow-Origin: *");

 $host = "localhost";

$puerto = "39041";

$usuario = "root";

$contrasena = "root";

$DB = "test";

$stringCon = "host=" . $host . " dbname=" . $DB . " user=" . $usuario . " password=" .$contrasena;

$conexion = pg_connect($stringCon) or die('Could not connect: ' . pg_last_error());;
$result = pg_query($conexion, "select * from  motivos_es_gt");
echo json_encode(pg_fetch_all($result));





?>