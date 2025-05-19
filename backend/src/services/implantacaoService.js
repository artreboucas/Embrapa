const xlsx = require('xlsx');
const path = require('path');

function carregarPlanilha(nomeArquivo) {
  const filePath = path.join(__dirname, `../../data/${nomeArquivo}`);
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  return data;
}

function processarImplantacaoBase() {
  const linhas = carregarPlanilha('implantacaocajueiroanaosimulacao.xlsx');
  
  const linhaHectaresPlantas = linhas[2];
  const hectares = Number(linhaHectaresPlantas[1]) || 1;
  const qtdPlantas = Number(linhaHectaresPlantas[4]) || 204;
  
  // Blocos principais da planilha
  const preparoSolo = linhas.slice(5, 26); 
  const insumos = linhas.slice(28, 35); 
  const subtotalSolo = linhas[26]; 
  const subtotalInsumos = linhas[35]; 
  const valorTotal = linhas[36]; 

  // Monta o JSON final
  const jsonFinal = {
    titulo: linhas[0][0] || "",
    hectaresPlantas: {
      hectares: hectares,
      qtdPlantas: qtdPlantas
    },
    preparoSolo: preparoSolo.map(linha => ({
      descricao: linha[0] || "",
      unidade: linha[1] || "",
      quantidade: linha[2] || "",
      valorUnitario: linha[3] || "",
      valorTotal: linha[4] || ""
    })),
    subtotalSolo: {
      descricao: subtotalSolo[0] || "",
      valorTotal: subtotalSolo[4] || ""
    },
    insumos: insumos.map(linha => ({
      descricao: linha[0] || "",
      unidade: linha[1] || "",
      quantidade: linha[2] || "",
      valorUnitario: linha[3] || "",
      valorTotal: linha[4] || ""
    })),
    subtotalInsumos: {
      descricao: subtotalInsumos[0] || "",
      valorTotal: subtotalInsumos[4] || ""
    },
    valorTotal: {
      descricao: valorTotal[0] || "",
      valorTotal: valorTotal[4] || ""
    }
  };

  return jsonFinal;
}

module.exports = { processarImplantacaoBase };
