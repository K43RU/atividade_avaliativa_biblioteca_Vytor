const express = require("express");
const router = require("./router");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use("/api", router);


app.get("/", cors(), (req, res) => {
    res.send("Biblioteca Rosa - Home");
})

app.listen(3000, () => {
    console.log("rodando 3000");
})