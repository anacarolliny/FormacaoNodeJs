const Sequelize = require("sequelize")

const sequelize = new Sequelize("postapp", "root", "123456789", {
  host: "localhost",
  dialect: "mysql",
  query:{raw:true}
})

sequelize.authenticate().then(() => {
  console.log("Conectado com sucesso")
}).catch((erro) => {
  console.log("Falha ao se conectar: " + erro)
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
} //exportando o objeto para ser usado em outros arquivos
//porque agora cada model vai  ficar em  um arquivo especifico