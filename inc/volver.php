<?php
// "volver" de las páginas de proyecto. Por defecto vuelve a Branding.
// Un proyecto de otra sección puede definir antes $volver_a (por ejemplo 'edtech.php').
$destino = isset($volver_a) ? $volver_a : 'branding.php';
?>
<div id="volver">
  <a href="<?php echo htmlspecialchars($destino); ?>">
    <span>volver</span>
  </a>
</div>
