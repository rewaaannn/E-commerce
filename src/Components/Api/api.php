<?php
// Allow requests from any origin (for development, you can specify the exact origin)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// If this is a preflight request, respond with 204 No Content
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Connect to the database
$con = mysqli_connect("localhost", "root", "", "cleana");

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Default response
$response = array('status' => 'error', 'message' => 'Login failed. Please try again.');

// If it's a POST request, handle login
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the POST data
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate received data
    if (!isset($data['userEmail']) || !isset($data['userPassword'])) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
        exit;
    }

    // Sanitize input to prevent SQL injection (not needed if using prepared statements)
    $userEmail = mysqli_real_escape_string($con, $data['userEmail']);
    $userPassword = mysqli_real_escape_string($con, $data['userPassword']);

    // Query to check if user exists with provided credentials
    $sql = "SELECT * FROM users WHERE userEmail='$userEmail' AND userPassword='$userPassword'";
    $result = mysqli_query($con, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        // User found, login successful
        $user = mysqli_fetch_assoc($result);
        $response = array(
            'status' => 'success',
            'user' => array(
                'id' => $user['id'],
                'userName' => $user['userName'],
                'userEmail' => $user['userEmail'],
                'userBirthday' => $user['userBirthday'],
                'userCountry' => $user['userCountry'],
                'userCity' => $user['userCity'],
                'userAddress' => $user['userAddress'],
                'points' => $user['points'],
                // Add more fields as needed
            )
        );
    } else {
        // User not found or invalid credentials
        $response = array('status' => 'error', 'message' => 'Invalid credentials');
    }
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($response);

// Close connection
mysqli_close($con);
?>
