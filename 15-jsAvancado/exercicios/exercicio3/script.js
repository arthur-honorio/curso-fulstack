const aluno = {
  nome: `Maria`,
  sobrenome: `da Silva`,
  notas: [7, 10, 8, 5, 7, 9],
}

const alunoMedia = aluno.notas.reduce((acc, curr) => acc + curr, 0)

console.log(`A(o) aluna(o) ${aluno.nome} ${aluno.sobrenome} teve a média ${(alunoMedia/aluno.notas.length).toFixed(2)} considerando os ${aluno.notas.length} bimestres.`)