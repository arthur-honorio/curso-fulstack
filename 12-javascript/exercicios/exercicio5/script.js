
function tabuada() {
  let titulo
  let tabuadaPronta = ``
  
  let multiplicador = parseInt(prompt(`Que tabuada você quer que eu calcule?`))

  for (let multiplicado = 01; multiplicado <= 10; multiplicado++) {
    titulo = `Tabuada do ${multiplicador}`
    let tabuadaLinha = `${multiplicador} x ${multiplicado} = ${multiplicador * multiplicado}<br>`
    tabuadaPronta += tabuadaLinha
  }
  document.querySelector(`#titulo`).innerHTML = titulo
  document.querySelector(`#tabuada`).innerHTML = tabuadaPronta
}
