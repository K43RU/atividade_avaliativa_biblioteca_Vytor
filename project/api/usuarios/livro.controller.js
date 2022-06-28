const express = require("express");
const router = express.Router();

const livroHandler = require("./livro.handler");

router.get("/livro", (req, res) => {
    res.send("Livros");
})

module.exports = router;