var express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const Post = require("./models/posts")



app.use(express.urlencoded({extended:false}))
app.use(express.json())

//sequelize

//Config
    //Template Engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
    //Conexão com o banco de Dados  MySql
    
    //Rotas
    app.get("/", (req, res) => {
        Post.findAll().then((posts) => {
            res.render("home", {posts:posts})
        })
                
    })
    app.get("/cadastro",(req,res) => {
        res.render("formulario")
    })

    app.post("/cadastro",(req,res) => {
        const titulo = req.body.titulo
        const conteudo  = req.body.conteudo

        Post.create({
            titulo: titulo,
            conteudo: conteudo
                    })
                    .then(() => {
                        res.redirect("/")
                    }).catch((erro) => {
                        res.send("Erro: " + erro)
                    })       
    })

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})