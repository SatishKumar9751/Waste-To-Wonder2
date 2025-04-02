<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    $name = $_POST['name'];
    $email = $_POST['email'];
    $conn = new mysqli('localhost','root', '','mydata' );
    if($conn->connect_error){
        die('Connection failed : '. $conn->connect_error);
    }
    else
    {
        $stmt = $conn->prepare("INSERT INTO registration2(name, email)
            values(?, ?)");
        $stmt->bind_param("ss", $name, $email);
        if($stmt->execute()){
            echo "You have registered successfully...";
        }else{
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
        $conn->close();
    }
?>