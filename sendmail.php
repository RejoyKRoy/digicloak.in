<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST["first_name"];
    $email = $_POST["email"];

    $subject = "Welcome to Our Website, $first_name!";
    $message = "Hello $first_name,\n\nThank you for registering! We’re excited to have you onboard.";
    $headers = "From: noreply@yourdomain.com";

    if (mail($email, $subject, $message, $headers)) {
        echo "Registration successful! Check your email.";
    } else {
        echo "Error sending email.";
    }
}
?>
