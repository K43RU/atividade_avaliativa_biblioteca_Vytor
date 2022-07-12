const express = require("express");
const { buscarAutores } = require("./autor.handler");
const router = express.Router();

const autorHandler = require("./autor.handler");

router.get("/autor", (req, res) => {
   autorHandler.buscarAutores().then(dados => res.json(dados));
})

router.post("/autor", (req, res) => {   
   autorHandler.salvarAutor(req, res).then(dados => res.json(dados));
})

router.delete("/autor/deletar/:id", (req, res) => {
   autorHandler.deletarAutor(req, res).then(dados => res.json(dados));
})

module.exports = router;