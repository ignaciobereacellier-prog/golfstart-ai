# Diario de desarrollo de GolfStart AI

Registro del proceso de diseño y desarrollo para el trabajo final (capítulo «Diseño y desarrollo» del PDF). Codex añade una entrada al terminar cada paso; Ignacio completa «Qué he aprendido».

## Formato de cada entrada

```
### Paso N. <título> (AAAA-MM-DD)
- **Qué se pidió:** el prompt, resumido.
- **Qué hizo Codex:** cambios y ficheros.
- **Qué falló o hubo que corregir:** errores y prompts de corrección.
- **Decisiones:** qué se eligió y por qué.
- **Qué he aprendido (Ignacio):**
- **Captura:** nombre del fichero en capturas/.
```

---

## Entradas

### Paso 9. Publicación en GitHub (2026-10-19)
- **Qué se pidió:** subir el proyecto completo y disponer de un enlace público para el PDF.
- **Qué hizo Codex:** creó el repositorio público ignaciobereacellier-prog/golfstart-ai y preparó todos los archivos, incluida documentación, imagen y vídeo, para GitHub Pages.
- **Qué falló o hubo que corregir:** fue necesario iniciar sesión en el navegador; publicación en curso.
- **Decisiones:** conservar las carpetas originales y publicar desde main, raíz. Enlace previsto: https://ignaciobereacellier-prog.github.io/golfstart-ai/.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.


### Ajuste. Título del vídeo (2026-10-19)
- **Qué se pidió:** poner «El swing perfecto» encima del vídeo.
- **Qué hizo Codex:** cambió el título del apartado en index.html.
- **Qué falló o hubo que corregir:** sin incidencias.
- **Decisiones:** conservar el vídeo y sus controles actuales.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.

### Ajuste. Vídeo de swing aportado (2026-10-19)
- **Qué se pidió:** usar el swing del archivo IMG_5872.MOV aportado por el usuario.
- **Qué hizo Codex:** copió el original a videos/swing-golf.mov y sustituyó la animación por un reproductor HTML con controles en index.html; actualizó css/estilos.css y js/app.js para adaptarlo y pausarlo al cambiar de pantalla.
- **Qué falló o hubo que corregir:** no hay conversor de vídeo disponible; se conserva el MOV original, que contiene vídeo AVC/H.264 y audio AAC. Pendiente comprobar la reproducción en el navegador del usuario.
- **Decisiones:** sin reproducción automática, controles nativos, reproducción dentro de la página en móvil y enlace alternativo al archivo. Al publicar, incluir también la carpeta videos/.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.

### Ajuste. Swing visto desde atrás (2026-10-19)
- **Qué se pidió:** mostrar el swing del robot desde atrás.
- **Qué hizo Codex:** actualizó index.html con la nuca y el panel posterior del robot; colocó la espalda delante de los brazos para representar la vista posterior y actualizó los textos descriptivos.
- **Qué falló o hubo que corregir:** la vista anterior mostraba la cara del robot.
- **Decisiones:** conservar la animación por código y sus controles; perspectiva posterior esquemática. Pendiente revisión visual en navegador.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.

### Ajuste. Movimiento del swing inspirado en Tiger Woods (2026-10-19)
- **Qué se pidió:** que el movimiento del robot se parezca más al swing de Tiger Woods.
- **Qué hizo Codex:** modificó index.html y css/estilos.css para separar el movimiento de muñecas y palo, variar el ritmo de subida y bajada, simular el giro del torso, desplazar el peso hacia la pierna delantera y levantar el talón trasero en el final.
- **Qué falló o hubo que corregir:** el movimiento anterior giraba brazos y palo como un bloque y no mostraba una transferencia de peso clara.
- **Decisiones:** ciclo de seis segundos con final alto sostenido; interpretación estilizada, sin afirmar una reproducción exacta de la técnica de Tiger Woods. Pendiente revisión visual por Ignacio.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.

### Ajuste. Robot con swing animado (2026-10-19)
- **Qué se pidió:** sustituir la imagen estática por una animación sencilla mediante código, opción confirmada por Ignacio.
- **Qué hizo Codex:** actualizó index.html, css/estilos.css y js/app.js con un robot vectorial animado, giro de cuerpo y brazos, palo y bola en movimiento y control de reproducción y pausa.
- **Qué falló o hubo que corregir:** la imagen anterior no tenía movimiento. Esta versión es una animación por código, no un archivo de vídeo.
- **Decisiones:** comienza pausada y se reproduce en bucle al pulsar el botón; se pausa al salir de Inicio o al ocultar la pestaña. Se identifica como ilustrativa, sin presentarla como demostración técnica. Se conserva img/robot-swing.png como recurso anterior.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.

