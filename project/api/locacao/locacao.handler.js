const crud = require('../../crud/firebase');
const reqLivro = require('../livro/livro.handler');
const reqCliente = require('../usuarios/usuarios.handler');

async function buscarLocacoes() {
    const dados = await crud.pegar("locacao");
    console.log(dados);
    return (dados);
}

    // const resultadoClientes = await reqCliente.buscarUsuarios().then(dados => dados);
    // const cliente = resultadoClientes.findIndex(c => c.id == JSON.stringify(locacao).id_cliente);

async function salvarLocacao(req, res) {
    const locacao = req.body;
    const resultadoLivros = await reqLivro.buscarLivros().then(dados => dados);
    const livro = resultadoLivros.findIndex(l => l.id == locacao.id_livro);
    if (livro.alugado != false) {
        await crud.salvar("livros", locacao.id_livro, {alugado: true});
        const dados = await crud.salvar("locacao", JSON.stringify(locacao.id), req.body);
        return dados;
    } else {
        res.status(404).send("o livro já está alugado.");
    }
}

async function deletarLocacao(req, res) {
    const dados = await crud.deletar("locacao", req.params.id);
    return dados;
}

module.exports = {
    buscarLocacoes,
    salvarLocacao,
    deletarLocacao
}