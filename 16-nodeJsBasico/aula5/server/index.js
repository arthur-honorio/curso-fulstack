const fs = require("fs")
const http = require(`http`)

const server = http.createServer(function(req, res) {
  console.log(req)

  res.end(`Oi`)
  

})

server.listen(8080)
console.log(`Servidor escutando na porta 8080`)
