# TWITTER-BASIC-CLONE (Front-end)

Projeto para estudo.

## 🚀 Começando

Siga as instruções abaixo para a execução do projeto.

### 🔧 Instalação

1 -
  Faça um fork do projeto clicando no botão 'Fork' na parte superior direita do seu github.

2 -
   Faça um clone do projeto copiando o link SSH ou HTTPS disponivel no seu fork e rodando o seguinte comando no seu terminal:
   ```
   git clone 'seu link SSH ou HTTPS'
   ```
3 -
  Entre no arquivo e instale as dependencias necessarias:
  ```
   cd twitter2.0
  ```
   ```
   npm install
  ```
  ou
   ```
   yarn install
  ```
  
## ⚙️ Executando os testes


### 🔩 Testes Unitários (componentes)

O projeto possui testes unitários.
Os testes vão verificar a integridade do aplicativo testando seus principais componentes.

Dentro da pasta raiz do projeto, rode o seguinte comando:
```
npm run test
```
Ele irá rodar todos os testes automaticamente.
```

## ⚙️ Variáveis de ambiente

Para você executar o projeto em ambiente de desenvolvimento, você precisa configurar as seguintes variáveis de ambiente para 
ter acesso a validações de token que o app possui:

Crie um arquivo com o seguinte nome ".env", e dentro dele configure as seguintes variáveis:
```
SECRET_API_KEY=o segredo que você declarou no back end desta aplicação...
```
## 📦 JWT SECRET

 O projeto foi desenvolvido pensando na segurança do usuário, então foi criado uma chave SECRET para validar o usuário, na qual não estou disponibilizando 
 aqui neste repositório público.
 
 Para você rodar o projeto sem erros, você precisa criar um arquivo com nome "secret.ts" dentro da pasta "app" no BACK-END, que fica dentro de "src", e então
 criar uma constante SECRET com alguma palavra chave que você prefira e exporta-la como padrão.

## 📦 Desenvolvimento

Para rodar o projeto em modo de desenvolvimento você precisa ter todas as dependências instaladas.
Caso não tenha feito, rode o seguinte comando:

```
npm install
```
ou
```
yarn install
```
Com as dependências instaladas, basta apenas rodar o seguinte comando para rodar o projeto:
```
npm run dev
```
ou 
```
yarn run dev
```
Após o comando, o App vai estar rodando na porta 3000 do seu localhost.
Para acessa-lo basta colando o seguinte link na URL do seu navegador:
```
http://localhost:3000/
```
Certifique-se de que não há nenhuma mais nenhuma aplicação rodando na porta 3000 para rodar o projeto!

## ⚙️ Rotas

--Rotas--
- http://localhost:3000/ - Página de login do usuário;
- http://localhost:3000/signUp - Página de registro do usuário;
- http://localhost:3000/home - Página principal;
- http://localhost:3000/userProfile - Página de perfil do usuário;
- http://localhost:3000/userProfile/edit - Página de edição da conta do usuário;
- http://localhost:3000/error - Página de erro;
- http://localhost:3000/compose/tweet - Página de criação de tweet;
---

## 🛠️ Construído com

O projeto foi desenvolvido com as seguintes ferramentas:

* [TypeScript](https://www.typescriptlang.org/)
* [JavaScript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [NextJs](https://nextjs.org/)
* [Vercel](https://vercel.com/)
* [Jest](https://jestjs.io/)
* [RTL](https://testing-library.com/docs/react-testing-library/intro/)
* [ESlint](https://eslint.org/)
* [StyledComponents](https://styled-components.com/)
* [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)

## 📌 Versão e API

[Git](https://git-scm.com/) - para controle de versão.

## 🚀 Deploy
O deploy do projeto foi realizado utililizando:
* [Vercel](https://vercel.com/)

* Para ver o projeto em funcionamento, basta acessar este link: https://twitter2-0-ten.vercel.app/

---
