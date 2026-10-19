# GolfStart AI: instrucciones para Codex

## Qué es
GolfStart AI es una app con inteligencia artificial para gente de 18 a 30 años que quiere empezar a jugar al golf y no sabe por dónde empezar. Es el trabajo final del máster de IA de Founderz de Ignacio Berea. La definición completa del producto está en `docs/`: léela antes de empezar.

Mensaje principal: «Empieza a jugar al golf de forma fácil e inteligente.»

## Qué construimos ahora (fase 1)
Un prototipo web navegable, pensado para verse en el móvil, que sirva para enseñar la app en el vídeo y en el PDF del trabajo final. **Todavía sin IA real**: el chat responde con respuestas preparadas.

Cuatro pantallas, con una barra de navegación fija abajo:
1. **Inicio:** saludo, chat y accesos rápidos a las preguntas más frecuentes.
2. **Guía:** los 7 apartados de la guía para principiantes.
3. **Niveles:** los 5 niveles, los puntos y las insignias del usuario.
4. **Amigos:** la clasificación entre amigos y los retos semanales.

Fuera de esta fase: IA real, avatar 3D, vídeos, registro de usuarios, amigos reales, pagos y app nativa.

## Reglas técnicas
- Solo HTML, CSS y JavaScript. Sin frameworks, sin librerías y sin nada que haya que instalar.
- Tiene que funcionar **abriendo `index.html` con doble clic**, sin servidor: nada de `type="module"` ni de `fetch` a ficheros locales. Los datos se cargan con etiquetas `<script>` normales.
- Estructura:
  - `index.html`
  - `css/estilos.css`
  - `js/app.js`
  - `data/*.js`: todo el contenido (respuestas del chat, guía, niveles, amigos y retos), separado del código para que Ignacio lo pueda revisar y cambiar sin tocar la lógica.
  - `img/`: logo e imágenes.
- Diseño para móvil primero (375 px de ancho), que también se vea bien en el ordenador.
- Colores y tipografía en variables CSS al principio de `css/estilos.css`, a partir de `docs/branding.md`, para poder cambiar el branding en un solo sitio.
- Todo el texto de la app en español de España.
- **Nunca** pongas claves de API, contraseñas ni datos personales en el código.
- Accesible: contraste suficiente, botones grandes y fáciles de pulsar, textos alternativos en las imágenes.

## Contenido
- Usa lo que hay en `docs/`. No inventes funcionalidades que no estén ahí.
- Tono cercano y sencillo. Cuando aparezca un término de golf (par, birdie, bogey, handicap, green, tee, bunker, fairway…), explícalo en pocas palabras.
- Respuestas del chat cortas: 80 palabras como máximo.
- En el chat, una etiqueta siempre visible: «Prototipo: respuestas de ejemplo». No presentes las respuestas preparadas como si las generara una IA.
- Ignacio es golfista y revisa que el contenido de golf sea correcto. Si dudas de una regla o de un dato, márcalo con `// REVISAR` en `data/` y avísale.

## Cómo trabajamos
- Ignacio está aprendiendo. Haz **un paso cada vez**, el que te pida, y no adelantes trabajo de los pasos siguientes.
- Al terminar cada paso, explica en español sencillo, en 3-5 líneas, qué has hecho, qué ficheros has tocado y cómo comprobarlo en el navegador.
- Si algo no está claro, pregunta antes de escribir código.
- Cuando Ignacio diga que un paso funciona, haz un commit con un mensaje corto en español. Si la carpeta no es un repositorio git, inicialízalo en el primer paso (si git no está instalado, avísale y seguimos sin él).
- Al terminar cada paso, añade una entrada en `diario-de-desarrollo.md` con el formato que hay en ese fichero.
- `PROMPTS.md` es la guía de la sesión para Ignacio: no ejecutes sus pasos por tu cuenta.
