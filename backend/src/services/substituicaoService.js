const xlsx = require('xlsx');
const path = require('path');

function carregarPlanilha(nomeArquivo) {
  const filePath = path.join(__dirname, `../../data/${nomeArquivo}`);
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  return data;
}

function processarSubstituicaoBase() {
  const linhas = carregarPlanilha('substituicaodecopasimulacao.xlsx');
  
  // Linha 3 (index 2) com hectares e qtd de plantas
  const linhaHectaresPlantas = linhas[2];
  const hectares = Number(linhaHectaresPlantas[1]) || 1;
  const qtdPlantas = Number(linhaHectaresPlantas[4]) || 100;
  
   // Blocos principais da planilha
  const preparoArea = linhas.slice(5, 12); // Linhas de preparo de área
  const insumos = linhas.slice(14, 19); // Linhas de insumos
  const preparoSolo = linhas.slice(21, 24); // Linhas de preparo do solo
  const servicos = linhas.slice(26, 30); // Linhas de serviços
  const subtotalPreparoArea = linhas[12]; // Subtotal do preparo de área
  const subtotalPreparoSolo = linhas[24]; // Subtotal do preparo do solo
  const subtotalInsumos = linhas[19]; // Subtotal dos insumos
  const subtotalServicos = linhas[30]; // Subtotal dos serviços
  const valorTotal = linhas[31]; // Valor total final

  // Monta o JSON final
  const jsonFinal = {
    titulo: linhas[0][0] || "",
    hectaresPlantas: {
      hectares: hectares,
      qtdPlantas: qtdPlantas
    },
    preparoArea: preparoArea.map(linha => ({
      descricao: linha[0] || "",
      unidade: linha[1] || "",
      quantidade: linha[2] || "",
      valorUnitario: linha[3] || "",
      valorTotal: linha[4] || ""
    })),
    subtotalPreparoArea: {
      descricao: subtotalPreparoArea[0] || "",
      valorTotal: subtotalPreparoArea[4] || ""
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
    preparoSolo: preparoSolo.map(linha => ({
      descricao: linha[0] || "",
      unidade: linha[1] || "",
      quantidade: linha[2] || "",
      valorUnitario: linha[3] || "",
      valorTotal: linha[4] || ""
    })),
    subtotalPreparoSolo: {
      descricao: subtotalPreparoSolo[0] || "",
      valorTotal: subtotalPreparoSolo[4] || ""
    },
    servicos: servicos.map(linha => ({
      descricao: linha[0] || "",
      unidade: linha[1] || "",
      quantidade: linha[2] || "",
      valorUnitario: linha[3] || "",
      valorTotal: linha[4] || ""
    })),
    subtotalServicos: {
      descricao: subtotalServicos[0] || "",
      valorTotal: subtotalServicos[4] || ""
    },
    valorTotal: {
      descricao: valorTotal[0] || "",
      valorTotal: valorTotal[4] || ""
    }
  };

  return jsonFinal;
}

module.exports = { processarSubstituicaoBase };
