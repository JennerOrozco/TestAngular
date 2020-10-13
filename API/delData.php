<?php  

header("Access-Control-Allow-Origin: *");
include_once('./connection.php');
$data = json_decode(file_get_contents('php://input'), true);
$stringQuery = "DELETE FROM   motivos_es_gt where motivo = " . $data["Id"]; 

var_dump($stringQuery);
$result = pg_query($conexion, $stringQuery);

//echo json_encode(pg_fetch_all($result));

?>