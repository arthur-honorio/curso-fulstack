const express = require(`express`)
const path = require("path")
const fs = require("fs")

const app = express()

//configurando projeto para utilizar a engine EJS
app.set("view engine", "ejs")

//definindo localicazação de arquivos estáticos e públicos
// app.use(express.static(path.join(__dirname, "views")))
app.use(express.static(path.join(__dirname, "public")))

//habilitando o recebimento de formulários através do método post
app.use(express.urlencoded({ extended: true }))

//configurando rotas
app.get("/", (req, res) => {
  res.render("index", {
    title: "Missions Blab",
  })
})

app.get("/quem-somos", (req, res) => {
  res.render("quem-somos", {
    title: "Nossa História",
  })
})

app.get("/produtos", (req, res) => {
  res.render("produtos", {
    title: "Nossos Produtos",
  })
})

app.get("/servicos", (req, res) => {
  res.render("servicos", {
    title: "Nososs Serviços",
  })
})

app.get("/opiniao", (req, res) => {
  const feedbacks = JSON.parse(fs.readFileSync("./store/feedback.json"))
  
  res.render("opiniao", {
    title: "Seu Feedback é muito importante", 
    feedbacks
  })

})

app.get("/opiniao_cadastrar", (req, res) => {
  const { c } = req.query
  
  res.render("opiniao_cadastrar", {
    title: "Deixe seu Feedback", 
    cadastro: c,
  })

})

app.post("/opiniao_sucesso", (req, res) => {
    
  const { title, content, stars } = req.body
  
  const data = fs.readFileSync("./store/feedback.json")
  const feedbacks = JSON.parse(data)
    
  feedbacks.push({
    title,
    content,
    stars
  })
  
  const feedbacksString = JSON.stringify(feedbacks)
  fs.writeFileSync("./store/feedback.json", feedbacksString)
    
  res.redirect("/opiniao_cadastrar?c=1")
})

//configurando rotas inexistentes
app.use((req, res) => {
  res.send(`Página não encontrada!`)
})

//conectando de forma padrão ao servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}.`))
