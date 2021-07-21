<?php

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$interesse = $_POST['interesse'];

$to      = 'lucaskm2008@gmail.com';
$subject = 'Interesse em agendamento - '.$nome;
$message = '<strong>Nome:</strong> '.$nome;
$message .= '<br><strong>E-mail:</strong> '.$email;
$message .= '<br><strong>Telefone / Whatsapp:</strong> '.$telefone;
$message .= '<br><strong>Interesse em:</strong> '.$interesse;
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
// Additional headers
$headers .= 'To: Contato <contato@centralcowork.com.br>' . "\r\n";
$headers .= 'From: Central Cowork <contato@centralcowork.com.br>' . "\r\n";
$headers .= 'Reply-to: '.$nome.' <'.$email.'>' . "\r\n";

if(mail($to, $subject, $message, $headers)) {
    echo "sucesso";
} else {
    echo "erro";
}


?>