<!doctype html>
<html lang="es">
  <head>
    <?php include 'inc/head_common.php'; ?>

    <title>David Medibú. 3D. Virginia</title>
  </head>
  <body onload="init();">

    <?php include 'inc/header.php'; ?>

    <div class="linea"></div>

    <nav class="navbar navbar-expand-sm justify-content-center" id="menu">
      <div class="navbar-nav col-12 col-lg-8 justify-content-center">
        <a href="ilus.php" class="nav-link">Ilustración</a>
        <a href="dise.php" class="nav-link">Diseño gráfico</a>
        <a href="mult.php" class="nav-link">Multimedia</a>
        <a href="3d.php" class="nav-link">3D</a>
        <a href="prod.php" class="nav-link">Productos</a>
      </div>
    </nav>

    <nav class="navbar navbar-expand-sm justify-content-center submenu" id="submenu-3d">
      <div class="navbar-nav col-12 col-lg-8 justify-content-center">
        <a href="3d-dest-paisajes.php" class="nav-link">Paisajes</a>
        <a href="3d-dest-vir.php" class="nav-link disabled">Virginia</a>
      </div>
    </nav>

    <section id="contenido">
    
        <img src="contenido/3d/Virgina-retrato.png" alt="Virgina retrato" />    
        <img src="contenido/3d/Virgina-selfie.png" alt="Virgina selfie" />    
        <img src="contenido/3d/Virgina-tarta.png" alt="Virginia tarta" />
        <p>Virginia</p>
        
        
        <p class="subir"><a href="#menu">subir</a></p></br>
      
    </section>

    <div class="linea"></div>

    <?php include 'inc/footer.php'; ?>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>