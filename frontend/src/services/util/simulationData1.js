export const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    }).format(value)
  }
  
  export const preparoSoloData = [
    { item: "Desmatamento", unit: "h/trator", qty: 20, unitValue: 400.00 },
    { item: "Coivara e queima", unit: "h/diária", qty: 15, unitValue: 60.00 },
    { item: "Acabamento", unit: "h/diária", qty: 10, unitValue: 60.00 },
    { item: "Gradagem pesada ou gradeadora", unit: "h/trator", qty: 25, unitValue: 200.00 },
    { item: "Gradagem niveladora", unit: "h/trator", qty: 15, unitValue: 200.00 },
    { item: "Calagem - distribuidor calcário", unit: "h/trator", qty: 12, unitValue: 250.00 },
    { item: "Marcação e abertura de covas", unit: "h/diária", qty: 8, unitValue: 60.00 },
    { item: "Piquetes", unit: "unid.", qty: 8, unitValue: 0.40 },
    { item: "Mudas enxertadas", unit: "unid.", qty: 50, unitValue: 5.00 },
    { item: "Distribuição e plantio das mudas", unit: "h/diária", qty: 50, unitValue: 60.00 },
    { item: "Confecção de bacias", unit: "h/diária", qty: 30, unitValue: 60.00 },
    { item: "Aplicação de cobertura morta", unit: "h/diária", qty: 20, unitValue: 60.00 },
    { item: "Adubação de fundação", unit: "h/diária", qty: 18, unitValue: 60.00 },
    { item: "1a Adubação de cobertura", unit: "h/diária", qty: 15, unitValue: 60.00 },
    { item: "Controle fitossanitário - Formicidas", unit: "h/diária", qty: 10, unitValue: 60.00 },
    { item: "Replantio", unit: "h/diária", qty: 5, unitValue: 60.00 },
    { item: "2a Adubação de cobertura", unit: "h/diária", qty: 12, unitValue: 60.00 },
    { item: "Capina/Coroamento", unit: "h/diária", qty: 25, unitValue: 60.00 },
    { item: "Roço na entrelinha", unit: "h/trator", qty: 18, unitValue: 200.00 },
    { item: "Controle fitossanitário - pulverização", unit: "h/diária", qty: 8, unitValue: 60.00 },
    { item: "3a Adubação de cobertura", unit: "h/diária", qty: 10, unitValue: 60.00 }
  ]
  
  export const insumosData = [
    { item: "Calcário dolomítico", unit: "kg", qty: 10, unitValue: 0.35 },
    { item: "Ureia (3 doses)", unit: "kg", qty: 300, unitValue: 3.40 },
    { item: "Cloreto de potássio (3 doses)", unit: "kg", qty: 200, unitValue: 3.60 },
    { item: "Inseticidas", unit: "kg/l", qty: 15, unitValue: 100.00 },
    { item: "Fungicidas", unit: "kg/l", qty: 10, unitValue: 130.00 },
    { item: "Formicidas", unit: "kg/l", qty: 5, unitValue: 25.00 },
    { item: "Superfosfato simples", unit: "kg", qty: 2, unitValue: 2.80 }
  ]
