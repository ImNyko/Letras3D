<?php
// Ruta del archivo JSON donde se almacenarán los datos
$archivo = 'datos.json';

// Comprobar si los datos han sido enviados
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recoger los datos del formulario
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['message'];

    // Crear un arreglo con los datos
    $nuevos_datos = array(
        'nombre' => $nombre,
        'email' => $email,
        'mensaje' => $mensaje,
        'fecha' => date('Y-m-d H:i:s')
    );

    // Leer el archivo JSON si existe, de lo contrario crear un arreglo vacío
    if (file_exists($archivo)) {
        $contenido_json = file_get_contents($archivo);
        $datos_existentes = json_decode($contenido_json, true);
    } else {
        $datos_existentes = array();
    }

    // Agregar los nuevos datos al arreglo existente
    $datos_existentes[] = $nuevos_datos;

    // Guardar los datos actualizados en el archivo JSON
    if (file_put_contents($archivo, json_encode($datos_existentes, JSON_PRETTY_PRINT))) {
        echo "Mensaje enviado correctamente. Nos contactaremos en breve.";
    } else {
        echo "Error. Mensaje no enviado.";
    }
} else {
    echo "No se enviaron datos.";
}
?>
