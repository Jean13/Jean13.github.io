 <?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

// Instruct SQL to insert data
$sql = "INSERT INTO MyGuests (firstname, lastname, email)
	VALUES ('$_POST[name]', '$_POST[org_name]', '$_POST[email])";


if ($conn->query($sql) === TRUE) {
	echo "[*] Inquiry sent successfully";
}
else {
	echo "[!] Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();


?>
