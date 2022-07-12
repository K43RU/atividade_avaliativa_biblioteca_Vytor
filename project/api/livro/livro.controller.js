const express = require("express");
const router = express.Router();
const livroHandler = require("./livro.handler");

router.get("/livro", (req, res) => {
    livroHandler.buscarLivros().then(dados => res.send(dados));
})

router.post("/livro", (req, res) => {   
    livroHandler.salvarLivros(req, res).then(dados => res.json(dados));
})

router.delete("/livro/deletar/:id", (req, res) => {   
    livroHandler.deletarLivros(req, res).then(dados => res.json(dados));
})

module.exports = router;