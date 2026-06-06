# 🏕️ Campers App

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

Hecho con ❤️ para la familia Vicente De Pedro
