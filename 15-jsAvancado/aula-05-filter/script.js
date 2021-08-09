const alunos = [ 
  {
    nome: `Arthur`,
    idade: 35,
    pontuacao: 100,
  },
  {
    nome: `Adelaite`,
    idade: 25,
    pontuacao: 130,
  },
  {
    nome: `Ceulo`,
    idade: 56,
    pontuacao: 90,
  },
  {
    nome: `Atine`,
    idade: 40,
    pontuacao: 22,
  },
]


const alunosFinalFilter = {
  aprovados: alunos.filter(aluno=>aluno.pontuacao >= 100),
  reprovados: alunos.filter(aluno=>aluno.pontuacao < 100)
} 

const alunosFinalReduce = alunos.reduce( (acc, curr) => {
  curr.pontuacao >= 100 ? acc.aprovados.push(curr) : acc.reprovados.push(curr)

  return acc
  }
  ,{
    aprovados: [], 
    reprovados: []
  }
)


console.log(alunosFinalFilter)
console.log(alunosFinalReduce)