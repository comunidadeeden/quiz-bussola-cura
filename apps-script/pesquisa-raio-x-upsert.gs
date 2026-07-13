const PESQUISA_RAIO_X_CONFIG = {
  spreadsheetId: "1y8flaW1dDzGUpV9wXnoug0ADVxUUWjtMk5v-z6ygjlg",
  sheetName: "Pesquisa Raio X",
  submissionIdColumn: "submission_id"
};

function doPost(event) {
  try {
    const payload = parsePayload_(event);
    const sheetName = payload.aba || payload.sheet_name || PESQUISA_RAIO_X_CONFIG.sheetName;
    const spreadsheet = SpreadsheetApp.openById(PESQUISA_RAIO_X_CONFIG.spreadsheetId);
    const sheet = spreadsheet.getSheetByName(sheetName);

    if (!sheet) throw new Error(`Aba não encontrada: ${sheetName}`);

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const headers = getHeaders_(sheet);
      const row = findOrCreateRow_(sheet, headers, payload);
      writePayload_(sheet, headers, row, payload);
    } finally {
      lock.releaseLock();
    }

    return jsonResponse_({ ok: true, submission_id: payload.submission_id || "" });
  } catch (error) {
    return jsonResponse_({ ok: false, error: String(error) });
  }
}

function doGet() {
  return jsonResponse_({ ok: true, message: "Webhook da Pesquisa Raio X ativo." });
}

function parsePayload_(event) {
  const body = event && event.postData && event.postData.contents;
  if (!body) return {};
  return JSON.parse(body);
}

function getHeaders_(sheet) {
  const width = sheet.getLastColumn();
  return sheet.getRange(1, 1, 1, width).getValues()[0].map(String);
}

function findOrCreateRow_(sheet, headers, payload) {
  const idColumn = headers.indexOf(PESQUISA_RAIO_X_CONFIG.submissionIdColumn) + 1;
  const submissionId = String(payload.submission_id || "").trim();

  if (submissionId && idColumn > 0 && sheet.getLastRow() > 1) {
    const ids = sheet.getRange(2, idColumn, sheet.getLastRow() - 1, 1).getValues().flat();
    const match = ids.findIndex((value) => String(value) === submissionId);
    if (match >= 0) return match + 2;
  }

  return Math.max(sheet.getLastRow() + 1, 2);
}

function writePayload_(sheet, headers, row, payload) {
  const current = sheet.getRange(row, 1, 1, headers.length).getValues()[0];
  const values = headers.map((header, index) => {
    if (header === "primeiro_envio_em" && current[index]) return current[index];
    if (Object.prototype.hasOwnProperty.call(payload, header)) return normalizeValue_(payload[header]);
    return current[index] || "";
  });

  sheet.getRange(row, 1, 1, headers.length).setValues([values]);
}

function normalizeValue_(value) {
  if (Array.isArray(value)) return value.join(" | ");
  if (value === null || value === undefined) return "";
  return String(value);
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
