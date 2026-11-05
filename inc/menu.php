<?php
// Menú de secciones: pestañas que cuelgan de la cabecera.
// Antes de incluirlo, define $seccion_actual = 'branding' o 'edtech'.
$actual = isset($seccion_actual) ? $seccion_actual : '';
?>
<nav id="secciones" aria-label="Secciones">
  <a class="pestana" href="branding.php"<?php if ($actual === 'branding') echo ' aria-current="page"'; ?>>
    <span class="txt"><span class="largo">Branding animado</span><span class="corto">Branding</span></span>
  </a>
  <a class="pestana" href="edtech.php"<?php if ($actual === 'edtech') echo ' aria-current="page"'; ?>>
    <span class="txt"><span class="largo">Tecnología educativa</span><span class="corto">EdTech</span></span>
  </a>
  <a class="pestana" href="https://www.davidmedibu.com/editorialbu" target="_blank" rel="noopener">
    <span class="txt"><span class="largo">Diseño editorial</span><span class="corto">Editorial</span></span><span class="sr-only"> (se abre en una pestaña nueva)</span>
  </a>
</nav>
