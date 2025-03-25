# 🌍 Client React.js - Interface para a API Quarkus  

Este projeto é um **client frontend** desenvolvido em **React.js** para interagir com a API construída em **Quarkus**. Ele permite consumir os serviços da API, enviar requisições e exibir os dados de forma amigável.  

---

## 📌 Tecnologias Utilizadas  

- **React.js** - Biblioteca para construção de interfaces web.  
- **Axios** - Cliente HTTP para requisições à API.  
- **Bootstrap** - Framework CSS para estilização responsiva.  

---

##  Pré-requisitos  

Antes de começar, verifique se possui os seguintes requisitos:  

✅ **[Node.js](https://nodejs.org/en/download)** instalado (recomendado: versão LTS)  
✅ **Git** instalado para clonar o repositório  

Se não tiver o **Node.js**, pode instalá-lo a partir de [aqui](https://nodejs.org/).  

---

## Instalação  

Siga os passos abaixo para baixar e rodar o projeto corretamente:  

### 🔹 **1. Clonar o repositório**  

```sh
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO_FRONTEND.git
cd SEU_REPOSITORIO_FRONTEND
```
### 🔹 **2. instalar as dependências**  
Se você tem o Node.js e o npm instalados, execute:

```sh
npm install
```

## Executando o Projeto
Para rodar a aplicação localmente:

```sh
npm start
```
A aplicação será aberta no navegador padrão em:

```sh
http://localhost:3001

```

##⚙️ Configuração da API
Por padrão, o client consumirá a API em produção. Caso queira apontar para uma API local ou outra URL, edite o arquivo package.json na raiz do projeto:

```sh
  "proxy": "http://localhost:8080"

```

⚠️ Após alterar o arquivo, reinicie o servidor para aplicar as mudanças!

 Principais Dependências
O projeto utiliza as seguintes bibliotecas:

📌 Axios - Para realizar chamadas HTTP à API:

```sh
npm install axios
```

📌 Bootstrap - Para estilização da interface:

```sh
npm install bootstrap
```
Se precisar instalar manualmente, execute os comandos acima.

##📝 Estrutura do Projeto

📂 src/
 ├── 📂 components/   # Componentes reutilizáveis
 ├── 📂 services/     # Configuração do Axios para requisições à API
 ├── 📂 utils/       # navegação do projeto
 ├── App.js          # Componente principal
 ├── index.js        # Ponto de entrada do React
 ├── .env            # Configuração da URL da API
 └── package.json    # Dependências e configurações do projeto
✅ Testando a API


Caso precise testar manualmente, pode utilizar Postman para enviar requisições à API.

