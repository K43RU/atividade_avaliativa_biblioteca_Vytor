const express = require("express");
const router = require("./router");
const app = express();

app.use(express.json());
app.use("/api", router);


app.get("/", (req, res) => {
    res.send("fjsadlfjaslkjdfk");
})

app.listen(3000, () => {
    console.log("rodando 3000");
})