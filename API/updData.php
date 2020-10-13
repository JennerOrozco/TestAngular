<?php  

header("Access-Control-Allow-Origin: *");
include_once('./connection.php');
$data = json_decode(file_get_contents('php://input'), true);


$stringQuery = "UPDATE motivos_es_gt SET des_motivo = '" . $data["des_motivo"] . "', estado = '" . $data["estado"] . "',  tipo = '" .  $data["tipo"] . "' where motivo = " . $data["motivo"];
var_dump($stringQuery);
$result = pg_query($conexion,$stringQuery );

//echo json_encode(pg_fetch_all($result));

?>