function testeMaioridade() {
  let nome = (prompt('Qual é o seu nome?')).toLowerCase().trim().replace(/\s+/gi, ' ')
  let idade = parseInt((prompt('Qual é a sua Idade?')))
  
  let tempo
  let saudacao
  let mensagem
  
  function toTitleCase(nom){
    return nom.replace(/\w\S*/gi, palavra =>
      (palavra.charAt(0).toUpperCase() +
      palavra.substr(1).toLowerCase()))
    }
    
  nome = toTitleCase(nome)
  
  if (nome === 'Thomas Anderson') {
    
    complemento = `e será um personagem do filme Matrix!`
    
    if(idade <= 15 ) { 
      nome = `pequeno ${nome}`
      
    } else if (15 < idade && idade <= 24) {
      nome = `jovem ${nome}`
      
    } else if (24 < idade && idade <= 30) {
      nome = `grande ${nome}`
      complemento = complemento.replace('será','é')  
      
    } else {
      nome = `Sr. ${nome}`
      complemento = complemento.replace('será','foi')  
    }

    mensagem = `Você tem ${idade} anos `

  }else {
    if (idade <= 18){
      tempo = 'menor'
    }else {
      tempo = 'maior'
    }
    mensagem = `Você tem ${idade} anos e é ${tempo} de idade.`
  }

  saudacao = `Olá, ${nome}, tudo bem?<br>`
  
  document.querySelector('#titulo').innerHTML=saudacao
  document.querySelector('#subtitulo').innerHTML= `${mensagem} ${complemento}`
  }
  