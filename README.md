## o que falta:
- testes

Endpoints da Api: 
[http://localhost:3000/api/simulador/substituicao] // tabela substituicaodecopasimulacao
[http://localhost:3000/api/simulador/implantacao]  // tabela implantacaocajueiroanaosimulacao

## Arquitetura do projeto
### SIMULADOR HUB CAJU EMBRAPA

---

## 🌐 Tecnologias Utilizadas

- **Frontend**: React + Vite + TailwindCSS  
- **Backend**: Node.js + Express  
- **Estilo**: CSS Modularizado com suporte ao Tailwind  
- **Dados**: Planilhas `.xlsx` importadas e processadas no backend  

---

## 🏗️ Estrutura de Diretórios

```bash
SIMULADOR
├── backend
│   ├── data/
│   │   ├── implantacaojeiroanoosimulacao.xlsx
│   │   └── substituicaodecopasimulacao.xlsx
│   ├── src/
│   ├── server.js
│   ├── package.json
│   └── .gitignore
│
├── frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── Cards/
│   │   │   ├── Charts/
│   │   │   └── tables/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── first-simulation/
│   │   │   └── second-simulation/
│   │   ├── services/
│   │   │   └── util/
│   │   │       ├── simulationData1.js
│   │   │       └── simulationData2.js
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── style.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── eslint.config.js
│   └── .gitignore
``` 
## 🧱 Estrutura Modular por Responsabilidade

### 🎨 Frontend

- Organizado por **domínio visual**, com pastas como `components`, `pages`, `services` e `styles`. Isso se aproxima bastante das abordagens *Atomic Design* ou *Feature-based Architecture*.
- Há uma separação clara entre:
  - **Camadas de apresentação** → `pages/` e `components/`
  - **Lógica de negócio** → `services/` e `util/`
- Essa organização facilita a escalabilidade, a manutenibilidade do código e a colaboração entre desenvolvedores.

### 🛠️ Backend

Padrão MVC

