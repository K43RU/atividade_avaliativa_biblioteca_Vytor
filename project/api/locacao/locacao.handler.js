const crud = require('../../crud/firebase');

async function buscarLocacoes(){
    const dados = await crud.pegar("locacao");
    console.log(dados);
    return (dados);
}

async function salvarLocacao(){
    const dados = await crud.salvar("locacao", "",
    req.body);
    return dados;
}

async function deletarLocacao(req, res){
    const dados = await crud.deletar("locacao", req.params.id);
    return dados;
}

module.exports = {
    buscarLocacoes,
    salvarLocacao,
    deletarLocacao
}