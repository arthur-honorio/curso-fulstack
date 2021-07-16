const profissionais = [
  {
    nome:"Tirurica",
    idadeMental: 14,
    habilidades:
      ["beber", "falar merda", "rir"]
  }, 
  {
    nome: "Fabio",
    idadeMental: 29,
    habilidades:
      ['estudar', 'aprender', 'ajudar']
  },
  {
    nome: "Mácio", 
    idadeMental: 49,
    habilidades: 
    ['dormir', 'lembrar do passado', 'fazer tudo errado']
  }
];
let prosCompleto = ''

for (let pros of profissionais) {
  let listaHabilidades = ''
  for (habilidade of pros.habilidades) {
    listaHabilidades += `<li>${habilidade}</li>`
  }
  
  prosCompleto += 
  `
  <li>
    Nome: <b>${pros.nome}</b><br>
    Idade Mental: <b>${pros.idadeMental}</b><br>
    Habilidades:
    <ul>
      <b> ${listaHabilidades} </b><br>
    </ul>
  </li>
  `  
}

document.querySelector("#profissionais").innerHTML = prosCompleto


/* 
1- selecionar cada profissional com o for of e colocar num li
2- selecionar cada habilidade de cada profissional e colocar num li
 */