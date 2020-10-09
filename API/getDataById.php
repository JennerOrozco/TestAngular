<?php  

header("Access-Control-Allow-Origin: *");
include_once('./connection.php');
$data = json_decode(file_get_contents('php://input'), true);

$result = pg_query($conexion, "select * from  motivos_es_gt where motivo = " . $data["Id"]);
echo json_encode(pg_fetch_all($result));

?>