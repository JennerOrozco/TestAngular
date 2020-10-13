<?php  

header("Access-Control-Allow-Origin: *");
include_once('./connection.php');
$data = json_decode(file_get_contents('php://input'), true);


$result = pg_query($conexion, "select max(motivo) from  motivos_es_gt");
$valor = pg_fetch_all($result);
$numero = ($valor[0]["max"] + + 1);




$result = pg_query($conexion, "INSERT INTO motivos_es_gt values (" . $numero . ",'" . $data["des_motivo"] . "','" . $data["estado"] . "','" .  $data["tipo"] . "')");

//echo json_encode(pg_fetch_all($result));

?>