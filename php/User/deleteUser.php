<?php
header("Content-Type: text/html;charset=utf-8");
include '../mysql.php';
$user_id=$_REQUEST['user_id'];
deleteUser($user_id);
