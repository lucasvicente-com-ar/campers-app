# 🏕️ Campers App `v2.0.0`

App familiar para que Salvador y Eva registren sus tareas diarias desde el celular.

**👉 [Abrir la app](https://lucasvicente-com-ar.github.io/campers-app/tareas_diarias.html)**

---

## ¿Qué hace?

Cada día los chicos completan un formulario con sus responsabilidades:

| Sección | Tareas |
|---|---|
| 👕 Uniformes | Doblar, colgar, preparar para el día siguiente |
| 🎒 Mochila | Guardar, sacar comestibles |
| 🛏️ Dormitorio | Ordenar ropa, tender camas |
| 📚 Tareas colegio | Hacer tarea, preparar mochila |
| 🎵 Música | Tiempo de práctica diaria |
| 🦷 Dientes | Nivel de higiene dental |

Al enviar, los datos se guardan automáticamente en **Google Sheets** para que los padres puedan hacer seguimiento.

---

## Funcionalidades

- 🎨 **Tema por hijo** — la app cambia de color según quién la use (azul para Salvador, rosa para Eva)
- 🔥 **Racha de días** — muestra cuántos días seguidos completaron las tareas y el récord personal
- ⭐ **Puntos y nivel** — cada tarea completada suma puntos hacia los niveles: Camper → Explorador → Aventurero → Leyenda → 🎸 ¡Dios del Rock!
- 📊 **Google Sheets** — cada envío queda registrado en una planilla con fecha, nombre y detalle de cada sección
- 📱 **Instalable como app** — PWA lista para agregar a la pantalla de inicio en Android e iPhone

---

## Archivos

```
tareas_diarias.html   ← La app completa
manifest.json         ← Configuración PWA
sw.js                 ← Service worker (funciona offline)
icon-192.png          ← Ícono app (192×192)
icon-512.png          ← Ícono app (512×512)
google_apps_script.js ← Script para Google Sheets (ver setup)
```

---

## Cómo instalar en el celular

**Android (Chrome)**
1. Abrí el link de la app en Chrome
2. Tocá el banner "Agregar a pantalla de inicio" — o menú `⋮` → Agregar a pantalla de inicio

**iPhone (Safari)**
1. Abrí el link en Safari
2. Botón compartir `⬆` → **Agregar a pantalla de inicio**

---

## Cómo actualizar la app

Cualquier cambio en el código se publica automáticamente con:

```bash
git add .
git commit -m "descripción del cambio"
git push
```

GitHub Pages actualiza el sitio en ~1 minuto.

---

## Setup de Google Sheets

1. Abrí [Google Sheets](https://sheets.google.com) → Nuevo → Hoja de cálculo
2. Menú **Extensiones → Apps Script**
3. Pegá el contenido de `google_apps_script.js`
4. **Implementar → Nueva implementación** → Aplicación web → Cualquier usuario
5. Copiá la URL generada y pegala en `tareas_diarias.html` en la línea:
   ```js
   const SHEETS_URL = 'TU_URL_AQUI';
   ```

---

## Niveles y puntos

| Nivel | Puntos | Emoji |
|---|---|---|
| Camper | 0 – 99 | 🏕️ |
| Explorador | 100 – 299 | 🧭 |
| Aventurero | 300 – 599 | 🌟 |
| Leyenda | 600 – 999 | 🏆 |
| ¡Dios del Rock! | 1000+ | 🎸 |

**Puntos por entrega:**
- ✅ Cada ítem de checkbox: **10 pts**
- 🎵 Música 1-2 hs: **20 pts** · 2+ hs: **30 pts** · menos de 1 hs: **5 pts**
- 🦷 Dientes perfecto: **20 pts** · bien: **15 pts** · más o menos: **5 pts**

---

## 📜 El Manifiesto — No dejes que las máquinas elijan tu futuro

> *Un llamado a Salvador y Eva Vicente De Pedro para que sean los arquitectos del mañana, no sus espectadores.*

⚡ **Están viviendo el momento más importante de la historia humana.** La inteligencia artificial va a cambiar todo — los trabajos, la medicina, la ciencia, la música, el arte. La pregunta no es *si* va a pasar. Ya está pasando. La pregunta es: **¿van a ser los que programan el futuro, o los que simplemente lo usan?**

---

**I. 🧠 Tu cerebro es la herramienta más poderosa que existe**

Ninguna IA puede reemplazar la curiosidad humana genuina. Las máquinas optimizan lo que ya existe. **Solo los humanos sueñan con lo que todavía no existe.** Alimentá ese cerebro: leé, preguntá, cuestioná, aprendé cosas que te parezcan imposibles. Cada hora de estudio es una ventaja que ningún algoritmo te puede robar.

**II. 🎵 La creatividad es tu superpoder irreemplazable**

Practicás música no para ser famoso — practicás porque **crear algo de la nada es lo más humano que existe.** Una máquina puede generar millones de canciones en un segundo, pero no puede sentir lo que vos sentís cuando encontrás una melodía que te parte el corazón. Esa emoción es tuya. Protegela. Desarrollala. Es tu escudo contra la automatización.

**III. ⚙️ Entendé la tecnología, no la temas**

Los que van a dominar el futuro no son los que huyen de la IA — son los que la entienden y la dirigen. **Aprendé a programar. Aprendé cómo funcionan las redes que usás todos los días.** Cuando sabés cómo está hecha la herramienta, sos el carpintero. Cuando no sabés, sos el clavo.

**IV. 🌍 Usá la tecnología para resolver problemas reales**

El mundo tiene problemas enormes: el clima, el hambre, las enfermedades, la desigualdad. **La generación de ustedes tiene, por primera vez en la historia, herramientas suficientes para resolver todos esos problemas.** No malgasten esas herramientas mirando videos de 30 segundos. Úsenlas para construir cosas que importen.

**V. 📵 El celular es una herramienta, no una droga**

Las empresas tecnológicas más inteligentes del mundo contratan equipos enteros de psicólogos para que no puedas dejar de scrollear. **No es debilidad caer en la trampa — es el diseño.** Pero ahora que lo sabés, tenés el poder de elegir. Cada vez que elegís estudiar, practicar o crear en lugar de scrollear, le ganás a un sistema de mil millones de dólares diseñado para vencerte.

**VI. 🤝 La inteligencia más valiosa siempre será la emocional**

Las IAs pueden ganarle al mejor ajedrecista del mundo, pero no pueden abrazar a alguien que está triste. No pueden ser amigos de verdad. No pueden liderar con empatía. **Ser un buen ser humano — honesto, empático, valiente — nunca va a ser automatizable.** El carácter importa más que el cociente intelectual.

**VII. 🚀 El orden y la disciplina son el combustible del despegue**

Tender la cama, ordenar la mochila, hacer las tareas — no son reglas caprichosas. **Son el entrenamiento.** Los grandes proyectos, los cohetes, las vacunas, las obras de arte que cambiaron el mundo — todos empezaron con alguien que era capaz de hacer lo que tenía que hacer, aunque no tuviera ganas. La disciplina de hoy es la libertad de mañana.

---

> 🏕️ **El mundo necesita lo que ustedes pueden ser.** No en veinte años. Ahora. Cada hábito que construyen hoy es un ladrillo de la persona que van a ser mañana. **Sean curiosos. Sean disciplinados. Sean creativos. Sean humanos.** Eso es lo que ninguna inteligencia artificial puede reemplazar.
>
> *"El sentido de la vida es transformar una existencia finita, vulnerable y parcialmente absurda en una trayectoria consciente de cuidado, creación, verdad y responsabilidad."*
>
> — Firmado con amor y mucha esperanza, Papá 👨 y Mamá 👩  
> *Lucas M. Vicente*

---

---

## Historial de versiones

| Versión | Fecha | Cambios |
|---|---|---|
| **v2.0.0** | Jun 2026 | 🏆 Ranking familiar · 🎁 Sistema de recompensas · 😊 Estado de ánimo diario · 📜 Manifiesto en el header |
| **v1.2.0** | Jun 2026 | 📅 Calendario en español · 📜 Manifiesto familiar |
| **v1.1.0** | Jun 2026 | ⭐ Puntos y niveles · 🔥 Racha de días seguidos |
| **v1.0.0** | Jun 2026 | 🚀 App inicial — tareas, música, dientes, Google Sheets, PWA |

---

Hecho con ❤️ para la familia Vicente De Pedro
