const devocionais = [
    {
        versiculo: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
        referencia: "João 3:16",
        reflexao: "O amor de Deus por nós é incomparável e incondicional. Ele não esperou que fôssemos perfeitos para nos amar. Enquanto ainda éramos pecadores, Cristo morreu por nós. Hoje, reflita sobre este amor que ultrapassa todo entendimento e nos oferece salvação gratuita. Permita que este amor transforme sua vida e inspire você a amar os outros da mesma forma.",
        oracao: "Pai celestial, obrigado pelo Seu amor sacrificial. Ajude-me a compreender a profundidade do Seu amor e a compartilhá-lo com outros. Que eu possa viver cada dia grato pela salvação que o Senhor me oferece. Em nome de Jesus, amém."
    },
    {
        versiculo: "Tudo posso naquele que me fortalece.",
        referencia: "Filipenses 4:13",
        reflexao: "Paulo nos ensina que nossa força não vem de nós mesmos, mas de Cristo que habita em nós. Nos momentos de dificuldade, lembre-se de que você não está sozinho. O poder de Deus opera em você, capacitando-o para enfrentar qualquer desafio. Quando você se sente fraco, é justamente aí que a força de Deus se aperfeiçoa em sua vida.",
        oracao: "Senhor Jesus, reconheço minha fraqueza e dependo da Sua força. Capacite-me hoje para realizar tudo o que o Senhor tem preparado para mim. Que eu não confie em minhas próprias forças, mas no Seu poder que age em mim. Amém."
    },
    {
        versiculo: "Entrega o teu caminho ao SENHOR; confia nele, e ele o fará.",
        referencia: "Salmos 37:5",
        reflexao: "Há paz em entregar nossos planos e preocupações a Deus. Quando confiamos verdadeiramente nEle, podemos descansar sabendo que Ele está no controle. Hoje, escolha confiar em Deus com todas as áreas da sua vida. Solte as rédeas do controle e veja como Deus opera de maneiras que você jamais imaginou.",
        oracao: "Pai, entrego a Ti todos os meus caminhos. Ajuda-me a confiar plenamente em Tua vontade e Teu tempo. Perdoa-me quando tento controlar tudo sozinho. Ensina-me a descansar em Tuas promessas. No nome de Jesus, amém."
    },
    {
        versiculo: "O SENHOR é o meu pastor; nada me faltará.",
        referencia: "Salmos 23:1",
        reflexao: "Deus cuida de você como um pastor cuida de suas ovelhas. Ele conhece suas necessidades antes mesmo de você pedir. Descanse na certeza de que Ele provê, protege e guia você em cada passo da jornada. Você não precisa se preocupar com o amanhã, pois seu Pastor está cuidando de tudo.",
        oracao: "Senhor, meu Pastor, obrigado por cuidar de mim com tanto amor. Confio que Tu supres todas as minhas necessidades. Guia-me por caminhos seguros e enche meu coração de paz. Em Teu nome, amém."
    },
    {
        versiculo: "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.",
        referencia: "Isaías 41:10",
        reflexao: "O medo pode paralisar, mas a presença de Deus traz coragem. Ele promete estar ao seu lado em cada situação. Não importa o que você enfrenta hoje, lembre-se: você não está sozinho. Deus está contigo, fortalecendo você a cada passo.",
        oracao: "Senhor, afasta de mim o medo e a ansiedade. Que eu sinta Tua presença constante ao meu lado. Fortalece meu coração e renova minha confiança em Ti. Obrigado por nunca me abandonar. Amém."
    }
];

function obterDevocionalDoDia() {
    const hoje = new Date();
    const inicioDoDia = new Date(hoje.getFullYear(), 0, 1);
    const diferenca = hoje - inicioDoDia;
    const umDia = 1000 * 60 * 60 * 24;
    const diaDoAno = Math.floor(diferenca / umDia);
    const indice = diaDoAno % devocionais.length;
    return devocionais[indice];
}

function formatarData() {
    const hoje = new Date();
    const opcoes = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return hoje.toLocaleDateString('pt-BR', opcoes);
}

window.addEventListener('DOMContentLoaded', function() {
    const devocional = obterDevocionalDoDia();

    document.getElementById('dataAtual').textContent = formatarData();
    document.getElementById('versiculoTexto').textContent = '"' + devocional.versiculo + '"';
    document.getElementById('versiculoReferencia').textContent = devocional.referencia;
    document.getElementById('reflexaoTexto').textContent = devocional.reflexao;
    document.getElementById('oracaoTexto').textContent = devocional.oracao;
});
