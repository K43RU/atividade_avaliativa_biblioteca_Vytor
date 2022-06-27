const crud = require("./crud/firebase"); 

async function salvar(){
    const savedData = await crud.salvar("pessoas", "JgluQ4mFWuift2cC0wCP",
    { nome: "Vytor", sobrenome: "Rosa", idade: 17 });
    console.log(savedData);
}

salvar();