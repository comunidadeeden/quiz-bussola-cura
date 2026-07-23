const RAIOX01_LEADS_CONFIG = {
  spreadsheetId: "1OBr2lZO_AyVS30f2_KD0qwLtrBxyY-8owmbVCq50KK4",
  sheetName: "Leads Raio X 01",
  submissionIdColumn: "submission_id"
};

function doGet() {
  return response_({ ok: true, message: "Webhook exclusivo do Quiz Raio X 01 ativo." });
}

function doPost(event) {
  try {
    const payload = event && event.postData && event.postData.contents ? JSON.parse(event.postData.contents) : {};
    const spreadsheet = SpreadsheetApp.openById(RAIOX01_LEADS_CONFIG.spreadsheetId);
    const sheet = spreadsheet.getSheetByName(RAIOX01_LEADS_CONFIG.sheetName);
    if (!sheet) throw new Error("Aba Leads Raio X 01 não encontrada.");

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(String);
      const row = findRow_(sheet, headers, payload.submission_id);
      const current = sheet.getRange(row, 1, 1, headers.length).getValues()[0];
      const values = headers.map((header, index) => {
        if (header === "primeiro_envio_em" && current[index]) return current[index];
        if (Object.prototype.hasOwnProperty.call(payload, header)) return normalize_(payload[header]);
        return current[index] || "";
      });
      sheet.getRange(row, 1, 1, headers.length).setValues([values]);
    } finally {
      lock.releaseLock();
    }

    return response_({ ok: true, submission_id: payload.submission_id || "" });
  } catch (error) {
    return response_({ ok: false, error: String(error) });
  }
}

function findRow_(sheet, headers, submissionId) {
  const idColumn = headers.indexOf(RAIOX01_LEADS_CONFIG.submissionIdColumn) + 1;
  const id = String(submissionId || "").trim();
  if (id && idColumn > 0 && sheet.getLastRow() > 1) {
    const ids = sheet.getRange(2, idColumn, sheet.getLastRow() - 1, 1).getValues().flat();
    const match = ids.findIndex((value) => String(value) === id);
    if (match >= 0) return match + 2;
  }
  return Math.max(sheet.getLastRow() + 1, 2);
}

function normalize_(value) {
  if (Array.isArray(value)) return value.join(" | ");
  return value === null || value === undefined ? "" : String(value);
}

function response_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
