const crud = require("./crud/firebase");

async function salvarLocacao() {
    const savedData = await crud.salvar("editora", "",
        {});
    console.log(savedData);
}

async function buscarDados() {
    const dados = await crud.pegar("autor");
    console.log(dados);
}

salvar();