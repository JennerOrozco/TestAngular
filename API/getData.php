<?php  

header("Access-Control-Allow-Origin: *");
include_once('./connection.php');

$result = pg_query($conexion, "select * from  motivos_es_gt");
echo json_encode(pg_fetch_all($result));

?>