<?php
$data = [
    'status' => ''
];

$name = $_POST['nome'];
$email = $_POST['email'];
$subject_matter = $_POST['assunto'];
$message = $_POST['mensagem'];

$email_sender = "EMAIL DA JT";  //Conta do domínio

$email_recipient = "PODE SER QUALQUER E-MAIL QUE VAI RECEBER A MENSAGEM";
$email_reply = $email;
$email_subject_matter = "ASSUNTO DA MENSAGEM";

$email_content = "Nome: $name \n";
$email_content .= "E-mail: $name \n";
$email_content .= "Assunto: $name \n";
$email_content .= "Mensagem: $name \n";