var express = require("express")

const app = express()

app.get("/", (req, res) => {
res.sendFile(__dirname + "/html/index.html")})

app.get("/sobre",(req,res)=>{
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/blog",(req,res)=>{
    res.send("Blog")
})

app.get("/ola/:nome/:profissao",(req,res)=>{
const nomeParam = req.params.nome
const profissaoParam = req.params.profissao
res.send("<h1>Ola "+ nomeParam +"</h1>"+"<h2>Você é "+ profissaoParam +"</h2>")

})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})