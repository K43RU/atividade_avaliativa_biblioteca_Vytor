const express = require("express");
const router = express.Router();

const editoraHandler = require("./editora.handler");

router.get("/editora", (req, res) => {
    editoraHandler.buscarEditoras().then(dados => res.json(dados));
})

router.post("/editora", (req, res) => {   
    editoraHandler.salvarEditora(req, res).then(dados => res.json(dados));
})

router.delete("/editora/deletar/:id", (req, res) => {
    editoraHandler.deletarEditora(req, res).then(dados => res.json(dados));
})

module.exports = router;