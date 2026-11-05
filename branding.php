<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Branding animado - David Medibú</title>
    <?php include 'inc/head.php'; ?>
  </head>
  <body>
    <header>
      <!--<img src="imagenes/cabecera.svg" alt="cabecera">-->
      <video autoplay poster="imagenes/cabecera.svg" preload="auto" loop muted playsinline>
        <source src="imagenes/vídeo-logos-640x360.mp4"/>
        <p>Su navegador no admite videos HTML5</p>
      </video>
    </header>

    <div class="franja"></div>
    <?php $seccion_actual = 'branding'; include 'inc/menu.php'; ?>

    <?php
    $proyectos = [
      ['proy01.php', 'imagenes/galeria/croupi.svg', 'Croupi'],
      ['proy02.php', 'imagenes/galeria/loh.gif', 'Legends of Hemato'],
      ['proy03.php', 'imagenes/galeria/medibu.svg', 'Medibú'],
      ['proy04.php', 'imagenes/galeria/lamorsa.svg', 'lamorsa'],
      ['proy05.php', 'imagenes/galeria/komsenso.svg', 'Komsenso'],
      ['proy06.php', 'imagenes/galeria/cowandking.svg', 'Cowandking'],
      ['proy07.php', 'imagenes/galeria/corriente_creativa.svg', 'Corriente Creativa'],
      ['proy08.php', 'imagenes/galeria/bic.gif', 'Bic'],
      ['proy09.php', 'imagenes/galeria/om.svg', 'Om'],
      ['proy10.php', 'imagenes/galeria/vanacasa.gif', 'Vanacasa'],
      ['proy11.php', 'imagenes/galeria/sharon_bates.svg', 'Sharon Bates'],
      ['proy12.php', 'imagenes/galeria/alaficyl.gif', 'Alaficyl']
    ];
    include 'inc/galeria.php';
    ?>
    <section id="servicios">
      <img src="imagenes/servicios.gif" alt="servicios">
    </section>

    
    <div id="muchosmas">
      <a href="https://www.instagram.com/davidmedibu">
          <img src="imagenes/icopie-inst.svg" alt="Instagram">
          <span>muchos más trabajos en mi Instagram</span>
      </a>
    </div>

    <div id="cocodroloescondido">
      <img src="imagenes/cocodroloescondido.svg" alt="Cocodrolo escondido">
    </div>

    <div id="sombra">
    </div>

    <section id="cualidades">
      <img src="imagenes/cualidades.svg" alt="cualidades">
    </section>



    <?php include 'inc/footer.php'; ?>

  </body>
</html>
