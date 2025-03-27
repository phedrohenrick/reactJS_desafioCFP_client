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

✅ **[Node.js](https://nodejs.org/en/download)** instalado
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
Se você tem o Node.js e o npm instalados, va ate /reactJS_desafioCFP_client-main, execute:

```sh
npm install
```
acesse o codigo em algum editor de texto de sua preferência, como o vscode.
## Executando o Projeto
Para rodar a aplicação localmente, acesse um terminal no vscode e escreva:

```sh
npm start
```

Principais Dependências
⚠️ se o projeto reclamar e se precisar instalar manualmente, execute os seguintes comandos:

O projeto utiliza as seguintes bibliotecas :

📌 Axios - Para realizar chamadas HTTP à API:

```sh
npm install axios
```

📌 Bootstrap - Para estilização da interface:

```sh
npm install bootstrap
```
📌 react-router-dom - Para configuração das rotas:

```sh
npm install react-router-dom
```


A aplicação será aberta no navegador padrão em:
```sh
http://localhost:3000

```

## ⚙️ Configuração da API
Por padrão, o client consumirá a API em produção, ou seja, assim que startar esse projeto reactjs já poderá testar a api quarkus. 

Caso queira apontar para uma API local ou outra URL, edite o arquivo package.json na raiz do projeto:

```sh
  "proxy": "http://localhost:8080"

```

⚠️ Após alterar o arquivo, reinicie o servidor para aplicar as mudanças!

Caso precise testar manualmente, pode utilizar Postman para enviar requisições à API.


## 🌟 Conheça Meu Portfólio

Convido você a conhecer mais sobre meus  outros projetos que desenvolvi. Acesse meu portfólio e veja minhas criações!

🔗[Meu Portfólio](https://www.phedrohenrick-portifolio.com.br/)

Fique à vontade para explorar, dar feedbacks e entrar em contato! 🚀
