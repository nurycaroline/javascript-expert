# Curso - Javascript Expert

## Modulo 1 - Javascript Testing

### Mock

Nesta aula vi na prática como criar e utilizar um mocks com um mini projeto para converter CSV em JSON, e criação de testes usando recursos nativos da linguagem.

Para praticar modifiquei o projeto da aula para tbm fazer o contrário JSON para CSV, executando os testes comparando se o resultado era o experado.

### Stubs

Nessa aula vi como usar o conceito Stub que é utilizado para substituir algum comportamento do sistema por objetos estáticos, por exemplo, 'mockar' o resultado da api do Star wars sem depender da internet e disponibilidade da api para executar os testes. Foi usado a lib Sinon que possui um metodo para stub que permite definirmos uma função que por baixo dos panos será subsitituida por um valor estático.

### Spies

Nessa aula vi como usar o conceito Spies que observa uma determinada função validando algumas informações, tais como: a quantidade de vezes que essa função foi chamada, com quais parâmetros e quais foram os resultados retornados. Os spies são uteis em cenários com funções recursivas.
Usando aa Lib Sinon, tem um metodo spy que retorna algumas informações.
Para praticar criei um teste para contar regresivo de 10 até 0.

### Testes end-to-end e Code Coverage

Nessa aula vi como criar uma API sem frameworks e implementar testes end-to-end e coverage.
Foi usado as libs mocha e superteste para testar o retorno das rotas do ponto de vista do usuário.

### Test Driven Development e Behaviour Driven Development

Nessa aula foi abordado o que é TDD e BDD e como são utilizados.

### Projeto Final


