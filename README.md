
# MSFormTemplate

Esse template é um website com um formulário genérico utilizando de multi-step.

O multi-step é uma forma de fazer um formulário, essa forma consiste em etapas, que são seguidas conforme o usuário insere informações.

Geralmente utilizado para dividir o que o usuário deve inserir, por exemplo:

- 1º - Dados da conta (email, senha...)
- 2º - Informações pessoais (nome, endereço...)
- 3º - Forma de pagamento
- 4º - Confirmação da compra


## Utilização

### Como criar novas etapas
Para criar novas etapas é necessario criar uma nova div "step" e colocar o número dela, por exemplo:

` <div id="step4"><div>`


### Como adicionar um novo indicador da etapa
Para criar um novo indicador é necessário apenas uma nova div "step-indicator" e colocar o número ou icone que quiser, por exemplo:

`<div class="step-indicator">4</div>`

Para adicionar mais uma linha para conectar com o seu novo indicador crie uma nova div "step-line", por exemplo:

`<div class="step-line"></div>`

Para uma melhor utilização, sempre coloque a "step-line" entre dois "step-indicator" em seu código.



## Suporte

Caso precise de ajuda, entre em contato comigo através do discord **1matzh**


## Autor

- [@1Matzh](https://github.com/1Matzh)

