const crud = require('../../crud/firebase');

async function buscarUsuarios(){
    const dados = await crud.pegar("cliente");
    console.log(dados);
    return (dados);
}

async function salvarUsuario(req, res){
    const dados = await crud.salvar("cliente", "",
    req.body);
    return dados;
}

async function deletarUsuario(req, res){
    const dados = await crud.deletar("cliente", req.params.id);
    return dados;
}

module.exports = {
    buscarUsuarios,
    salvarUsuario,
    deletarUsuario
}