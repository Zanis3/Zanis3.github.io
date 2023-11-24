<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["user-name"];
    $email = $_POST["user-email"];
    $number = $_POST["user-phone"];
    $subject = $_POST["user-subject"];
    $message_content = $_POST["user-message"];

    $to = "euvertzionpagad@email.com";
    $headers = "From: $email";

    $message = "Name of Sender: $name\n";
    $message .= "Phone Number: $number\n\n";
    $message .= "Message:\n$message_content";

    mail($to, $subject, $message, $headers);
}
?>
