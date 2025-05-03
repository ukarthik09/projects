<!doctype html>
<html lang="en">
<head>
    <title>Update User</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.3.2 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
</head>
<body>
    <header>
        <!-- place navbar here -->
    </header>
    <main>
        <div class="table-responsive m-5 p-4 ">
            <form method="post" action="">
                <table class="table table-info">
                    <tbody>
                        <tr>
                            <td class="fw-bold">Name</td>
                            <td><input class="form-control" type="text" name="name" placeholder="Enter your name" required></td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Email</td>
                            <td><input class="form-control" type="email" name="email" placeholder="Enter your email" required></td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Username</td>
                            <td><input class="form-control" type="text" name="username" placeholder="Enter your username" required></td>
                        </tr>
                        <tr>
                            <td class="fw-bold">ID</td>
                            <td><input class="form-control" type="number" name="id" placeholder="Enter your ID" required></td>
                        </tr>
                        <tr>
                            <td><button type="submit" class="btn btn-warning px-3">Submit</button></td>
                            <td><button type="reset" class="btn btn-warning px-3">Reset</button></td>
                        </tr>
                    </tbody>    
                </table>
            </form>
        </div>
    </main>

    <?php

    include "dbconnection.php";

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $id = $_POST['id'];
        $name = $_POST['name']; 
        $email = $_POST['email'];
        $username = $_POST['username'];

        $sql = $con->prepare("UPDATE users SET name = ?, email = ?, username = ? WHERE id = ?");
        $sql->bind_param("ssss", $name, $email, $username, $id);

        if ($sql->execute()) {
            header("Location: usermanagement.php");
        } else {
            echo "Error updating user: " . $sql->error;
        }

        $sql->close();
    }

    $con->close();
    ?>
    
    <footer>
        <!-- place footer here -->
    </footer>
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
</body>
</html>
