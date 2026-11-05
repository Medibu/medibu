<?php
// Galería de miniaturas. Antes de incluirlo, define $proyectos:
// una lista de [enlace, imagen, texto alternativo] y, opcionalmente, un cuarto valor true
// para abrir el enlace en una pestaña nueva.
?>
<section>
<?php if (empty($proyectos)) : ?>
  <p class="galeria-vacia">Próximamente.</p>
<?php else : ?>
  <div id="galeria">
<?php foreach ($proyectos as $p) : ?>
    <div class="miniatura">
      <div class="miniaturacontenido">
        <a href="<?php echo htmlspecialchars($p[0]); ?>"<?php if (!empty($p[3])) echo ' target="_blank" rel="noopener"'; ?>>
          <img src="<?php echo htmlspecialchars($p[1]); ?>" alt="<?php echo htmlspecialchars($p[2]); ?>">
        </a>
      </div>
    </div>
<?php endforeach; ?>
  </div>
<?php endif; ?>
</section>
