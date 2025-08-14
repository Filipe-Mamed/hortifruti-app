# Hortifruti App

Aplicativo desktop para gerenciamento de produtos de hortifruti, desenvolvido com **Electron**, **React** e **Node.js**.  
O sistema permite cadastrar, editar, excluir e visualizar produtos de forma prática e rápida.

## Funcionalidades

- Cadastro de produtos com nome, categoria, preço e estoque
- Listagem de produtos em tabela
- Edição e exclusão com confirmação
- Interface responsiva e intuitiva

## Tecnologias Utilizadas

### **Frontend**

- React
- Vite
- Bootstrap 5 / React Bootstrap
- Styled Components
- Axios

### **Backend**

- Node.js
- Express
- Prisma + SQLite
- Zod (validações)
- Passport.js (autenticação)
- Express-Session

### **Desktop**

- Electron

---

## Imagens

### **Tela de Login/Cadastro**

<img src="./assets/tela-de-login(1).png" alt="Tela de Login"/>
<hr/>
<img src="./assets//tela-de-criar-conta(2).png" alt="Tela de Criar conta"/>

### **Tela de Categorias**

<img src="./assets/tela-de-categorias(3).png" alt="Tela de Categorias"/>

### **Tela de Dashboard**

<img src="./assets/tela-de-dashboard(4).png" alt="Tela de Dashboard(1)"/>
<hr >
<img src="./assets/tela-de-dashboard(5).png" alt="Tela de Dashboard(2)"/>

### **Tela de Produtos**

<img src="./assets/tela-de-produtos(6).png" alt="Tela de Produtos(1)"/>
<hr/>
<img src="./assets/tela-de-produtos(7).png" alt="Tela de Produtos(2)"/>

### **Tela de Criar/Editar Produto**

<img src="./assets/tela-de-criar-produto(8).png" alt="Tela de Criar Produto"/>
<hr/>
<img src="./assets/tela-de-editar-produto(9).png" alt="Tela de Editar Produto"/>

### **Tela de Relatórios**

<img src="./assets//tela-de-relatorio(10).png" alt="Tela de Relatórios"/>

### **Tela de Perfil**

<img src="./assets/tela-de-perfil(11).png" alt="Tela de Perfil"/>

---

## Estrutura do Projeto

```bash
hortifruti-app
├── backend/   # API com Node.js, Express e Prisma
└── frontend/  # Interface com React/Electron

## Como Rodar o Projeto

# Clone o repositório
git clone https://github.com/Filipe-Mamed/hortifruti-app.git

cd backend # Entre na pasta backend
npm install # Instale as dependências do backend
npm run dev # Inicie o servidor backend

cd frontend # Entre na pasta frontend
npm install # Instale as dependências do frontend
npm run dev # Inicie o servidor frontend


```

## LICENÇA

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
