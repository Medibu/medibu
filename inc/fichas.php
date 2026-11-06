<?php
// Fichas de proyecto. Antes de incluirlo, define $proyectos: una lista de arrays con
// 'titulo', 'descripcion', 'tecnologias' (lista de textos), 'enlace', 'imagen', 'alt'
// y, opcionalmente, 'nueva_pestana' => true para abrir el enlace en una pestaña nueva.
?>
<section id="fichas">
<?php if (empty($proyectos)) { ?>
  <p class="galeria-vacia">Próximamente.</p>
<?php } else { ?>
<?php foreach ($proyectos as $p) { ?>
  <article class="ficha">
    <div class="ficha-imagen">
      <i class="capa" aria-hidden="true"></i><i class="capa" aria-hidden="true"></i>
      <img src="<?php echo htmlspecialchars($p['imagen']); ?>" alt="<?php echo htmlspecialchars($p['alt']); ?>">
    </div>
    <div class="ficha-texto">
      <h2><a href="<?php echo htmlspecialchars($p['enlace']); ?>"<?php if (!empty($p['nueva_pestana'])) echo ' target="_blank" rel="noopener"'; ?>><?php echo htmlspecialchars($p['titulo']); ?></a></h2>
      <p><?php echo htmlspecialchars($p['descripcion']); ?></p>
      <ul class="tecnologias" aria-label="Tecnologías utilizadas">
<?php foreach ($p['tecnologias'] as $t) { ?>
        <li><?php echo htmlspecialchars($t); ?></li>
<?php } ?>
      </ul>
      <span class="ficha-cta" aria-hidden="true">Ver proyecto</span>
    </div>
  </article>
<?php } ?>
<?php } ?>
</section>
