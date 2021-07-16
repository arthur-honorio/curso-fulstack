let listaAtores = [
  {
    nome: 'Keanu Reeves',
    personagem: 'Neo',
    filme: 'The Matrix',
  },
  {
    nome: 'David Prowse',
    personagem: 'Darth Vader',
    filme: 'Star Wars Episódios IV-VI',
  },
  {
    nome: 'Bruce Wayne',
    personagem: 'Batman',
    filme: 'Batman - O Início'
  },
]

let listaFinal = ``

for (let atores of listaAtores){
  
  let lista = `
  <li>
    <h1>${atores.nome}</h1>
    <p>Interpreta <br><b>${atores.personagem}</b><br> no filme<br><b>${atores.filme}</b></p>
  </li>
  `

  listaFinal += lista

  document.querySelector(`#personagens`).innerHTML = listaFinal
}
