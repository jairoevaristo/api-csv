# API UPLOAD FILE .CSV

 Uma API que recebi um arquivo .csv e salva as informações contidas nesse arquivo em um
 banco de dados.

 ## Tech's
 - NodeJS
 - TypeScript
 - Typeorm
 - SQLite3

 ## Getting Started

 1 - Clone o repositorio para a sua máquina

 ```bash
  git clone https://github.com/jairoevaristo/api-csv.git
 ```

 2 - Instale as dependências necessárias

 ```bash
  yarn install
 ```

3 - Execute as migrations

 ```bash
  yarn typeorm migrantion:run
 ```

 4 - Inicie o servidor

 ```bash
  yarn start:dev
 ```

 ## Using

 Esta API foi desenvolvida para receber um arquivo .csv e salvar as informações contidas nele.

 Esta API espera receber um arquivo e salvar no banco de dados as seguintes informações: `name`, `category`, `quantity`, `price`.

 Para usar você pode criar uma planilha exemplo como a seguinte:

 ![image](.github/image.png)

 ## Routes

 A API executará na porta `3000`, para ter acesso as rotas é preciso colocar um prefixo antes do recurso, `/api/v1`.

 - Rota responsável pelo upload, recebe o arquivo .csv, envie o arquivo, com o nome do campo `uploaded_file` [POST].

 ```bash
  localhost:3000/api/v1/upload/send
 ```
 - Rota responsável por retornar as informações que estão salvas no banco de dados [GET].

 ```bash
  localhost:3000/api/v1/upload/
 ```