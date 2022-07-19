const express = require("express");
const router = express.Router();

const locacaoHandler = require("./locacao.handler");

router.get("/locacao", (req, res) => {
    locacaoHandler.buscarLocacoes().then(dados => res.send(dados));
})

router.post("/locacao", (req, res) => {   
    locacaoHandler.salvarLocacao(req, res).then(dados => res.send(dados));
})

router.delete("/locacao/deletar/:id", (req, res) => {   
    locacaoHandler.deletarLocacao(req, res).then(dados => res.send(dados));
})

module.exports = router;