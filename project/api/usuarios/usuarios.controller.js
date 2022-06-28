const express = require("express");
const router = express.Router();

const usuariosHandler = require("./usuarios.handler");

router.get("/usuarios", (req, res) => {
    res.send("usuarios");
})

module.exports = router;