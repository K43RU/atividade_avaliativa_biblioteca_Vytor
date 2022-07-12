const express = require("express");
const router = express.Router();
const usuario = require("./api/usuarios/usuarios.controller");
const livro = require("./api/livro/livro.controller");
const locacao = require("./api/locacao/locacao.controller");
const pessoa = require("./api/pessoa/pessoa.controller");
const autor = require("./api/autor/autor.controller");

router.use(express.json());
router.use("/", usuario);
router.use("/", livro);
router.use("/", locacao);
router.use("/", pessoa);
router.use("/", autor);

module.exports = router;