const porta = process.env.PORT || 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)

    if (!produto) {
        return res.status(404).send({ erro: 'Produto não encontrado' })
    }

    res.send(produto)
})




const server = app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})

server.on('error', err => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Porta ${porta} já está em uso`)
        process.exit(1)
    }
})
