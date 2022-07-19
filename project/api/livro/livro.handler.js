const crud = require("../../crud/firebase");

async function buscarLivros(){
    const dados = await crud.pegar("livros");
    console.log(dados);
    return (dados);
}

async function salvarLivros(req, res){
    const dados = await crud.salvar("livros", "",
    req.body);
    return dados;
}

async function editarLivros(req, res){
    const dados = await crud.editar("livros", req.params.id, req.body);
    return dados;
}

async function deletarLivro(req, res){
    const dados = await crud.deletar("livros", req.params.id);
    return dados;
}

module.exports = {
    buscarLivros,
    salvarLivros,
    deletarLivro
}