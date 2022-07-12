const crud = require("../../crud/firebase");

async function buscarEditoras() {
    const dados = await crud.pegar("editora");
    console.log(dados);
    return (dados);
}

async function salvarEditora(req, res) {
    const dados = await crud.salvar("editora", "",
    req.body);
    return dados;
}

async function deletarEditora(req, res){
    const dados = await crud.deletar("editora", req.params.id);
    return dados;
}

module.exports = {
    buscarEditoras,
    salvarEditora,
    deletarEditora
}