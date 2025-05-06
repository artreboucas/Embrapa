// src/services/spreadsheetService.js
const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '../../data/implantacaocajueiroanaosimulacao.xlsx');

function readSpreadsheet() {
  if (!fs.existsSync(filePath)) return [];

  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.SheetNames[0];
  const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
  return data;
}

function writeSpreadsheet(newItem) {
  const existingData = readSpreadsheet();
  existingData.push(newItem);

  const newSheet = xlsx.utils.json_to_sheet(existingData);
  const newWorkbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(newWorkbook, newSheet, 'Sheet1');
  xlsx.writeFile(newWorkbook, filePath);

  return newItem;
}

module.exports = { readSpreadsheet, writeSpreadsheet };
