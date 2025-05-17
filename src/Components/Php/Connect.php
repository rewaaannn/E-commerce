<?php
// Database connection details (replace with your actual credentials)
// $servername = "localhost";
// $username = "your_username";
// $password = "your_password";
// $dbname = "your_database";

// Create connection
$conn = mysqli_connect('localhost', 'root', '', 'cleana') or die('connection failed');

$sql = "SELECT * FROM users";

$result = $conn->query($sql);

if($result->num_rows > 0) {
    $data = array();
    while ($row = $result->fetch_assoc()) { 
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo "0 results";
}


$conn->close();

// $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// // Function to retrieve all users (replace with your specific query)
// function getAllUsers() {
//   $sql = "SELECT * FROM users";
//   $stmt = $conn->prepare($sql);
//   $stmt->execute();
//   $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
//   return $result;
// }

// // Call the function and get data
// $users = getAllUsers();

// // Return data as JSON (adjust based on your API design)
// header('Content-Type: application/json');
// echo json_encode($users);

// $conn = null;
?>