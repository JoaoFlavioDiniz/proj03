//entrada de dados
const nome = prompt("Digite seu nome").toUpperCase();
const idade = parseInt(prompt("Digite sua idade:"));
const possuiCadastro = prompt("Possui cadastro S/N?").toUpperCase();
const possuiAutorizacao = prompt("Possui autorização especial?").toUpperCase();
const estaAcompanhado = prompt("Está acompanhado S/N?").toUpperCase();

// validação inical
if (possuiCadastro !==  "S") {
    console.log("acesso negado, usuário não cadastrado!");
    alert(`acesso negado, o usuario ${nome} nao esta cadastrado! `);
    
} else {
    //maior de idade
    if (idade >= 18) {
        console.log(`Acesso liberado, bemvindo! ${nome}!`);
        alert(`acesso liberado, bemvindo! ${nome}`);
        //validação adicional
                
    } else {
        // if aninhado
        if (idade < 18 || possuiAutorizacao !== "S") {
            if (estaAcompanhado === "S") {
                alert("Acesso premitido com restricao: entrada somente com resposavel");
                
            } else {
                console.log("Acesso negado: menor de idade!");
                alert("acesso negado");
            }
            
        } else {
            console.log("Acesso liberado!");
            alert(`acesso liberado, bemvindo! ${nome}`);
        }
        
    }
    
}
