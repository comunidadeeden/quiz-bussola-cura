const LEADS_CONFIG = {
  spreadsheetId: "11YDtO0DfVx9ETFHf6_cNy4N6OFq9S8j6CX7dKHHvQ_8",
  sheetName: "Leads Radar de Narcisista",
  quizVariant: "radar_de_narcisista",
  source: "quiz_radar_de_narcisista",
  submissionIdColumn: "submission_id"
};

const DATE_FIELDS = new Set([
  "primeiro_envio_em", "atualizado_em", "opening_viewed_at", "capture_viewed_at",
  "lead_submitted_at", "qualified_at", "quiz_started_at", "quiz_completed_at",
  "result_viewed_at", "checkout_clicked_at", "purchase_confirmed_at"
]);

function doGet() {
  return response_({ ok: true, quiz_variant: LEADS_CONFIG.quizVariant });
}

function doPost(event) {
  try {
    const raw = event && event.postData && event.postData.contents ? JSON.parse(event.postData.contents) : {};
    if (raw.quiz_variant && raw.quiz_variant !== LEADS_CONFIG.quizVariant) throw new Error("quiz_variant inválido");
    if (raw.source && raw.source !== LEADS_CONFIG.source) throw new Error("source inválido");

    const payload = normalizePayload_(raw);
    const spreadsheet = SpreadsheetApp.openById(LEADS_CONFIG.spreadsheetId);
    const sheet = spreadsheet.getSheetByName(LEADS_CONFIG.sheetName);
    if (!sheet) throw new Error(`Aba ${LEADS_CONFIG.sheetName} não encontrada.`);

    let ignoredStaleEvent = false;
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(String);
      const row = findRow_(sheet, headers, payload.submission_id);
      const current = sheet.getRange(row, 1, 1, headers.length).getValues()[0];

      if (isStalePayload_(headers, current, payload)) {
        ignoredStaleEvent = true;
      } else {
        if (payload.email || payload.telefone) {
          payload.contato_repetido = isRepeatedContact_(sheet, headers, row, payload.email, payload.telefone) ? "sim" : "não";
        }

        const values = headers.map((header, index) => {
          if (["primeiro_envio_em", "opening_viewed_at", "quiz_completed_at"].includes(header) && current[index]) return current[index];
          if (!Object.prototype.hasOwnProperty.call(payload, header)) return current[index] || "";
          return payload[header];
        });
        sheet.getRange(row, 1, 1, headers.length).setValues([values]);
      }
    } finally {
      lock.releaseLock();
    }

    return response_({ ok: true, submission_id: payload.submission_id || "", ignored_stale_event: ignoredStaleEvent });
  } catch (error) {
    return response_({ ok: false, error: String(error) });
  }
}

function isStalePayload_(headers, current, payload) {
  const index = headers.indexOf("atualizado_em");
  if (index < 0 || !current[index] || !payload.atualizado_em) return false;
  const stored = current[index] instanceof Date ? current[index] : new Date(current[index]);
  const incoming = payload.atualizado_em instanceof Date ? payload.atualizado_em : new Date(payload.atualizado_em);
  return !isNaN(stored.getTime()) && !isNaN(incoming.getTime()) && incoming.getTime() < stored.getTime();
}

function normalizePayload_(payload) {
  const out = {};
  Object.keys(payload || {}).forEach((key) => {
    let value = payload[key];
    if (value === undefined || value === null) return;
    if (key === "email") value = String(value).trim().toLowerCase();
    else if (key === "telefone" || key === "whatsapp") value = normalizePhone_(value);
    else if (DATE_FIELDS.has(key)) value = normalizeDate_(value);
    else if (Array.isArray(value)) value = value.map(String).join(" | ");
    else if (typeof value === "object") return;
    else value = String(value).trim();
    if (value !== "" && !(value instanceof Date && isNaN(value.getTime()))) out[key] = value;
  });
  return out;
}

function normalizePhone_(value) {
  const raw = String(value || "").trim();
  const digits = raw.replace(/\D/g, "");
  return raw.startsWith("+") && digits ? `+${digits}` : digits;
}

function normalizeDate_(value) {
  if (value instanceof Date) return value;
  const date = new Date(String(value));
  return isNaN(date.getTime()) ? "" : date;
}

function findRow_(sheet, headers, submissionId) {
  const idColumn = headers.indexOf(LEADS_CONFIG.submissionIdColumn) + 1;
  const id = String(submissionId || "").trim();
  if (id && idColumn > 0 && sheet.getLastRow() > 1) {
    const ids = sheet.getRange(2, idColumn, sheet.getLastRow() - 1, 1).getDisplayValues().flat();
    const match = ids.findIndex((value) => String(value) === id);
    if (match >= 0) return match + 2;
  }
  return Math.max(sheet.getLastRow() + 1, 2);
}

function isRepeatedContact_(sheet, headers, targetRow, email, phone) {
  if (sheet.getLastRow() < 2) return false;
  const emailColumn = headers.indexOf("email") + 1;
  const phoneColumn = headers.indexOf("telefone") + 1;
  const normalizedEmail = String(email || "").trim().toLowerCase();
  const normalizedPhone = normalizePhone_(phone).replace(/\D/g, "");
  const lastRow = sheet.getLastRow();
  const emails = emailColumn > 0 ? sheet.getRange(2, emailColumn, lastRow - 1, 1).getDisplayValues().flat() : [];
  const phones = phoneColumn > 0 ? sheet.getRange(2, phoneColumn, lastRow - 1, 1).getDisplayValues().flat() : [];
  return emails.some((value, index) => {
    if (index + 2 === targetRow) return false;
    const sameEmail = normalizedEmail && String(value).trim().toLowerCase() === normalizedEmail;
    const samePhone = normalizedPhone && String(phones[index] || "").replace(/\D/g, "") === normalizedPhone;
    return sameEmail || samePhone;
  });
}

function response_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
