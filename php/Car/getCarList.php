<?php
header("Content-Type: text/html;charset=utf-8");
include '../mysql.php';
$start=$_REQUEST['start'];
$limit=$_REQUEST['limit'];
getCarList($start, $limit);
