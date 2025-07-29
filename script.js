const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
    {
        enuciado:"Hoje eu sai de casa",
        alternativas: [
            {
        texto: "isso é assutador!",
        afirmacao: "Isso é maravilhoso",
            },
            {
            texto: "isso é maravilhoso!",
            afirmacao: "afirmação",
            }
        ]
    },    
    {
        enuciado:"Vou sair pra jantar fora amanhã",
        alternativas: [
            {
        texto: "isso é assutador!",
        afirmacao: "Isso é maravilhoso",
            },
            {
            texto: "isso é maravilhoso!",
            afirmacao: "afirmação",
            }
        ]
    },
    {

        enuciado:"Vou sair com meus amigos na proxima semana",
        alternativas: [
            {
        texto: "isso é assutador!",
        afirmacao: "Isso é maravilhoso",
            },
            {
            texto: "isso é maravilhoso!",
            afirmacao: "afirmação",
            }
        ]
    },
    {

        enuciado:"Meu aniversário é no proximo mês",
        alternativas: [
            {
        texto: "isso é assutador!",
        afirmacao: "Isso é maravilhoso",
            },
            {
            texto: "isso é maravilhoso!",
            afirmacao: "afirmação",
            }   
        ]
    },
];

let atual =0;
let perguntaAtual;

function mostraPergunta () {
    perguntaAtual = perguntas [atual];
        caixaPerguntas.textContent = perguntas.enunciado;
}

mostraPergunta ();