### Ajuste. Robot con swing de golf (2026-10-19)
- **Qué se pidió:** añadir un apartado con un robot haciendo un swing inspirado en Tiger Woods.
- **Qué hizo Codex:** generó img/robot-swing.png con la herramienta integrada image_gen y añadió un apartado en Inicio mediante index.html y css/estilos.css, con imagen adaptable, explicación de swing y texto alternativo.
- **Qué falló o hubo que corregir:** sin incidencias; imagen inspeccionada y cambios comprobados con git diff --check. Pendiente comprobación en navegador.
- **Decisiones:** ilustración estática en verde, marfil y dorado, sin añadir avatar interactivo. Prompt utilizado: «Robot amable haciendo un swing de golf inspirado en el final equilibrado de Tiger Woods, peso sobre la pierna delantera, talón trasero levantado, torso girado y palo sobre el hombro; robot completo y palo visibles, ilustración 3D limpia, verde #1B5E3B, marfil y acentos #F2B705, fondo crema #F7F5EF, pequeña plataforma de césped; composición cuadrada para móvil, sin texto ni logos». Se generó con la herramienta integrada, sin API ni claves.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.

### Paso 8. Preparación de capturas y vídeo (2026-10-19)
- **Qué se pidió:** capturas móviles por pantalla en capturas/, grabación de la app tras reiniciar y correspondencia con los pasos del desarrollo.
- **Qué hizo Codex:** creó capturas/LEEME.md con nombres previstos, encuadres e instrucciones. Correspondencia: 01-inicio.png → paso 2; 02-guia.png → paso 3; 03-niveles.png → paso 4; 04-amigos.png y la complementaria 05-retos.png → paso 5.
- **Qué falló o hubo que corregir:** la herramienta del navegador bloqueó el acceso a la página local file://. No se han generado capturas, reiniciado el progreso ni grabado vídeo. Quedan pendientes de realizar manualmente.
- **Decisiones:** usar ancho de 375 px y altura constante; pulsar «Reiniciar demo» antes de capturar o grabar. El vídeo previsto se guardará como capturas/demo-golfstart.mp4.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendientes: capturas/01-inicio.png, capturas/02-guia.png, capturas/03-niveles.png y capturas/04-amigos.png.

### Paso 5. Amigos y retos (2026-10-19)
- **Qué se pidió:** clasificación con tres amigos de ejemplo y Tú según los puntos guardados, más tres retos semanales y recordatorio sobre la constancia.
- **Qué hizo Codex:** creó data/amigos.js y actualizó index.html, js/app.js y css/estilos.css con la clasificación ordenada y tarjetas con barras de progreso accesibles.
- **Qué falló o hubo que corregir:** pendiente de revisión visual en el navegador por Ignacio.
- **Decisiones:** los puntos y el nivel de Tú usan el progreso de Niveles y se actualizan al sumar o reiniciar. Los retos muestran datos ilustrativos (1/3, 2/3 y 0/1), etiquetados como ejemplo y sin seguimiento real, según el alcance demo acordado.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.

### Paso 4. Niveles y progreso (2026-10-19)
- **Qué se pidió:** cinco niveles con estados, umbrales, usuario de 950 puntos, barra de progreso, insignias, botones para sumar y reinicio con guardado local.
- **Qué hizo Codex:** creó data/niveles.js y actualizó index.html, js/app.js y css/estilos.css para mostrar y actualizar el progreso usando localStorage.
- **Qué falló o hubo que corregir:** se previó un aviso si el navegador impide el guardado; pendiente revisión visual por Ignacio.
- **Decisiones:** se usan los nombres completos solicitados en este paso. Cada pulsación simula una actividad nueva; las insignias de ejemplo reconocen niveles anteriores al actual. El nivel 5 queda en curso al no haberse definido un umbral de finalización. Reiniciar restaura los 950 puntos y sus insignias. Comprobados con un entorno simulado los umbrales, el 45 % inicial, incrementos, recuperación del guardado y reinicio; sintaxis correcta.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.

### Ajuste. Eliminar cabecera superior (2026-10-16)
- **Qué se pidió:** eliminar la cabecera con el nombre y el eslogan mostrada en la captura.
- **Qué hizo Codex:** eliminó ese bloque de index.html y retiró sus estilos de css/estilos.css.
- **Qué falló o hubo que corregir:** el nombre aparecía duplicado tras añadirlo al menú lateral.
- **Decisiones:** conservar el nombre en la barra lateral fija y permitir que el contenido empiece directamente arriba.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.

