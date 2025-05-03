<?php

include "dbconnection.php";

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "DELETE FROM users WHERE id = $id";
    
    if ($con->query($sql) === TRUE) {
        header("Location: usermanagement.php");  
        exit();
    } else {
        echo "Error deleting record: " . $con->error;
    }
}

$con->close();
?>
