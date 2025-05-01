export const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    }).format(value)
  }
  
export const preparoAreaData = [
    { item: "Limpeza da área (carregadeira)", unit: "h/máquina", qty: 15, unitValue: 250.00 },
    { item: "Retirada de material", unit: "h/máquina", qty: 10, unitValue: 180.00 },
    { item: "Gradagem pesada (trator)", unit: "h/trator", qty: 20, unitValue: 150.00 },
    { item: "Gradagem leve (trator)", unit: "h/trator", qty: 15, unitValue: 130.00 },
    { item: "Operação motosserra", unit: "h/diária", qty: 8, unitValue: 90.00 },
    { item: "Operação foice", unit: "h/diária", qty: 5, unitValue: 70.00 },
    { item: "Remoção de material", unit: "h/máquina", qty: 12, unitValue: 200.00 }
  ]
  
  export const insumosData = [
    { item: "Borbulha de clones de cajueiro", unit: "unid.", qty: 5000, unitValue: 5.50 },
    { item: "Calcário dolomítico", unit: "ton", qty: 8, unitValue: 300.00 },
    { item: "Gesso agrícola", unit: "ton", qty: 5, unitValue: 400.00 },
    { item: "Adubo orgânico", unit: "ton", qty: 20, unitValue: 250.00 },
    { item: "Fungicidas / inseticidas / herbicidas", unit: "kg", qty: 25, unitValue: 120.00 }
  ]
  
  export const preparoSoloData = [
    { item: "Aplicação de calcário", unit: "h/trator", qty: 10, unitValue: 150.00 },
    { item: "Gradagem", unit: "h/trator", qty: 15, unitValue: 130.00 },
    { item: "Transporte interno (carreta)", unit: "h/máquina", qty: 8, unitValue: 180.00 }
  ]
  
  export const servicosData = [
    { item: "Poda de cajueiro", unit: "h/diária", qty: 30, unitValue: 70.00 },
    { item: "Capina", unit: "h/diária", qty: 25, unitValue: 65.00 },
    { item: "Aplicação de defensivos", unit: "h/diária", qty: 15, unitValue: 80.00 },
    { item: "Clonagem de tocos", unit: "unid.", qty: 5000, unitValue: 1.50 }
  ]