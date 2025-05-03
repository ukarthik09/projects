<?php

include "dbconnection.php";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    if (!empty($user) && !empty($pass)) {
        $sql = $con->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
        $sql->bind_param("ss", $user, $pass);
        $sql->execute();
        $result = $sql->get_result();

        if ($result->num_rows > 0) {
            header("Location: home.php");
            exit;
        } else {
            echo "Invalid username or password";
        }

        $sql->close();
    } else {
        echo "All fields are required";
    }
}

$con->close();
?>
