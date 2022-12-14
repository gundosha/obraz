<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    $number = $_POST['number']
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->HOST ='smtp@mail.ru'
    $mail->setLanguage('ru', 'phpmailer/languag/');
    $mail->IsHTML;(true)
    $mail->SMTPAuth = true;
    $mail->Password ='gopnik1234505'
    $mail->Username='ivanov.ivanovish99@mail.ru'
    $mail->SMTPsecure = 'ssl'
    $mail->Port = 465




    $mail->setForm('ivanov.ivanovish99@mail.ru');
    $mail->addAdress('zamilov_2016@mail.ru');
    $mail->Subject = 'Номер клиента';



    $mail->Body = $number

    if(!$mail->send()) {
        echo 'Error'
    } else {
       echo 'Кайф'
    }


    header();
?>
