let nome = (prompt('Qual é o seu nome?'))
let idade = parseInt((prompt('Qual é a sua Idade?')))

// Exercício 2
if (nome === 'Thomas Anderson') {
  if(idade <= 15 ) {
    document.write(`Olá, pequeno ${nome}, você tem ${idade} anos e será um personagem do filme The Matrix quando crescer! Daqui uns ${25 - idade} ano(s).`)
  } else if (15 < idade && idade <= 24) {
    document.write (`Olá, jovem ${nome}, você já tem ${idade} anos e em breve será personagem do Filme Matrix! Daqui pouco menos de ${25 - idade} ano(s).`)
  } else if (24 < idade && idade <= 30) {
    document.write (`Olá, ${nome}, você tem ${idade} anos e é personagem do Filme Matrix! Parabéns!`)
  } else {
    document.write (`Olá, velho ${nome}, você já tem ${idade} anos e foi personagem do filme Matrix há ${idade - 30} ano(s).`)
  }


// Exercício 1 
}else{
  if (idade <= 18){
    document.write(`Olá, ${nome}, você tem ${idade} anos e é menor de idade.`)
  }else {
    document.write(`Olá, ${nome}, você tem ${idade} anos e é maior de idade`)
  }
}

