export const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    }).format(value)
  }
  
  export const preparoSoloData = [
    { item: "Desmatamento", unit: "h/trator", qty: 20, unitValue: 150.00 },
    { item: "Coivara e queima", unit: "h/diária", qty: 15, unitValue: 80.00 },
    { item: "Acabamento", unit: "h/diária", qty: 10, unitValue: 70.00 },
    { item: "Gradagem pesada ou gradeadora", unit: "h/trator", qty: 25, unitValue: 120.00 },
    { item: "Gradagem niveladora", unit: "h/trator", qty: 15, unitValue: 110.00 },
    { item: "Calagem - distribuidor calcário", unit: "h/trator", qty: 12, unitValue: 130.00 },
    { item: "Marcação e abertura de covas", unit: "h/diária", qty: 8, unitValue: 90.00 },
    { item: "Piquetes", unit: "h/diária", qty: 8, unitValue: 90.00 },
    { item: "Mudas enxertadas", unit: "unid.", qty: 5000, unitValue: 5.00 },
    { item: "Distribuição e plantio das mudas", unit: "unid.", qty: 5000, unitValue: 0.50 },
    { item: "Confecção de bacias", unit: "h/diária", qty: 30, unitValue: 75.00 },
    { item: "Aplicação de cobertura morta", unit: "h/diária", qty: 20, unitValue: 65.00 },
    { item: "Adubação de fundação", unit: "h/diária", qty: 18, unitValue: 70.00 },
    { item: "1a Adubação de cobertura", unit: "h/diária", qty: 15, unitValue: 70.00 },
    { item: "Controle fitossanitário - Formicidas", unit: "h/diária", qty: 10, unitValue: 85.00 },
    { item: "Replantio", unit: "h/diária", qty: 5, unitValue: 75.00 },
    { item: "2a Adubação de cobertura", unit: "h/diária", qty: 12, unitValue: 70.00 },
    { item: "Capina/Coroamento", unit: "h/diária", qty: 25, unitValue: 65.00 },
    { item: "Roço na entrelinha", unit: "h/trator", qty: 18, unitValue: 110.00 },
    { item: "Controle fitossanitário - pulverização", unit: "h/diária", qty: 8, unitValue: 90.00 },
    { item: "3a Adubação de cobertura", unit: "h/diária", qty: 10, unitValue: 70.00 }
  ]
  
  export const insumosData = [
    { item: "Calcário dolomítico", unit: "ton", qty: 10, unitValue: 300.00 },
    { item: "Ureia (3 doses)", unit: "kg", qty: 300, unitValue: 3.50 },
    { item: "Cloreto de potássio (3 doses)", unit: "kg", qty: 200, unitValue: 4.20 },
    { item: "Inseticidas", unit: "litro", qty: 15, unitValue: 80.00 },
    { item: "Fungicidas", unit: "kg", qty: 10, unitValue: 120.00 },
    { item: "Formicidas", unit: "kg", qty: 5, unitValue: 150.00 },
    { item: "Superfosfato simples", unit: "ton", qty: 2, unitValue: 800.00 }
  ]