// Lista de devocionais no novo formato
const devocionais = [
  {
    titulo: "O Senhor é Meu Pastor",
    versiculo: "O Senhor é o meu pastor; nada me faltará.",
    referencia: "Salmo 23:1",
    reflexao:
      "Deus conhece profundamente cada uma das nossas necessidades. Assim como um pastor guia e protege suas ovelhas, o Senhor guia você em amor. Mesmo quando não entendemos o caminho, Ele continua cuidando de cada detalhe.",
    oracao:
      "Senhor, obrigado por cuidar de mim mesmo quando não percebo. Guia meus passos e fortalece minha fé para confiar totalmente em Ti. Amém."
  },
  {
    titulo: "Não Temas",
    versiculo: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus.",
    referencia: "Isaías 41:10",
    reflexao:
      "O medo tenta nos paralisar, mas Deus nos lembra que não estamos sozinhos. Ele está ao nosso lado, fortalecendo, sustentando e protegendo. Quando o medo vier, lembre-se: Deus é maior do que qualquer ameaça.",
    oracao:
      "Pai, ajuda-me a substituir o medo pela confiança em Ti. Renova minhas forças e enche meu coração de coragem. Amém."
  },
  {
    titulo: "Descanso Para a Alma",
    versiculo: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
    referencia: "Mateus 11:28",
    reflexao:
      "Jesus nos convida a entregar nossos cansaços, pesos e preocupações a Ele. Em meio à correria diária, é fácil esquecer que podemos descansar em Cristo. Hoje, escolha colocar diante dEle tudo aquilo que pesa sobre você.",
    oracao:
      "Jesus, entrego a Ti meu cansaço e minhas preocupações. Enche meu coração com Teu descanso e Tua paz. Amém."
  }
  // Pode adicionar mais devocionais abaixo seguindo este modelo
];

// ---- Funções de apoio ----

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function formatarDataEmPortugues(date) {
  return date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

// ---- Função principal ----

function mostrarDevocional(indice) {
  const dev = devocionais[indice];

  document.getElementById("data-atual").textContent = formatarDataEmPortugues(new Date());
  document.getElementById("titulo-devocional").textContent = dev.titulo;
  document.getElementById("versiculo").textContent = dev.versiculo;
  document.getElementById("referencia").textContent = dev.referencia;
  document.getElementById("texto-reflexao").textContent = dev.reflexao;
  document.getElementById("texto-oracao").textContent = dev.oracao;

  const anoAtualEl = document.getElementById("ano-atual");
  if (anoAtualEl) anoAtualEl.textContent = new Date().getFullYear();
}

(function iniciar() {
  if (!devocionais || devocionais.length === 0) {
    console.error("Nenhum devocional cadastrado.");
    return;
  }

  const hoje = new Date();
  const diaDoAno = getDayOfYear(hoje);
  const indiceHoje = diaDoAno % devocionais.length;

  let indiceAtual = indiceHoje;
  mostrarDevocional(indiceAtual);

  const botaoOutra = document.getElementById("btn-outra");
  if (botaoOutra) {
    botaoOutra.addEventListener("click", function () {
      let novoIndice;
      do {
        novoIndice = Math.floor(Math.random() * devocionais.length);
      } while (novoIndice === indiceAtual);

      indiceAtual = novoIndice;
      mostrarDevocional(indiceAtual);
    });
  }
})();
