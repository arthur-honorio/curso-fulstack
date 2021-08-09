const fs = require("fs")
const http = require(`http`)

const server = http.createServer(function(req, res) {
  if(req.url === `/`){
    fs.readFile(`../client/index.html`, function(error, content) {
      res.end(content)
    })
  }  if (req.url === `/teste`) {
    fs.readFile(`../client/teste.html`, function(error, content) {
      res.end(content)
    })
  }

})

server.listen()
console.log(`Servidor escutando na porta 8080`)
