<?php
$data = json_decode(file_get_contents('php://input'));
$message = '';
$name = $data->name;
$email = $data->email;
$tel = $data->tel;
$promo = $data->promo;
$comment = $data->comment;
$message = sprintf("<b>Имя</b>: %s
<b>Почта</b>: %s
<b>Телефон</b>: %s
<b>Промокод</b>: %s
<b>Комментарий</b>: %s", $name, $email, $tel, $promo, $comment);

$data = array(
    'chat_id' => $CHAT_ID,
    'parse_mode' => 'html',
    'text' => $message
);

define('TELEGRAM_TOKEN', '5716453718:AAEjkWlHfTzCq9liTM-yrdncG3iHlyT7MOc');
define('TELEGRAM_CHATID', '-1001812790757');

message_to_telegram($message);

function message_to_telegram($text)
{
    $ch = curl_init();
    curl_setopt_array(
        $ch,
        array(
            CURLOPT_URL => 'https://api.telegram.org/bot' . TELEGRAM_TOKEN . '/sendMessage',
            CURLOPT_POST => TRUE,
            CURLOPT_RETURNTRANSFER => TRUE,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_POSTFIELDS => array(
                'chat_id' => TELEGRAM_CHATID,
                'text' => $text,
                'parse_mode' => 'html'
            ),
        )
    );
    curl_exec($ch);
}
?>