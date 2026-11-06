<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Tecnología educativa - David Medibú</title>
    <?php include 'inc/head.php'; ?>
    <link rel="stylesheet" href="estilos/edtech.css">
  </head>
  <body>
    <div class="franja"></div>

    <?php $seccion_actual = 'edtech'; include 'inc/menu.php'; ?>

    <?php
    // Proyectos de la sección. 'tecnologias' es una lista de etiquetas.
    $proyectos = [
      [
        'titulo'        => 'El pueblo que solo sabía contar hasta 9',
        'descripcion'   => 'Cuento-juego interactivo de mates, diseñado para hacer más comprensible el concepto de "decenas", cómo se forman los números a partir del 9 y cómo con solo diez dígitos podemos representar cualquier cantidad.',
        'tecnologias'   => ['Vibe Coding', 'React', 'Babel', 'Gemini', 'Nano banana'],
        'enlace'        => 'https://davidmedibu.com/el_pueblo_que_solo_sabia_contar_hasta_9/',
        'imagen'        => 'imagenes/edtech/el_pueblo.jpg',
        'alt'           => 'El panadero del pueblo, un muñeco de fieltro con bigote naranja, apila galletas en su tienda',
        'nueva_pestana' => true
      ]
    ];
    include 'inc/fichas.php';
    ?>

    <div id="sombra">
    </div>

    <section id="cualidades">
      <img src="imagenes/cualidades.svg" alt="cualidades">
    </section>

    <?php include 'inc/footer.php'; ?>

  </body>
</html>
