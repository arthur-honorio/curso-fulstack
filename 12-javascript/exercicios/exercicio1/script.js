let nome = (prompt('Qual é o seu nome?'))
let idade = parseInt((prompt('Qual é a sua Idade?')))

if (idade <= 18){
  document.write(`Olá, ${nome}, você tem ${idade} anos e é menor de idade.`)
}else {
  document.write(`Olá, ${nome}, você tem ${idade} anos e é maior de idade`)
}