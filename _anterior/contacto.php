<!doctype html>
<html lang="es">
    <head>
        <?php include 'inc/head_common.php'; ?>

        <title>David Medibú</title>
    
    </head>
    
    <body>

        <div id="linea"></div>
        
        <section>
            <div class="row justify-content-center presentacion">
                <div class="col-12 col-md-10 col-lg-8">
                    <p>Hola, me llamo David y soy <strong>ilustrador y diseñador gráfico. </strong></p>
                    <p>Llevo más de 15 años realizando todo tipo de trabajos relacionados con la publicidad, branding, animación 2D, 3D, creatividad, fotografía, ilustración, diseño web... Además de haber emprendido varios proyectos que hoy siguen desarrollándose y creciendo.</p>
                    <p>Además soy formador en cursos de Photoshop y Animate entre otros programas.</p>
                    <p>Si quieres contactar conmigo puedes utilizar cualquiera de estas opciones:</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-12 formasdecontacto">
                    <a href="mailto:davidmedibu@gmail.com"><img src="imagenes/contacto-mail.png"></a>
                    <a href="https://m.me/davidmedibu"><img src="imagenes/contacto-messenger.png"></a>
                    <a href="https://api.whatsapp.com/send?phone=34627825351"><img src="imagenes/contacto-whatsapp.png"></a>
                </div>
            </div>
        </section>
        
        <section class="volver">
        	<a href="index.php">volver</a>
        </section>

        <div class="linea"></div>

        <?php include 'inc/footer.php'; ?>

        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

        <!-- WhatsHelp.io widget -->
        <!--<script type="text/javascript">
            (function () {
                var options = {
                    facebook: "118216821552613", // Facebook page ID
                    whatsapp: "+34 627825351", // WhatsApp number
                    call_to_action: "Contacta conmigo", // Call to action
                    button_color: "#129BF4", // Color of button
                    position: "right", // Position may be 'right' or 'left'
                    order: "facebook,whatsapp", // Order of buttons
                };
                var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
                var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
                s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
                var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
            })();
        </script>-->
        <!-- /WhatsHelp.io widget -->
    </body>
</html>