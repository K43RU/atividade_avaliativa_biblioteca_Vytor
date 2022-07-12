const crud = require('../../crud/firebase');

async function buscarPessoas(){
    const dados = await crud.pegar("pessoa");
    console.log(dados);
    return (dados);
}

async function salvarPessoa(){
    const dados = await crud.salvar("pessoa", "",
    req.body);
    return dados;
}

async function deletarPessoa(req, res){
    const dados = await crud.deletar("pessoa", req.params.id);
    return dados;
}

module.exports = {
    buscarPessoas,
    salvarPessoa,
    deletarPessoa
}