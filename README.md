# 🤖 SauceDemo — Automação de Testes com Cypress

> Projeto de automação de testes E2E desenvolvido como parte do portfólio de QA.
> Ferramenta utilizada: **Cypress** | Aplicação testada: **SauceDemo**

---

## 📋 Sobre o Projeto

Este projeto automatiza testes End-to-End na aplicação [SauceDemo](https://www.saucedemo.com), cobrindo os módulos de **Login**, **Produtos** e **Carrinho**.

O objetivo é demonstrar habilidades em:

- Automação de testes E2E com Cypress
- Organização de testes por módulo
- Uso de seletores CSS e atributos `data-test`
- Validação de comportamentos esperados com assertions
- Boas práticas com `beforeEach` para reuso de código

---

## 🗂️ Estrutura do Projeto

```
📁 cypress-saucedemo/
├── 📁 cypress/
│   ├── 📁 e2e/
│   │   ├── login.cy.js         # Testes de autenticação
│   │   ├── produtos.cy.js      # Testes de listagem e detalhes
│   │   └── carrinho.cy.js      # Testes de carrinho e checkout
│   ├── 📁 fixtures/            # Dados de teste externos
│   └── 📁 support/             # Configurações e comandos customizados
├── cypress.config.js           # Configurações do Cypress
└── package.json                # Dependências do projeto
```

---

## 🔍 Escopo dos Testes

### Login
| ID | Cenário | Tipo | Resultado |
|---|---|---|---|
| CT001 | Login com sucesso | Positivo | ✅ PASSOU |
| CT002 | Login com senha incorreta | Negativo | ✅ PASSOU |
| CT003 | Login com campos vazios | Negativo | ✅ PASSOU |

### Produtos
| ID | Cenário | Tipo | Resultado |
|---|---|---|---|
| CT004 | Listar produtos com sucesso | Positivo | ✅ PASSOU |
| CT005 | Ordenar produtos por menor preço | Positivo | ✅ PASSOU |
| CT006 | Visualizar detalhes do produto | Positivo | ✅ PASSOU |

### Carrinho
| ID | Cenário | Tipo | Resultado |
|---|---|---|---|
| CT007 | Adicionar produto ao carrinho | Positivo | ✅ PASSOU |
| CT008 | Remover produto do carrinho | Positivo | ✅ PASSOU |
| CT009 | Finalizar compra com sucesso | Positivo | ✅ PASSOU |

**Total: 9 testes | ✅ 9 aprovados | ❌ 0 reprovados | Taxa: 100%**

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org) v18 ou superior
- [Git](https://git-scm.com)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/moraesfelippe/cypress-saucedemo.git

# Entre na pasta
cd cypress-saucedemo

# Instale as dependências
npm install
```

### Executar com interface gráfica

```bash
npx cypress open
```

### Executar em modo headless (sem interface)

```bash
npx cypress run
```

---

## 🛠️ Tecnologias

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 👤 Autor

**Felipe Martins**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/moraesfelippe)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/moraesfelippe)
