const express = require("express");
const router = express.Router();

const locacaoHandler = require("./locacao.handler");

router.get("/locacao", (req, res) => {
    res.send("locacao");
})

module.exports = router;