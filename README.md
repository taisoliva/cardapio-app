# Cardápio

Aplicação de visualização de Cardápios de acordo com o horário de Brasilia. Nesta Aplicação você pode visualizar os cardápios disponíveis e realizar um pedido ou pode até mesmo criar um Cardápio, Categoria e Produtos. 

## Sobre

A aplicação conta com as seguintes as seguintes páginas:
- Home (/): Responsável por exibir os cardápios de acordo com o horário
- Criar (/criar): Responsável por abrir a página de formulários onde você pode navegar pelas tabs disponíveis
- Menu (/menu/:id) : Responsável por exibir um Menu pelo seu Id. Essa exibição ocorre organizando os produtos por categorias. Nesta mesma página você pode visualizar um produto específico e pedir.
- Você pode experimentar a aplicação clicando <a href="https://cardapio-app-9dq9.vercel.app/" > aqui</a>
<p align="center>
    <img width="50%" src="./src/assets/1.png" />
    <img width="50%" src="./src/assets/2.png" />
    <img width="50%" src="./src/assets/3.png" />
    <img width="50%" src="./src/assets/4.png" />
    <img width="50%" src="./src/assets/5.png" />
</p>

        
## Como Rodar

1. Clone este repositório em <a href="https://github.com/taisoliva/cardapio-app"> clique aqui </a>
2. Instale todas as dependências
  ```bash
      npm i
  ```
3. Na raiz do seu diretório crie um arquivo chamado .env.local e inicialize com as variáveis de ambiente descritas em .env.example.
   ```
    URL= URL_DO_SERVIDOR
    NEXT_PUBLIC_LOCAL= URL_DO_SERVIDOR
   ```
4. Por fim rode o seguinte comando para inicializar a aplicação:
```
  npm run dev
```

## Principais Tecnologias
<div>
    <img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
   <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
   <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white"/>
</div>

## Criando formulário

1. Na criação de um Menu é obrigatório passar um nome e escolher entre Diurno ou Noturno, por padrão temos Diurno.
2. Na criação de uma Categoria é obrigatório passar um nome.
3. No Produto todos os campos são obrigatórios, mas se atente para:
     - 3.1 O preço é separado por ponto e não vírgula
     - 3.2 A image precisa ser uma URL válida, verifique se começa com http por exemplo.
     - 3.3 A descrição é breve limitada a 150 caracters
     - 3.4 A categoria e o Menu sãi os que já estão cadastrados anteriormente.
