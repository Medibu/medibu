<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Tecnología educativa - David Medibú</title>
    <?php include 'inc/head.php'; ?>
  </head>
  <body>
    <div class="franja"></div>

    <?php $seccion_actual = 'edtech'; include 'inc/menu.php'; ?>

    <?php
    // Añade aquí los proyectos: [enlace, imagen de la miniatura, texto alternativo, true si se abre en pestaña nueva]
    $proyectos = [
      ['https://davidmedibu.com/el_pueblo_que_solo_sabia_contar_hasta_9/', 'imagenes/galeria/el_pueblo.jpg', 'El pueblo que solo sabía contar hasta 9', true]
    ];
    include 'inc/galeria.php';
    ?>

    <div id="sombra">
    </div>

    <section id="cualidades">
      <img src="imagenes/cualidades.svg" alt="cualidades">
    </section>

    <?php include 'inc/footer.php'; ?>

  </body>
</html>
