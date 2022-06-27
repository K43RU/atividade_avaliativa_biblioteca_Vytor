const express = require("express");
const app = express();
const router = require("./router");

app.use("/api", router);

app.listen(3000, () => {
    console.log("rodando 3000");
})