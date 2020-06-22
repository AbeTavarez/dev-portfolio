<?php
//sets up cors
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
//sets content type of response
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
//checks for form submission
//check, collects, validate submitted data
$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_POST['email'])) {
    $errors[] = "Email is empty";
  } else {
    $email = $_POST["email"];
    //validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errors[] = "Invalid email";
    }
};
if (empty($_POST["message"])) {
  $erros[] = "Message is empty";
} else {
  $message = $_POST["message"];
};
//creates email
if (empty($errors)) {
  $date = date("j, F Y h:i A");

  $emailBody = "
  <html>
  <head>
    <title>$email is contacting you</title>
  </head>
  <body style=\"background-color:fafafa;\">
    <div style=\"padding:20px;\">
      Date: <span style=\"color:#888\">$date</span>
      <br>
      Email: <span style=\"color:#888\">$email</span>
      <br>
      Message: <div style=\"color:#888\">$message</div>
    </div>
  </body>
  </html>
  ";
//send email
$headers = 'From: Contact Form <contact@mydomain.com' . "\r\n" .
"Replay-To: $email" . "\r\n" .
"MIME-Version: 1.0\r\n" .
"Content-Type: text/html; charset=iso-8859-1\r\n";

$to = 'contact@example.com';
$subject = 'Contacting you';

  if (mail($to, $subject, $emailBody, $headers)) {
      $send = true;
    }
  }
}
?>

//report errors
<?php if (!empty($erros)) : ?>

  {
    "status": "fail",
    "error": <?php echo json_encode($errors) ?>
  }
<?php endif; ?>
//display sucess message to user
<?php if ($send === true) : ?>
  {
    "status": "success",
    "message": "Your data was successfully submitted"
  }
<?php endif; ?>