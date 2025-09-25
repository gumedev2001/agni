<?php
header('Content-Type: application/json');

if(isset($_POST['nombre'], $_POST['correo'], $_POST['mensaje'])) {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    $to = "miemail@gmail.com";
    $subject = "Nuevo mensaje de tu sitio web";
    $body = "Nombre: $nombre\nCorreo: $correo\nMensaje:\n$mensaje";
    $headers = "From: no-reply@tusitio.com\r\n";
    $headers .= "Reply-To: $correo\r\n";

    if(mail($to, $subject, $body, $headers)){
        echo json_encode(['status' => 'success', 'message' => 'Mensaje enviado correctamente']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error al enviar el mensaje']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Faltan datos']);
}
?>
