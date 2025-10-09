<!DOCTYPE html>
<html lang="es">
  <head>
    <title>David Medibu - La morsa</title>
    <?php include 'inc/head.php'; ?>
    <link rel="stylesheet" href="estilos/proyectos.css">

    <!-- Animación iceberg-->
    <script src="http://code.createjs.com/easeljs-0.6.0.min.js"></script>
    <script src="http://code.createjs.com/tweenjs-0.4.0.min.js"></script>
    <script src="http://code.createjs.com/movieclip-0.6.0.min.js"></script>
    <script src="imagenes/proyectos/lamorsa/lamorsa.js"></script>

    <script>
    var canvas, stage, exportRoot;

    function init() {
      canvas = document.getElementById("canvas");
      exportRoot = new lib.lamorsav06();

      stage = new createjs.Stage(canvas);
      stage.addChild(exportRoot);
      stage.update();

      createjs.Ticker.setFPS(25);
      createjs.Ticker.addEventListener("tick", stage);
    }
    </script>
    <!---->

  </head>
  <!-- onload para Animación iceberg-->
  <body onload="init();">
    <header>
      <?php include 'inc/bu.php'; ?>
    </header>
    <section id="contenido">
      <?php include 'inc/volver.php'; ?>                     
      <img src="imagenes/proyectos/lamorsa/animacion.gif" alt="Animación" class="marco">
      <p>Animación</p>
                          
      <img src="imagenes/proyectos/lamorsa/logo.png" alt="Logotipo">
      <p>Logotipo</p>
                          
      <canvas id="canvas" width="700" height="620" style="background-color:#f3f3f3"></canvas>
      <p>Animación iceberg</p>
                          
      <img src="imagenes/proyectos/lamorsa/morsa.png" alt="Morsa">
      <p>Morsa</p>
                          
      <img src="imagenes/proyectos/lamorsa/variaciones.gif" alt="Variaciones">
      <p>Variaciones</p>
                          
      <img src="imagenes/proyectos/lamorsa/web.png" alt="Web">
      <p>Web</p>
                          
      <img src="imagenes/proyectos/lamorsa/logo-antiguo.png" alt="Logotipo antiguo">
      <p>Logotipo antiguo</p>
                          
      <img src="imagenes/proyectos/lamorsa/tarjetas.png" alt="Tarjetas">
      <p>Tarjetas</p>
    </section>

    <?php include 'inc/footer.php'; ?>

  </body>
</html>
