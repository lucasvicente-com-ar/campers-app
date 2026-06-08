// =====================================================
// CAMPERS APP — Google Apps Script
// =====================================================
// INSTRUCCIONES:
// 1. Abrí Google Sheets en drive.google.com → Nuevo → Planilla
// 2. Dale un nombre, ej: "Campers App - Registros"
// 3. En el menú: Extensiones → Apps Script
// 4. Borrá todo el código que hay y pegá este script
// 5. Guardá (Ctrl+S)
// 6. Click en "Implementar" → "Nueva implementación"
//    - Tipo: Aplicación web
//    - Ejecutar como: Yo (tu cuenta)
//    - Quién tiene acceso: Cualquier usuario
// 7. Click en "Implementar" y copiá la URL que aparece
// 8. Pegá esa URL en tareas_diarias.html donde dice PEGAR_URL_AQUI
// =====================================================

const SHEET_NAME = 'Registros';

function doPost(e) {
  try {
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    let sheet   = ss.getSheetByName(SHEET_NAME);

    // Crear la hoja con encabezados si no existe
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Timestamp', 'Nombre', 'Fecha', 'Ánimo',
        'Uniformes', 'Mochila', 'Dormitorio',
        'Tareas Colegio', 'Música', 'Dientes',
        'Lectura', 'Resumen Lectura'
      ]);
      sheet.getRange(1, 1, 1, 12).setFontWeight('bold');
    }

    const datos = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      datos.nombre          || '',
      datos.fecha           || '',
      datos.animo           || '',
      datos.uniformes       || '',
      datos.mochila         || '',
      datos.dormitorio      || '',
      datos.tareas          || '',
      datos.musica          || '',
      datos.dientes         || '',
      datos.lectura         || '',
      datos.resumenLectura  || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Permite testear con GET desde el navegador
function doGet() {
  return ContentService
    .createTextOutput('Campers App Script activo ✅')
    .setMimeType(ContentService.MimeType.TEXT);
}
