const express = require("express");
const router = express.Router();

const pessoasHandler = require("./pessoa.handler");

router.get("/pessoas", (req, res) => {
    res.send("pessoas");
})

module.exports = router;