# Curso — Javascript Expert

## Modulo 1 — Javascript Testing

### Mock

Nesta aula observei na prática como criar e utilizar um mocks com um mini projeto para converter CSV em JSON, e criação de testes usando recursos nativos da linguagem.

Para praticar modifiquei o projeto da aula para também fazer o contrário JSON para CSV, executando os testes comparando se o resultado era o esperado.

### Stubs

Nessa aula vi como usar o conceito Stub utilizado para substituir algum comportamento do sistema por objetos estáticos, por exemplo, 'mockar' o resultado da API do Star wars sem depender da internet e disponibilidade da API para executar os testes. Foi usado a lib. Sinon que possui um método para stub que permite definirmos uma função que por baixo dos panos será substituído por um valor estático.

### Spies

Nessa aula vi como usar o conceito Spies que observa uma determinada função validando algumas informações, tais como: a quantidade de vezes que essa função foi chamada, com quais parâmetros e quais foram os resultados retornados. Os spies são uteis em cenários com funções recursivas.
Usando a Lib. Sinon, tem um método spy que retorna algumas informações.
Para praticar criei um teste para contar regressivo de 10 até 0.

### Testes end-to-end e Code Coverage

Nessa aula vi como criar uma API sem frameworks e implementar testes end-to-end e coverage.
Foi usado as libs mocha e superteste para testar o retorno das rotas do ponto de vista do usuário.

### Test Driven Development e Behaviour Driven Development

Nessa aula foi abordado o que é TDD e BDD e como são utilizados.

### Projeto Final

No projeto final vi como criar testes unitários para uma aplicação de aluguel de carros usando TDD e BDD.
Na criação de teste foi utilizado as lib Sinon, Chai e Supertest, e todos os conceitos observados nas aulas anteriores.

## Modulo 2 — Conceitos fundamentais sobre o ciclo de vida do Javascript

### Javascript Strict Mode

More: [w3schools](https://www.w3schools.com/js/js_strict.asp)

Nova diretiva adicionada no javascript em 2015, com uma série de regras. Para evitar erros semânticos silenciosos.

### Call Stack e Memory Heap

Call stack guarda dados primitivos e o memory heap guarda dados do tipo de referência que podem crescer dinamicamente.

Call stack é a pilha de execuçãoo, e memory heap é a pilha de memória para os dados de tipo de referência.

### Tipo de Valor vs Tipo de Referência (Immutability vs Mutability)

Tipos de valor =  string, number, boolean
Tipos de referencia = array, objetos

Tipos de valor são apontados para o valor e tipos de referência é apontado para posição da memória.

Exemplo [aqui](./Conceitos%20fundamentais%20sobre%20o%20ciclo%20de%20vida%20do%20Javascript//demo01-ref-vs-valor/index.js)

### Coerção de Tipos & Objects lifecycle: toString, valueOf e Symbol.toPrimitive

Coerção de Tipos é a conversão de um valor para outro tipo, por exemplo, string para number. Podendo ser de forma implícita ou explicita.

- Usar sempre triplo igual ( === )
- Cuidado nas conversões implícitas
