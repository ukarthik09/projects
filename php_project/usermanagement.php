<?php

include "dbconnection.php";

$sql = "SELECT id, name, email, username FROM users";
$result = $con->query($sql);
?>

<!doctype html>
<html lang="en">
    <head>
        <title>User Management</title>
        
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <!-- Bootstrap CSS v5.2.1 -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />

        <style>

body {
    background: linear-gradient(135deg,rgb(255, 242, 59),rgb(255, 142, 142));
}
        
            .navbar {
                background-color:rgb(0, 0, 0); 
                padding: 1rem; 
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
            }

            .navbar-nav .nav-item {
                margin-right: 20px; 
            }

            .navbar-nav .nav-link {
                color:rgb(255, 255, 255); 
                font-weight: bold; 
                padding: 10px 15px; 
                border-radius: 5px; 
                transition: background-color 0.3s ease; 
            }

            .navbar-nav .nav-link:hover {
                background-color:rgb(219, 205, 0); 
                color: #fff; 
            }

            .navbar-nav .nav-link.active {
                background-color: rgb(219, 205, 0); 
            }

            .navbar-nav .nav-item:last-child {
                margin-right: 0; 
            }

            #t1{
                border-radius: 20px;
            }


            
        </style>
    </head>

    <body>
        <header>
            <nav class="navbar navbar-expand-sm navbar-dark">
                <div class="container">
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        
                            <li class="nav-item">
                                <a class="nav-link" href="productmanagement.php">Product Management</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="usermanagement.php">User Management</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
        <div class="container mt-5">
        <h2 class="mb-4 text-center">User Management</h2>
        <table id="t1" class="table table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <?php if ($result->num_rows > 0): ?>
                    <?php while($row = $result->fetch_assoc()): ?>
                        <tr>
                            <td><?php echo $row['id']; ?></td>
                            <td><?php echo $row['name']; ?></td>
                            <td><?php echo $row['email']; ?></td>
                            <td><?php echo $row['username']; ?></td>
                            <td>
                                <a href="updateuser.php?id=<?php echo $row['id']; ?>" class="btn btn-warning btn-sm">Update</a>
                                <a href="deleteuser.php?id=<?php echo $row['id']; ?>" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this user?');">Delete</a>
                            </td> 
                        </tr>
                    <?php endwhile; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="5" class="text-center">No users found</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>

    
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
        <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
    </body>
</html>

