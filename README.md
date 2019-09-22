Esse projeto foi desenvolvido com a lib React [Create React App](https://github.com/facebookincubator/create-react-app).

Para rodar o projeto de tarefas é necessário seguir alguns passos

## CONFIGURAÇÃO PARA RODAR O PROJETO

* `dependências necessárias para rodar`
É preciso instalar:
O node.js a partir da versão 6.0 => link para download: (https://nodejs.org/en/)
O npm (node package manager) => link para download: (https://www.npmjs.com/)
Um console de comando para executar o projeto, o que usei foi o (http://cmder.net/), mas fique a vontade
para usar um de sua preferência.


crud_tarefas_react é dividido em duas pastas:

* `backend-json-server` É o backend da aplicação, foi desenvolvido com json-server, para manipulação dos dados.
* `frontend-react` É o frontend da aplicação feito em reactjs.

<br/>

Para isso, será necessário fazer a instalação do json-server

* `backend-json-server` Instalação via NPM => npm install -g json-server na pasta (backend-json-server).
  
  * Existe um arquivo db.json onde estão guardados os dados da app.
  * Existe um arquivo package.json já gerado da pasta backend-json-server, o mesmo já está configurado para a       porta 3001 e rodar no browser.
  * A pasta node_modules do backend também já está contida no backend.

   <br> 

   * `link para instruções se necessário` (https://www.devpleno.com/json-server-como-criar-uma-rest-api-para-testes-de-forma-simples/)

   
   Os dados da aplicação poderão ser vistos no browser pelo endereço: =>
   * `http://localhost:3001`
   
   Esse caminho já está configurado no package.json da pasta backend como: =>   
   * `"start": "json-server --watch db.json --port 3001"` 

   Ao final executar a pasta com o comando `npm start`


<br/>

Para configuração do projeto front-end serão necessários alguns passos

* `frontend-react` Com o console aberto, vá na pasta `frontend-react` e execute o comando
   npm install para instalar as dependências do projeto. serão necessárias algumas dependências, tais como:
   
   `npm install axios`
   `npm install bootstrap`
   `npm install font-awesome`
   `npm install react-router`
   `npm i react-router-dom`

   Obs.: os comandos acima, é pro caso de não vir na pasta node_modules, mas por default já vem. Caso contrário, intalar de um por um.

   Ao final de tudo, executar a pasta front-end com o comando `npm start`.


  Obs.: As duas pastas tem que está rodando em duas telas de console, tanto front como back.









