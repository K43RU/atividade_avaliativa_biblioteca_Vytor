const express = require("express");
const router = express.Router();

const usuariosHandler = require("./usuarios.handler");

router.get("/usuarios", (req, res) => {
    usuariosHandler.buscarUsuarios().then(dados => res.send(dados));
})

router.post("/usuarios", (req, res) => {   
    usuariosHandler.salvarUsuario(req, res).then(dados => res.json(dados));
})

router.delete("/usuarios/deletar/:id", (req, res) => {   
    usuariosHandler.deletarUsuario(req, res).then(dados => res.json(dados));
})

module.exports = router;