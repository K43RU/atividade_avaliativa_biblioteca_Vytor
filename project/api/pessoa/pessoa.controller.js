const express = require("express");
const router = express.Router();

const pessoasHandler = require("./pessoa.handler");

router.get("/pessoa", (req, res) => {
    pessoasHandler.buscarPessoas().then(dados => res.send(dados));
})

router.post("/pessoa", (req, res) => {   
    pessoasHandler.salvarPessoa(req, res).then(dados => res.json(dados));
})

router.delete("/pessoa/deletar/:id", (req, res) => {   
    pessoasHandler.deletarPessoa(req, res).then(dados => res.json(dados));
})

module.exports = router;