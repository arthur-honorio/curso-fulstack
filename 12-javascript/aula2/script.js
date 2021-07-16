const ano_inicio = 1900
const ano_limite = 2021
let ano_final = ''

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio']
let mes_final = ''

const dia_inicio = 1
const dia_limite = 31
let dia_final = ''

for (let ano = ano_inicio; ano <= ano_limite; ano++){
    ano_final += `<option name='ano' value='${ano}'>${ano}</option>`
}

for (let indice = 0; indice <= meses.length - 1; indice++){
    mes_final += `<option name='mes' value='${meses[indice]}'>${meses[indice]}</option>`
}

for (let dia = dia_inicio; dia <= dia_limite; dia++) {
    dia_final += `<option name='dia' value='${dia}'>${dia}</option>`
}

document.querySelector('#ano').innerHTML = `${ano_final}`;
document.querySelector('#meses').innerHTML = `${mes_final}`
document.querySelector('#dia').innerHTML = `${dia_final}`

/* function dia_limite() {
    if (mes_final === 'Fevereiro'){
        return 28
    } else if (
        mes_final ==='Janeiro' || 
        mes_final ==='Março' || 
        mes_final ==='Maio'
        ) {
        return 31
    } else {
        return 30
    }
} */