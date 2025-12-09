// Lista de devocionais - você pode adicionar quantos quiser!
const devocionais = [
    {
        versiculo: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
        referencia: "João 3:16",
        reflexao: "O amor de Deus por nós é incondicional e eterno. Ele deu o que tinha de mais precioso para nos salvar. Hoje, reflita sobre como você pode retribuir esse amor em suas ações e palavras. Permita que o amor divino transforme seu coração e inspire você a amar ao próximo.",
        oracao: "Senhor, obrigado por Teu amor incondicional. Ajuda-me a compreender a profundidade do Teu sacrifício e a viver de maneira digna desse amor. Que eu possa refletir Tua graça em cada atitude. Amém."
    },
    {
        versiculo: "Tudo posso naquele que me fortalece.",
        referencia: "Filipenses 4:13",
        reflexao: "Não importa quais desafios você enfrenta hoje, lembre-se de que a força de Deus está com você. Ele capacita você a superar obstáculos, a vencer medos e a alcançar seus sonhos. Confie Nele e avance com coragem!",
        oracao: "Pai celestial, fortalece-me neste dia. Quando eu me sentir fraco, lembra-me de que Tua força é perfeita em minha fraqueza. Que eu possa enfrentar tudo com fé e determinação. Amém."
    },
    {
        versiculo: "O Senhor é o meu pastor, nada me faltará.",
        referencia: "Salmos 23:1",
        reflexao: "Deus cuida de você como um pastor cuida de suas ovelhas. Ele conhece suas necessidades antes mesmo de você pedir. Descanse na certeza de que Ele provê, protege e guia você em cada passo da jornada.",
        oracao: "Senhor, meu Pastor, obrigado por cuidar de mim. Confio que Tu supres todas as minhas necessidades. Guia-me por caminhos seguros e enche meu coração de paz. Amém."
    },
    {
        versiculo: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará.",
        referencia: "Salmos 37:5",
        reflexao: "Há momentos em que tentamos controlar tudo sozinhos, mas Deus nos convida a entregar nossos planos a Ele. Quando você confia em Deus, Ele age de maneiras surpreendentes. Solte o controle e veja Deus operar!",
        oracao: "Deus, entrego meus planos e ansiedades a Ti. Ajuda-me a confiar plenamente em Tua vontade. Que eu possa descansar sabendo que estás no controle de tudo. Amém."
    },
    {
        versiculo: "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.",
        referencia: "Isaías 41:10",
        reflexao: "O medo pode paralisar, mas a presença de Deus traz coragem. Ele promete estar ao seu lado em cada situação. Não importa o que você enfrenta hoje, lembre-se: você não está sozinho. Deus está contigo!",
        oracao: "Senhor, afasta de mim o medo e a ansiedade. Que eu sinta Tua presença constante ao meu lado. Fortalece meu coração e renova minha confiança em Ti. Amém."
    },
    {
        versiculo: "Alegrem-se sempre no Senhor. Novamente direi: alegrem-se!",
        referencia: "Filipenses 4:4",
        reflexao: "A alegria verdadeira não depende das circunstâncias, mas de onde está o nosso coração. Quando você se alegra no Senhor, encontra paz mesmo em meio às tempestades. Escolha a alegria hoje!",
        oracao: "Pai, enche meu coração de alegria que vem de Ti. Que eu possa celebrar Tua bondade mesmo nos momentos difíceis. Obrigado por ser minha fonte de felicidade. Amém."
    },
    {
        versiculo: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
        referencia: "Jeremias 29:11",
        reflexao: "Deus tem um propósito maravilhoso para sua vida. Mesmo quando você não entende o caminho, confie que Ele está preparando algo especial. Seu futuro está nas mãos de um Deus que te ama infinitamente.",
        oracao: "Senhor, confio em Teus planos para minha vida. Ajuda-me a ter paciência e fé enquanto aguardo Tuas promessas. Que eu possa viver com esperança e confiança. Amém."
    }
];

// Função para obter o devocional do dia baseado na data
function obterDevocionalDoDia() {
    const hoje = new Date();
    const diaDoAno = Math.floor((hoje - new Date(hoje.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const indice = diaDoAno % devocionais.length;
    return devocionais[indice];
}

// Função para formatar a data
function formatarData() {
    const hoje = new Date();
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return hoje.toLocaleDateString('pt-BR', opcoes);
}

// Carregar o devocional quando a página abrir
window.addEventListener('DOMContentLoaded', () => {
    const devocional = obterDevocionalDoDia();

    document.getElementById('dataAtual').textContent = formatarData();
    document.getElementById('versiculoTexto').textContent = `"${devocional.versiculo}"`;
    document.getElementById('versiculoReferencia').textContent = devocional.referencia;
    document.getElementById('devocionalTexto').textContent = devocional.reflexao;
    document.getElementById('oracaoTexto').textContent = devocional.oracao;
});
