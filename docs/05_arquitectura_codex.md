# Arquitectura técnica propuesta

## Stack recomendado para el MVP
- **Next.js + TypeScript**: web responsive, API server-side.
- **Tailwind CSS**: estilos y tokens del branding.
- **Supabase**: autenticación y base de datos PostgreSQL, con Row Level Security.
- **API de un modelo de lenguaje** mediante variables de entorno y llamadas exclusivamente desde servidor; proveedor intercambiable.
- **Vitest / Testing Library / Playwright**: pruebas unitarias, componentes y recorridos.

La elección es propuesta técnica, no implementación realizada.

## Modelo de datos mínimo
`profiles(id, display_name, experience, days_per_week, access_type, goal, created_at)`
`guide_articles(id, category, title, body, source_url, reviewed_at)`
`chat_messages(id, user_id, role, content, created_at)`
`training_plans(id, user_id, week_start, version, created_at)`
`training_tasks(id, plan_id, title, category, minutes, instructions, completed_at)`
`levels(id, ordinal, name, description)`
`achievements(id, key, name, points)`
`user_achievements(id, user_id, achievement_id, awarded_at)`
`point_events(id, user_id, event_type, reference_id, points, created_at)`

Añadir índices, restricciones y unicidad de `(user_id,event_type,reference_id)` para impedir premios duplicados. Guardar solo datos necesarios.

## Endpoints sugeridos
- `POST /api/chat` → respuesta, fuentes si aplica y manejo de errores.
- `POST /api/onboarding` → guardar preferencias.
- `POST /api/plans/generate` → plan validado por esquema.
- `POST /api/tasks/:id/complete` → completar una sola vez y conceder puntos.
- `GET /api/me/progress` → progreso.
- `GET /api/guide` → artículos.

## Seguridad
No exponer claves de API en cliente; validar entradas con Zod; rate limiting; autenticación y autorización por usuario; RLS; controles antiabuso; consentimiento para guardar conversaciones; política de retención y borrado; evitar publicar ubicación o datos personales en rankings.

## Arquitectura de IA
Preferir recuperación de contenido curado para reglas y vocabulario. La IA redacta en lenguaje sencillo y cita las fuentes cuando corresponda; no inventa reglas ni afirma analizar movimientos sin vídeo/visión implementados. Para planes, salida JSON validada y ejercicios seleccionados de un catálogo revisado.

## Variables de entorno (ejemplo)
`DATABASE_URL`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `LLM_API_KEY` — solo servidor para claves secretas. Proporcionar `.env.example` sin valores reales.
