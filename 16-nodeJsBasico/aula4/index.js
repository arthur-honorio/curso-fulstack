const fs = require(`fs`)

fs.readFile(`./clientes.json`, function(error, content) {
  if (error) {
    console.log(`Ops, houve um erro`, error)
  } else {
    console.log(JSON.parse(content))
  }
})