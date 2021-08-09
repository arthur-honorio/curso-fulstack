const alunos = [

  {
    nome: 'Maria',
    sobrenome: 'da Silva',
    nota: 10,
  },

  {
    nome: 'José',
    sobrenome: 'Moreira',
    nota: 4,
  },

  {
    nome: 'Paulo',
    sobrenome: 'Henrique',
    nota: 7,
  },

  {
    nome: 'Sara',
    sobrenome: 'Souza',
    nota: 5,
  },

  {
    nome: 'Clara',
    sobrenome: 'Barbosa',
    nota: 7,
  },

  {
    nome: 'Rodrigo',
    sobrenome: 'Barros',
    nota: 7,
  },

  {
    nome: 'Renato',
    sobrenome: 'Barros',
    nota: 7,
  },

  {
    nome: 'Andrea',
    sobrenome: 'Batista',
    nota: 7,
  },

  {
    nome: 'Carla',
    sobrenome: 'Campos',
    nota: 3,
  },

]

function mostrarAluno (array) {


}

const inputNota = document.querySelector(`input`)
const resultado = document.querySelector(`.resultado`)

function ultimaVirgulaParaE (array) {
  const indexVirgula = array.lastIndexOf(`,`)
  let novoNome = array.split(``)
  novoNome[indexVirgula] = " e"
  const novoNome2 = novoNome.join(``)
  return novoNome2
}

function retornarAlunos (array) {
  const nomes = array.reduce((acc, curr) => {
    if(!acc){
      acc = curr.nome
    } else if (acc){
      acc += `, ${curr.nome}`
    }
    
    return acc
  }, ``)

  if (!nomes) {
    return `Nenhuma(um) aluna(o) tirou a nota informada.`
    
  } else if (array.length === 1){
    return `A(O) aluna(o) ${nomes} tirou a nota informada.`
    
  } 
  
  return `As(Os) alunas(os) ${ultimaVirgulaParaE(nomes)} tiraram a nota informada.`
}

inputNota.onchange = (evento) => {
  const nota = evento.target.valueAsNumber
  const alunoComNota = alunos.filter(aluno => aluno.nota===nota)

  resultado.innerText = retornarAlunos(alunoComNota)
}