const crud = require("../../crud/firebase");

async function buscarAutores() {
    const dados = await crud.pegar("autor");
    console.log(dados);
    return (dados);
}

async function salvarAutor(req, res) {
    const id = JSON.stringify(req.body.id);
    const dados = await crud.salvar("autor", id,
    req.body);
    return dados;
}

async function deletarAutor(req, res){
    const dados = await crud.deletar("autor", req.params.id);
    return dados;
}

module.exports = {
    buscarAutores,
    salvarAutor,
    deletarAutor
}