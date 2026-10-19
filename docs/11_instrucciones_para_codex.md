# Instrucciones para Codex

## Encargo
Construye un MVP funcional de **GolfStart AI**, una web responsive en español de España para principiantes de golf. Usa los documentos `docs/01` a `docs/10` como fuente de requisitos. **No inventes funcionalidades terminadas ni resultados de pruebas.**

## Stack
Next.js, TypeScript, Tailwind CSS, Supabase y proveedor LLM configurable desde servidor. Si faltan credenciales, ofrece un **modo demo explícito** con respuestas de ejemplo y persistencia local limitada, sin presentarlo como IA real.

## Trabajo por etapas
1. Inicializa proyecto, estructura de carpetas, scripts y README de ejecución.
2. Implementa branding según `02_branding.md`; crea un logotipo SVG original simple y favicon.
3. Construye pantallas de `04_experiencia_y_pantallas.md` y datos semilla para guía y ejercicios.
4. Implementa onboarding, plan semanal y seguimiento de tareas.
5. Añade chat con endpoint seguro, validación, límites y mensajes de error.
6. Implementa niveles, XP idempotente e insignias.
7. Configura base de datos, migraciones, RLS y pruebas.
8. Documenta instalación, variables de entorno, limitaciones y decisiones técnicas.

## Reglas de producto
No implementar todavía avatar 3D, pagos, análisis de vídeo ni rankings públicos. No afirmar que el usuario mejora técnicamente solo por completar tareas. El contenido sobre reglas debe indicar fuentes y fecha de revisión. No pedir datos personales innecesarios.

## Definition of Done
- Se ejecuta localmente con instrucciones claras.
- Se adapta a móvil y escritorio.
- Todas las pantallas principales tienen contenido útil.
- Hay pruebas básicas que se pueden ejecutar.
- No se exponen claves secretas.
- El README distingue funciones reales, demo y pendientes.

## Primer mensaje para Codex
«Lee todos los documentos Markdown de la carpeta docs. Resume el alcance del MVP y las decisiones técnicas. Después implementa el Hito 1 y detente para mostrar los archivos creados, cómo ejecutar el proyecto y los siguientes pasos. No implementes funciones fuera del MVP sin consultarlo.»
