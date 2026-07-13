const PESQUISA_RAIO_X_ISOLADA_CONFIG = {
  spreadsheetId: "1o8GI6EUFUtIPU1EqNu5tTItEBG5J85tVlKerEbwbUtQ",
  sheetName: "Pesquisa Raio X",
  submissionIdColumn: "submission_id"
};

function doPost(event) {
  try {
    const payload = parsePayload_(event);
    const spreadsheet = SpreadsheetApp.openById(PESQUISA_RAIO_X_ISOLADA_CONFIG.spreadsheetId);
    const sheet = spreadsheet.getSheetByName(PESQUISA_RAIO_X_ISOLADA_CONFIG.sheetName);
    if (!sheet) throw new Error("Aba Pesquisa Raio X não encontrada.");

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(String);
      const row = findOrCreateRow_(sheet, headers, payload);
      const current = sheet.getRange(row, 1, 1, headers.length).getValues()[0];
      const values = headers.map((header, index) => {
        if (header === "primeiro_envio_em" && current[index]) return current[index];
        return Object.prototype.hasOwnProperty.call(payload, header) ? normalizeValue_(payload[header]) : (current[index] || "");
      });
      sheet.getRange(row, 1, 1, headers.length).setValues([values]);
    } finally {
      lock.releaseLock();
    }

    return jsonResponse_({ ok: true, submission_id: payload.submission_id || "" });
  } catch (error) {
    return jsonResponse_({ ok: false, error: String(error) });
  }
}

function doGet() {
  return jsonResponse_({ ok: true, message: "Webhook exclusivo da Pesquisa Raio X ativo." });
}

function parsePayload_(event) {
  return event && event.postData && event.postData.contents ? JSON.parse(event.postData.contents) : {};
}

function findOrCreateRow_(sheet, headers, payload) {
  const idColumn = headers.indexOf(PESQUISA_RAIO_X_ISOLADA_CONFIG.submissionIdColumn) + 1;
  const submissionId = String(payload.submission_id || "").trim();
  if (submissionId && idColumn > 0 && sheet.getLastRow() > 1) {
    const ids = sheet.getRange(2, idColumn, sheet.getLastRow() - 1, 1).getValues().flat();
    const found = ids.findIndex((value) => String(value) === submissionId);
    if (found >= 0) return found + 2;
  }
  return Math.max(sheet.getLastRow() + 1, 2);
}

function normalizeValue_(value) {
  if (Array.isArray(value)) return value.join(" | ");
  return value === null || value === undefined ? "" : String(value);
}

function jsonResponse_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
