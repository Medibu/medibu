<!DOCTYPE html>
<html lang="es">
  <head>
    <title>David Medibu - Croupi</title>
    <?php include 'inc/head.php'; ?>
    <link rel="stylesheet" href="estilos/proyectos.css">

    <!-- Animación nubes-->
    <script src="http://code.createjs.com/easeljs-0.6.0.min.js"></script>
    <script src="http://code.createjs.com/tweenjs-0.4.0.min.js"></script>
    <script src="http://code.createjs.com/movieclip-0.6.0.min.js"></script>
    <script src="imagenes/proyectos/croupi/croupi.js"></script>

    <script>
    var canvas, stage, exportRoot;

    function init() {
      canvas = document.getElementById("canvas");
      exportRoot = new lib.croupiv08();

      stage = new createjs.Stage(canvas);
      stage.addChild(exportRoot);
      stage.update();

      createjs.Ticker.setFPS(36);
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
      <img src="imagenes/proyectos/croupi/animacion.gif" alt="Animación" class="marco">
      <p>Animación</p>

      <img src="imagenes/proyectos/croupi/variaciones.png" alt="Variantes">
      <p>Variaciones</p>

      <img src="imagenes/proyectos/croupi/animacion-pentagrama.gif" alt="Animación pentagrama">
      <p>Animación pentagrama</p>

      <canvas id="canvas" width="700" height="318" style="background-color:#ffffff"></canvas>
      <p>Animación nubes</p>
                          
      <img src="imagenes/proyectos/croupi/colores.png" alt="Colores">
      <p>Colores</p>
                          
      <img src="imagenes/proyectos/croupi/groupies.png" alt="Groupies">
      <p>Groupies</p>
                          
      <img src="imagenes/proyectos/croupi/cartel-parada-bus.png" alt="Cartel">
      <p>Cartel</p>
                          
      <img src="imagenes/proyectos/croupi/tarjetas.png" alt="Tarjetas">
      <p>Tarjetas</p>
                          
      <img src="imagenes/proyectos/croupi/camiseta.png" alt="Camiseta">
      <p>Camiseta</p>                          
                                
      <a href="http://www.croupi.com">
      <img src="imagenes/proyectos/croupi/web-ipad.png" alt="Web" class="fotoenlace">
      </a>
                          
      <a href="http://www.croupi.com">
      <img src="imagenes/proyectos/croupi/web.png" alt="Web" class="fotoenlace">
      </a>
      <p>Web</p>
                          
      <a href="https://youtu.be/gxBeXOdn0DQ">
      <img src="imagenes/proyectos/croupi/video-presentacion.png" alt="Vídeos" class="fotoenlace">
      </a>
                          
      <a href="https://youtu.be/vj11qs20iqI"><img src="imagenes/proyectos/croupi/video-lyric.png" alt="Vídeos" class="fotoenlace">
      </a>
      <p>Vídeos</p>
    </section>

    <?php include 'inc/footer.php'; ?>

  </body>
</html>
