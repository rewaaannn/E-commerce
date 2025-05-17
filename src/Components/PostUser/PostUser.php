<?php

// Allow requests from any origin (replace * with your domain in a production environment)
header("Access-Control-Allow-Origin: *");

// Allow the following methods (you can add more if needed, such as DELETE, PUT, etc.)
header("Access-Control-Allow-Methods: POST");

// Allow the following headers (you can customize this based on your needs)
header("Access-Control-Allow-Headers: Content-Type");

// Connect to database
$con = mysqli_connect("localhost", "root", "", "cleana");

// Prepare response array
$response = array();

if ($con) {
    // Check if request method is POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Fetch data from POST request
        $userName = $_POST['userName'];
        $userEmail = $_POST['userEmail'];
        $userPassword = $_POST['userPassword'];
        $userBirthday = $_POST['userBirthday'];
        $userCountry = $_POST['userCountry'];
        $userCity = $_POST['userCity'];
        $userAddress = $_POST['userAddress'];
        $points = $_POST['points'];
        //$verificationUserNumber = $_POST['verificationUserNumber'];

        // SQL query to insert data into users table
        $sql = "INSERT INTO users (userName, userEmail, userPassword, userBirthday, userCountry, userCity, userAddress, points) 
                VALUES ('$userName', '$userEmail', '$userPassword', '$userBirthday', '$userCountry', '$userCity', '$userAddress', '$points')";

        // Execute query and check for success
        if (mysqli_query($con, $sql)) {
            $response['status'] = 'success';
            $response['message'] = 'Data inserted successfully';
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Failed to insert data: ' . mysqli_error($con);
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Invalid request method';
    }
} else {
    $response['status'] = 'error';
    $response['message'] = 'Failed to connect to database';
}

// Set content type to JSON and send response
header("Content-Type: application/json");
echo json_encode($response, JSON_PRETTY_PRINT);

?>
