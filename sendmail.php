<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/languag/');
    $mail->IsHTML(true);

    $mail->setForm('infoobraz@mail.ru', 'Клиент');
    $mail->addAdress('zamilov_2016@mail.ru');
    $mail->Subject = 'Номер клиента';

    $body = '<p>'.$_POST['number']'</p>'

    $mail->Body = $body

    if(!$mail->send()) {
        $message = 'ошибка';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' = $message];

    header('Content-type: application/json');
    echo json_encode($response)
?>
