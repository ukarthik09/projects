<?php

include "dbconnection.php";

if ($_SERVER['REQUEST_METHOD']=='POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];


    $sql = $con->prepare("insert into users values(?, ?, ?, ?, ?)");
    $sql->bind_param('sssss',$id, $name, $email, $username, $password);
    if ($sql->execute()) {
        echo "";
        header("Location: login.html");
        exit();
    } else {
        echo "error" . $sql->error;
    }
    
}

?>