### Ajuste. Nombre encima de Inicio (2026-10-16)
- **Qué se pidió:** colocar el título GolfStart AI fijo encima de Inicio.
- **Qué hizo Codex:** añadió el nombre en la parte superior de la barra lateral en index.html y sus estilos en css/estilos.css.
- **Qué falló o hubo que corregir:** sin incidencias; pendiente de revisión visual en el navegador.
- **Decisiones:** el nombre comparte la posición fija del menú y se adapta al ancho disponible en móvil.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.

### Ajuste. Navegación lateral fija (2026-10-16)
- **Qué se pidió:** mover el menú inferior al lateral y mantenerlo siempre accesible.
- **Qué hizo Codex:** actualizó css/estilos.css para colocar las cuatro opciones en una barra lateral izquierda fija, con espacio reservado para evitar que tape el contenido.
- **Qué falló o hubo que corregir:** se adaptó el formulario del chat a una columna en móviles estrechos para conservar espacio útil.
- **Decisiones:** barra compacta de 88 px en móvil y de 200 px en ordenador; etiquetas completas, foco visible y desplazamiento propio si la altura disponible es pequeña. Este cambio sustituye la navegación inferior inicial por petición del usuario.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.

### Paso 3. Guía para principiantes (2026-10-16)
- **Qué se pidió:** siete tarjetas con contenido corto, glosario y acceso al chat desde cada apartado.
- **Qué hizo Codex:** creó data/guia.js y actualizó index.html, css/estilos.css y js/app.js. Cada tarjeta abre su detalle, permite volver a los apartados y ofrece «Pregúntale a GolfStart» para abrir el chat.
- **Qué falló o hubo que corregir:** docs/ define los temas pero no contiene artículos completos; las explicaciones redactadas a partir de esas bases quedan marcadas con // REVISAR para Ignacio, especialmente reglas y glosario.
- **Decisiones:** tres o cuatro puntos por apartado y ocho términos en Vocabulario; contenido separado de la lógica. Comprobadas la sintaxis, las siete categorías, el número de puntos y los ocho términos; pendiente comprobación visual en navegador.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.

### Paso 2. Mejora para volver a las preguntas (2026-10-16)
- **Qué se pidió:** poder consultar otras preguntas después de seleccionar una.
- **Qué hizo Codex:** actualizó index.html, css/estilos.css y js/app.js con el botón «Ver otras preguntas», que recupera los ocho accesos rápidos y conserva la conversación.
- **Qué falló o hubo que corregir:** al responder se ocultaban las preguntas y no había un control para recuperarlas.
- **Decisiones:** mostrar el botón tras cada respuesta reconocida; al pulsarlo, llevar el foco a la primera pregunta. Las preguntas desconocidas siguen mostrando directamente las opciones.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.

### Paso 2. Inicio y chat de ejemplo (2026-10-16)
- **Qué se pidió:** saludo, chat y ocho preguntas rápidas con respuestas preparadas y búsqueda por palabras clave.
- **Qué hizo Codex:** añadió data/respuestas.js y actualizó index.html, css/estilos.css y js/app.js; incorporó mensajes, formulario, botones y una etiqueta del prototipo que permanece visible al desplazarse por Inicio.
- **Qué falló o hubo que corregir:** sin incidencias en las comprobaciones automáticas; queda la revisión visual en el navegador por Ignacio.
- **Decisiones:** respuestas de hasta 80 palabras, búsqueda sin distinguir tildes ni mayúsculas y con palabras completas; si no hay coincidencia, se muestran de nuevo las ocho preguntas. Conversación solo en memoria, sin IA real ni persistencia.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.

### Paso 1. Base y navegación (2026-10-16)
- **Qué se pidió:** crear cabecera, eslogan y cuatro pestañas con sus títulos, usando el branding provisional.
- **Qué hizo Codex:** creó index.html, css/estilos.css y js/app.js con diseño adaptable, navegación fija y controles accesibles.
- **Qué falló o hubo que corregir:** no se detectó un repositorio Git previo; se inicializa en este paso. Pendiente de comprobación visual por Ignacio en el navegador.
- **Decisiones:** HTML, CSS y JavaScript sin dependencias; colores de docs/branding.md. Para siguientes pasos, puntos y retos serán una demo y los niveles usarán nombres breves.
- **Qué he aprendido (Ignacio):**
- **Captura:** pendiente.
