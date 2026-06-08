# Changelog — Campers App

Todos los cambios notables de la app están documentados acá.
El formato sigue [Keep a Changelog](https://keepachangelog.com/es/).

---

## [2.3.0] — 2026-06-07

### Agregado
- **Dato curioso del día**: card oscura al tope de la app con un dato diferente cada día del año (365 datos en categorías variadas: animales, espacio, ciencia, cuerpo humano, historia, tecnología, música, geografía, matemática, comida, deporte). Selección determinista por día del año.

### Cambiado
- Versión actualizada a v2.3.0 en el header de la app.
- Manifiesto: quitado el apellido de la bajada — dice "Salvador y Eva" en lugar de "Salvador y Eva Vicente De Pedro".

---

## [2.2.0] — 2026-06-07

### Agregado
- **Mini-juego "Agarrá los bichos"**: grilla 3×3, emojis random que aparecen y desaparecen, 30 segundos de tiempo.
- Velocidad progresiva: el juego acelera cada 5 segundos hasta ponerse frenético.
- Puntos de app según score (5 / 10 / 15 / 20 / 30 pts). Anti-farming: solo gana puntos una vez por día por usuario.
- Integrado con el sistema de puntos y ranking existente.

---

## [2.1.0] — 2026-06-07

### Agregado
- **Tareas diferenciadas por día de la semana**: el formulario se adapta automáticamente según la fecha seleccionada.
- **Fines de semana (sáb y dom)**: se ocultan las secciones de Uniformes y Mochila, que no aplican sin colegio.
- **Card de Lectura** (solo sáb y dom): radio con cuatro niveles (No leí / Un rato / Leí bien / Me enganchó) + campo de texto libre para escribir un resumen de lo leído.
  - Puntos: 0 / 5 / 15 / 25 según nivel.
  - El resumen se envía a Google Sheets junto con el resto del formulario.
- **Domingo**: los ítems de Tareas del Colegio cambian a "Revisar si hay tareas para el lunes" y "Preparar la mochila para el lunes".

---

## [2.0.0] — 2026-06-07

### Agregado
- **Ranking familiar**: comparativa de puntos y nivel entre Salvador y Eva en tiempo real.
- **Sistema de recompensas**: catálogo de recompensas canjeables con puntos acumulados.
- **Estado de ánimo diario**: el chico elige cómo estuvo su día antes de enviar.
- **Link al Manifiesto** en el header de la app.

---

## [1.2.0] — 2026-06-07

### Agregado
- Calendario de fecha en español.
- Página `manifiesto.html`: el manifiesto familiar completo, con diseño propio y link desde la app.

---

## [1.1.0] — 2026-06-07

### Agregado
- **Sistema de puntos**: cada ítem de checkbox suma 10 pts; música y dientes tienen escala propia.
- **Niveles de gamificación**: Camper → Explorador → Aventurero → Leyenda → 🎸 Dios del Rock.
- **Racha de días seguidos**: contador de días consecutivos con registro personal.
- Barra de progreso de nivel con indicador de puntos faltantes.

---

## [1.0.0] — 2026-06-07

### Agregado
- App inicial como PWA instalable (Android e iPhone).
- Formulario diario: Uniformes, Mochila, Dormitorio, Tareas del Colegio, Música, Dientes.
- Temas de color por hijo: azul (Salvador) / rosa (Eva).
- Envío de datos a Google Sheets vía Apps Script.
- Service worker para uso offline.
