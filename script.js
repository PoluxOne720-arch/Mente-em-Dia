// Função do botão "Saiba Mais"
function mensagem() {
    alert("Cuide da sua mente! Explore nosso conteúdo para saber mais.");
}

// Modo Noturno (opcional – adicionar no header)
function alternarModo() {
    document.body.classList.toggle('modo-noturno');
}

// Frase do dia (opcional)
const frases = [
    "Você não precisa dar conta de tudo ao mesmo tempo.",
    "Cuidar de si mesmo não é egoísmo, é sobrevivência.",
    "Um passo de cada vez já é progresso.",
    "Sua mente merece tanto cuidado quanto seu corpo.",
    "Não espere estar no limite para pedir ajuda."
];

function fraseDoDia() {
    const hoje = new Date().getDate();
    const indice = hoje % frases.length;
    return frases[indice];
}

// Exibir frase no console
console.log("💙 Frase do dia:", fraseDoDia());
