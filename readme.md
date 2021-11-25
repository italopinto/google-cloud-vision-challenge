# Desafio de visão computacional

<p align="center">
<img src="src/resources/show.gif" alt="Demo" title="Demo"  width="720" height="480"/>
</p>

## Descrição do desafio
Ler o texto de uma imagem usando uma api de cloud vision ou qualquer outra solução de visão computacional.

## Solução
Uma função em node.js que recebe um arquivo e usa a API do [Google Cloud Vision](https://cloud.google.com/vision), para retornar o texto da imagem.

## Requisitos para testar a solução
* Node.js.
* NPM, para baixar os pacotes necessários.

## Como usar
1. Tenha uma conta Google.
2. Siga esse tutorial: https://medium.com/analytics-vidhya/setting-up-google-cloud-vision-api-with-node-js-db29d1b6fbe2 , para criar um projeto no Google Cloud e habilitar o uso do Cloud Vision, bem como baixar a chave de acesso em JSON.
3. Salve a chave em JSON na pasta `src/textScraping`.
4. E execute no terminal o comando a seguir, na mesma pasta do arquivo `package.json`:
```
$ npm install
```
5. Finalmente, execute o comando abaixo e veja se funciona com a imagem que já está na pasta `src`, deve aparecer: `A739x`
```
$ node src/test.js
```

## Notas
* A chave do google tem que está em formato JSON e ser colocado na pasta `textScraping` dentro de `src`.
* As imagens devem ser postas na pasta `src` para o arquivo `test.js` poder acessá-las.
