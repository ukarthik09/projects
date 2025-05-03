<?php

$sername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$con = mysqli_connect($sername, $username, $password, $dbname );
if (!$con) {
    echo "connection failed" . $mysqli_connect_error();
}

?>