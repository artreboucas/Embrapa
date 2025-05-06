// src/controllers/dataController.js
const { readSpreadsheet, writeSpreadsheet } = require('../services/spreadsheetService');

async function getData(req, res) {
  try {
    const data = readSpreadsheet();
    let filtered = data;

    for (let key in req.query) {
      filtered = filtered.filter(item =>
        String(item[key]).toLowerCase() === String(req.query[key]).toLowerCase()
      );
    }

    res.json(filtered);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao ler dados.' });
  }
}

async function addData(req, res) {
  try {
    const newItem = req.body;
    const updated = writeSpreadsheet(newItem);
    res.status(201).json({ message: 'Dados adicionados com sucesso', item: updated });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar dados.' });
  }
}

module.exports = { getData, addData };
