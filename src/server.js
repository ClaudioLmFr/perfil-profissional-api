const express = require('express')
const perfilRoute = require('./routes/PerfilRoutes')
const notificacaoRoute = require('./routes/NotificacaoRoute')
const loginRoute = require('./routes/LoginRoute')

const cors = require("cors")
const app = express()
const db = require('./db')

db.connect()

app.use(express.json())
app.use(cors({ origin: "*" }))
app.use("/perfil", perfilRoute)
app.use("/notificacao", notificacaoRoute)
app.use("/login", loginRoute)

app.get('/', (req, res) => {
  res.send('Bem-vindo ao Perfil Profissional API!')
})

module.exports = app