// Lista de devocionais
const devocionais = [
  {
    titulo: "O Senhor é Meu Pastor",
    versiculo: "O Senhor é o meu pastor; nada me faltará.",
    referencia: "Salmo 23:1",
    reflexao:
      "Deus conhece profundamente cada uma das nossas necessidades. Mesmo quando não enxergamos uma saída, Ele continua sendo o Pastor que guia, cuida e provê. Podemos descansar na certeza de que Ele não perde o controle de nada.",
    oracao:
      "Senhor, obrigado porque Tu és o meu Pastor. Acalma o meu coração e ajuda-me a confiar que nada me faltará quando dependo de Ti. Amém."
  },
  {
    titulo: "Não Temas",
    versiculo: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus.",
    referencia: "Isaías 41:10",
    reflexao:
      "O medo tenta nos paralisar e roubar a nossa paz. Deus não ignora o que sentimos, mas nos lembra que Ele está conosco. A segurança não está em ter todas as respostas, mas em saber que caminhamos com Ele.",
    oracao:
      "Pai, Tu conheces os meus medos. Fortalece-me hoje e ajuda-me a lembrar que não estou sozinho, pois o Senhor é o meu Deus. Amém."
  },
  {
    titulo: "Descanso Para a Alma",
    versiculo: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
    referencia: "Mateus 11:28",
    reflexao:
      "Jesus conhece o cansaço que vai além do físico: preocupações, culpas, pressões. Ele não nos oferece mais peso, mas descanso. Ir a Cristo é entregar a Ele o que não conseguimos carregar sozinhos.",
    oracao:
      "Jesus, entrego a Ti o meu cansaço e as minhas preocupações. Traz descanso à minha alma e renova as minhas forças hoje. Amém."
  },
  {
    titulo: "Graça em Meio à Fraqueza",
    versiculo: "A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza.",
    referencia: "2 Coríntios 12:9",
    reflexao:
      "Gostamos de parecer fortes, mas Deus nos lembra que é na fraqueza que o poder dEle se manifesta. Quando reconhecemos nossos limites, deixamos de confiar apenas em nós mesmos e passamos a depender mais da graça.",
    oracao:
      "Senhor, reconheço as minhas limitações. Que a Tua graça seja suficiente para mim hoje, e que o Teu poder se aperfeiçoe na minha fraqueza. Amém."
  },
  {
    titulo: "Paz que Guarda o Coração",
    versiculo: "A paz de Deus, que excede todo entendimento, guardará os vossos corações e os vossos pensamentos.",
    referencia: "Filipenses 4:7",
    reflexao:
      "A paz de Deus não depende de circunstâncias perfeitas. Ela guarda o coração e a mente mesmo quando o cenário é desafiador. Quando apresentamos tudo a Deus em oração, Ele nos responde com essa paz que não se explica, apenas se experimenta.",
    oracao:
      "Deus, entrego em Tuas mãos as minhas inquietações. Que a Tua paz guarde o meu coração e a minha mente em Cristo Jesus. Amém."
  },
  {
    titulo: "Deus Cuida de Cada Detalhe",
    versiculo: "Olhai para as aves do céu, que não semeiam nem colhem, e vosso Pai as alimenta.",
    referencia: "Mateus 6:26",
    reflexao:
      "Jesus nos convida a olhar para a criação como um lembrete do cuidado de Deus. Se Ele sustenta aves e flores, certamente cuida também de nós. A ansiedade diminui quando lembramos Quem está no controle.",
    oracao:
      "Pai, obrigado porque nada passa despercebido diante de Ti. Ajuda-me a confiar que o Senhor cuida de cada detalhe da minha vida. Amém."
  },
  {
    titulo: "Novas Misericórdias",
    versiculo: "As misericórdias do Senhor renovam-se a cada manhã.",
    referencia: "Lamentações 3:23",
    reflexao:
      "Cada novo dia é uma oportunidade de recomeçar na graça de Deus. Mesmo quando falhamos, Ele continua fiel. As misericórdias dEle não se esgotam e não dependem da nossa perfeição, mas do Seu amor.",
    oracao:
      "Senhor, obrigado porque hoje Tuas misericórdias se renovam sobre mim. Ajuda-me a caminhar lembrando que sou sustentado pelo Teu amor. Amém."
  },
  {
    titulo: "Luz em Meio à Escuridão",
    versiculo: "Eu sou a luz do mundo; quem me segue não andará em trevas.",
    referencia: "João 8:12",
    reflexao:
      "Quando não sabemos que caminho seguir, Jesus se apresenta como a Luz. Ele ilumina nossas decisões, corrige nossas rotas e traz clareza onde havia confusão. Seguir a Cristo é permitir que a luz dEle toque todas as áreas da nossa vida.",
    oracao:
      "Jesus, Tu és a luz do mundo. Ilumina meus passos e dá-me sabedoria nas decisões que preciso tomar hoje. Amém."
  },
  {
    titulo: "Coragem Para Avançar",
    versiculo: "Esforça-te e tem bom ânimo; não temas, nem te espantes, porque o Senhor, teu Deus, é contigo.",
    referencia: "Josué 1:9",
    reflexao:
      "Deus não promete um caminho sem desafios, mas garante a Sua presença. A verdadeira coragem não vem de confiar em nossas capacidades, e sim na certeza de que Ele vai conosco em cada etapa.",
    oracao:
      "Deus, dá-me coragem para avançar naquilo que o Senhor tem para mim. Lembra-me de que Tu estás comigo em todos os momentos. Amém."
  },
  {
    titulo: "Amor que Nunca Falha",
    versiculo: "O amor jamais acaba.",
    referencia: "1 Coríntios 13:8",
    reflexao:
      "Tudo ao nosso redor é passageiro, mas o amor de Deus permanece para sempre. Ele nos ama em nossas imperfeições e continua nos moldando com paciência. Esse amor nos convida a amar também, com graça e perdão.",
    oracao:
      "Senhor, obrigado pelo Teu amor que nunca falha. Enche o meu coração com esse amor para que eu também possa amar como Tu amas. Amém."
  },
  {
    titulo: "Ele Ouve a Nossa Oração",
    versiculo: "Se pedirmos alguma coisa segundo a sua vontade, Ele nos ouve.",
    referencia: "1 João 5:14",
    reflexao:
      "Talvez pareça que algumas orações não são respondidas, mas a Palavra diz que Deus nos ouve. Orar é abrir o coração diante dEle, confiar no Seu tempo e na Sua vontade, que é sempre boa, agradável e perfeita.",
    oracao:
      "Pai, obrigado porque o Senhor ouve a minha oração. Ajuda-me a confiar na Tua vontade e a descansar em Ti, mesmo quando não entendo tudo. Amém."
  },
  {
    titulo: "Esperança Viva",
    versiculo: "Ele nos regenerou para uma viva esperança mediante a ressurreição de Jesus Cristo.",
    referencia: "1 Pedro 1:3",
    reflexao:
      "Nossa esperança não está em circunstâncias, mas em Cristo ressuscitado. Mesmo em dias difíceis, sabemos que Deus continua escrevendo a nossa história. Nele, sempre há motivo para esperar.",
    oracao:
      "Senhor, renova hoje a minha esperança em Ti. Que eu olhe para a vida com os olhos da fé, lembrando que o Senhor é fiel em todas as Suas promessas. Amém."
  },
  {
  titulo: "Ele Renova as Forças",
  versiculo: "Mas os que esperam no Senhor renovarão as suas forças.",
  referencia: "Isaías 40:31",
  reflexao:
    "Esperar em Deus não significa ficar parado, mas confiar enquanto seguimos caminhando. Nem sempre temos energia para enfrentar o dia, mas Deus promete renovar as forças daqueles que dependem dEle. Em vez de tentar vencer no nosso próprio esforço, somos chamados a descansar no Seu cuidado.",
  oracao:
    "Senhor, renova hoje as minhas forças. Que eu caminhe na confiança de que Tu és quem me sustenta e me guia. Amém."
},
{
  titulo: "Aquietai-vos",
  versiculo: "Aquietai-vos e sabei que eu sou Deus.",
  referencia: "Salmo 46:10",
  reflexao:
    "Há momentos em que a alma fica agitada, preocupada e inquieta. Deus nos convida a parar, silenciar e lembrar Quem Ele é. Ele continua no controle, mesmo quando tudo ao redor parece desordenado. A verdadeira paz nasce quando reconhecemos que não precisamos carregar tudo sozinhos.",
  oracao:
    "Deus, ensina-me a aquietar o meu coração diante de Ti. Que eu encontre descanso ao lembrar que Tu és Deus sobre todas as coisas. Amém."
},
{
  titulo: "O Senhor é Bom",
  versiculo: "Provai e vede que o Senhor é bom.",
  referencia: "Salmo 34:8",
  reflexao:
    "A bondade de Deus não depende das circunstâncias, mas é parte do Seu caráter. Ele é bom mesmo quando não entendemos o que Ele está fazendo. À medida que caminhamos com Ele, percebemos que Sua bondade se manifesta em detalhes simples e profundos.",
  oracao:
    "Senhor, abre meus olhos para perceber a Tua bondade no meu dia. Que eu confie no Teu caráter, mesmo quando não entendo o caminho. Amém."
},
{
  titulo: "Entrega o Teu Caminho",
  versiculo: "Entrega o teu caminho ao Senhor; confia nele, e Ele tudo fará.",
  referencia: "Salmo 37:5",
  reflexao:
    "Entregar o caminho ao Senhor é render nossas expectativas, planos e inseguranças. Deus não promete fazer tudo do jeito que imaginamos, mas promete agir. Quando confiamos nEle, abrimos mão da ansiedade e permitimos que Ele conduza nossa vida.",
  oracao:
    "Pai, entrego a Ti os meus planos e preocupações. Faz a Tua vontade na minha vida e fortalece minha confiança em Ti. Amém."
},
{
  titulo: "O Senhor é a Minha Luz",
  versiculo: "O Senhor é a minha luz e a minha salvação; de quem terei medo?",
  referencia: "Salmo 27:1",
  reflexao:
    "A presença de Deus dissipa as trevas do medo e da insegurança. Quando lembramos que Ele é nossa luz e salvação, ganhamos coragem para enfrentar desafios. O medo pode até sussurrar, mas a voz de Deus é mais forte.",
  oracao:
    "Senhor, torna-te minha luz hoje. Afasta de mim todo medo e fortalece meu coração para caminhar com coragem. Amém."
},
{
  titulo: "Ele Cuida de Ti",
  versiculo: "Lançando sobre Ele toda a vossa ansiedade, porque Ele tem cuidado de vós.",
  referencia: "1 Pedro 5:7",
  reflexao:
    "Ansiedade é o peso de tentar carregar o que não fomos feitos para suportar. Deus nos convida a lançar sobre Ele tudo o que nos preocupa — não porque somos fracos, mas porque Ele cuida de nós com amor. Ele não ignora nenhuma das nossas dores.",
  oracao:
    "Deus, hoje lanço sobre Ti as minhas ansiedades. Cuida de mim, guia meus passos e dá-me paz no coração. Amém."
},
{
  titulo: "Direção em Tempo de Dúvida",
  versiculo: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
  referencia: "Provérbios 3:5",
  reflexao:
    "Nem sempre enxergamos o caminho completo, mas Deus nos chama a confiar mesmo assim. Muitas vezes desejamos ter controle total, porém a verdadeira sabedoria está em depender da direção divina. Ele vê além do que conseguimos ver.",
  oracao:
    "Senhor, quando eu não entender os Teus caminhos, ajuda-me a confiar. Guia minha vida e dá-me discernimento para seguir Tua vontade. Amém."
},
{
  titulo: "Fonte de Vida",
  versiculo: "Porque contigo está o manancial da vida; na tua luz veremos a luz.",
  referencia: "Salmo 36:9",
  reflexao:
    "Deus é a fonte de toda vida — física, emocional e espiritual. Tudo o que buscamos no mundo é apenas sombra do que só Ele pode oferecer. Quando permanecemos próximos dEle, encontramos clareza, propósito e renovação.",
  oracao:
    "Pai, que eu permaneça perto da Tua fonte de vida. Ilumina meus passos e renova meu coração hoje. Amém."
},
{
  titulo: "Confiança em Meio à Tempestade",
  versiculo: "No mundo tereis aflições, mas tende bom ânimo; Eu venci o mundo.",
  referencia: "João 16:33",
  reflexao:
    "Jesus nunca prometeu ausência de lutas, mas prometeu vitória sobre elas. A coragem cristã não nasce da força própria, mas da certeza de que seguimos Aquele que já venceu. Podemos enfrentar tempestades porque não caminhamos sozinhos.",
  oracao:
    "Jesus, quando as tempestades se levantarem, lembra-me que Tu venceste o mundo. Dá-me paz e firmeza para atravessar cada desafio. Amém."
},
{
  titulo: "A Alegria do Senhor",
  versiculo: "A alegria do Senhor é a vossa força.",
  referencia: "Neemias 8:10",
  reflexao:
    "A verdadeira força não vem apenas de disciplina ou esforço, mas da alegria que Deus coloca em nossos corações. Essa alegria não depende das circunstâncias, mas da presença dEle. Mesmo em dias difíceis, o Senhor oferece uma alegria que sustenta.",
  oracao:
    "Senhor, enche meu coração com a alegria que vem de Ti. Que essa alegria seja a minha força hoje e sempre. Amém."
},
{
  titulo: "Ele Sustenta Com Sua Mão",
  versiculo: "Ainda que eu ande pelo vale da sombra da morte, não temerei mal nenhum, porque Tu estás comigo.",
  referencia: "Salmo 23:4",
  reflexao:
    "Mesmo nos momentos mais sombrios, Deus permanece ao nosso lado. Ele não nos abandona quando enfrentamos medos, incertezas ou dores profundas. A presença do Senhor é o que transforma o vale em caminho e a escuridão em aprendizado.",
  oracao:
    "Senhor, quando eu passar por momentos difíceis, lembra-me de que Tu estás comigo. Sustenta-me com Tua mão e guia-me com Tua presença. Amém."
},
{
  titulo: "Deus Faz Florescer Novamente",
  versiculo: "Ao anoitecer pode vir o choro, mas a alegria vem pela manhã.",
  referencia: "Salmo 30:5",
  reflexao:
    "A vida é feita de estações, e Deus conhece cada uma delas. O choro não é eterno, e o sofrimento não é o fim da história. No tempo certo, Deus transforma luto em dança e tristeza em alegria. Ele é especialista em recomeços.",
  oracao:
    "Pai, renova minha esperança. Que a Tua alegria floresça em minha vida e que eu confie em Teu tempo para todas as coisas. Amém."
},
{
  titulo: "Ele Guarda Os Seus",
  versiculo: "O Senhor te guardará de todo mal; Ele guardará a tua vida.",
  referencia: "Salmo 121:7",
  reflexao:
    "Deus não apenas nos observa, Ele nos guarda. Sua proteção vai além do físico — alcança a alma, o coração e o espírito. Mesmo quando não percebemos, Ele está preparando livramentos e cuidando de cada detalhe ao nosso redor.",
  oracao:
    "Senhor, guarda minha vida e o meu coração. Livra-me do mal e guia-me em segurança por onde eu passar. Amém."
},
{
  titulo: "Ele É Fiel",
  versiculo: "Fiel é o Senhor, que vos confirmará e guardará do maligno.",
  referencia: "2 Tessalonicenses 3:3",
  reflexao:
    "A fidelidade de Deus não depende da nossa. Ele cumpre Suas promessas, sustenta-nos nas fraquezas e permanece ao nosso lado mesmo quando falhamos. Podemos descansar na certeza de que Ele é fiel em tudo o que faz.",
  oracao:
    "Deus, obrigado pela Tua fidelidade. Ensina-me a confiar plenamente em Ti, mesmo quando não entendo os caminhos. Amém."
},
{
  titulo: "Graça Que Transforma",
  versiculo: "Porque somos feitura dele, criados em Cristo Jesus para boas obras.",
  referencia: "Efésios 2:10",
  reflexao:
    "Deus não nos salvou apenas para nos resgatar, mas para nos transformar. Somos obra das Suas mãos e Ele continua trabalhando em nós diariamente. Cada passo de crescimento espiritual é fruto da graça que nos molda.",
  oracao:
    "Senhor, continua a obra que começaste em mim. Molda meu caráter e guia meus passos para viver de forma que Te glorifique. Amém."
},
{
  titulo: "Ele É o Nosso Refúgio",
  versiculo: "Tu és o meu esconderijo e o meu escudo; espero na Tua palavra.",
  referencia: "Salmo 119:114",
  reflexao:
    "Há momentos em que precisamos de um lugar seguro — e Deus é esse lugar. Ele nos protege, nos acolhe e nos fortalece. A Palavra de Deus é abrigo para a mente e bálsamo para o coração cansado.",
  oracao:
    "Deus, sê o meu refúgio hoje. Que Tua Palavra fortaleça minha fé e renove meu espírito. Amém."
},
{
  titulo: "Ele Nos Dá Sabedoria",
  versiculo: "Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente.",
  referencia: "Tiago 1:5",
  reflexao:
    "Deus nunca nos abandona diante de decisões difíceis. Ele se alegra quando pedimos sabedoria e nos guia com generosidade. Quando buscamos o conselho divino, encontramos clareza onde antes havia confusão.",
  oracao:
    "Senhor, dá-me sabedoria para tomar as decisões de hoje. Guia meus pensamentos e ilumina meus passos. Amém."
},
{
  titulo: "Ele É o Príncipe da Paz",
  versiculo: "Deixo-vos a paz, a minha paz vos dou.",
  referencia: "João 14:27",
  reflexao:
    "A paz que Jesus oferece não depende de circunstâncias tranquilas, mas da presença dEle em nós. É uma paz profunda, que guarda o coração mesmo em meio às tempestades. A verdadeira paz vem do Príncipe da Paz.",
  oracao:
    "Jesus, enche meu coração com Tua paz. Que ela governe meus pensamentos e acalme minhas emoções hoje. Amém."
},
{
  titulo: "Força na Fraqueza",
  versiculo: "O Senhor é a minha força e o meu cântico.",
  referencia: "Êxodo 15:2",
  reflexao:
    "Quando nos sentimos fracos, Deus se revela como nossa força. Ele transforma nossa incapacidade em dependência dEle, e dessa dependência nasce vitória. A força do Senhor é suficiente para qualquer luta.",
  oracao:
    "Senhor, sê a minha força hoje. Sustenta-me onde sou fraco e fortalece minha fé para seguir adiante. Amém."
},
{
  titulo: "Ele Faz Nova Todas as Coisas",
  versiculo: "Eis que faço novas todas as coisas.",
  referencia: "Apocalipse 21:5",
  reflexao:
    "Deus é especialista em restauração. Nada está tão quebrado que Ele não possa reconstruir. Nada está tão perdido que Ele não possa resgatar. Ele não apenas remenda — Ele transforma. Faz tudo novo.",
  oracao:
    "Senhor, renova minha vida, minhas forças e meus sonhos. Faz nova cada área que precisa do Teu toque. Amém."
}


];

// ---------------- Funções auxiliares ----------------

// Dia do ano (0–365)
function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

// Formata a data em português
function formatarDataEmPortugues(date) {
  return date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

// Preenche a página com o devocional
function mostrarDevocional(indice) {
  const dev = devocionais[indice];
  const hoje = new Date();

  document.getElementById("data-atual").textContent = formatarDataEmPortugues(hoje);
  document.getElementById("titulo-devocional").textContent = dev.titulo;
  document.getElementById("versiculo").textContent = `"${dev.versiculo}"`;
  document.getElementById("referencia").textContent = dev.referencia;
  document.getElementById("texto-reflexao").textContent = dev.reflexao;
  document.getElementById("texto-oracao").textContent = dev.oracao;

  const anoAtualEl = document.getElementById("ano-atual");
  if (anoAtualEl) anoAtualEl.textContent = hoje.getFullYear();
}

// ---------------- Inicialização (1 mensagem por dia) ----------------
(function iniciar() {
  if (!devocionais || devocionais.length === 0) {
    console.error("Nenhum devocional cadastrado.");
    return;
  }

  const hoje = new Date();
  const diaDoAno = getDayOfYear(hoje);
  const indiceHoje = diaDoAno % devocionais.length;

  mostrarDevocional(indiceHoje);
})();

// ---------------- COMPARTILHAMENTO ----------------

(function configurarCompartilhamento() {
  const baseURL = "https://paulocrjr.github.io/canecas-devocionais/";

  const tituloEl = document.getElementById("titulo-devocional");
  const versiculoEl = document.getElementById("versiculo");
  const referenciaEl = document.getElementById("referencia");

  const btnWhatsapp = document.getElementById("share-whatsapp");
  const btnFacebook = document.getElementById("share-facebook");
  const btnInstagram = document.getElementById("share-instagram");

  if (!tituloEl || !versiculoEl || !referenciaEl) {
    console.warn("Elementos de texto do devocional não encontrados para compartilhamento.");
    return;
  }

  function mensagemCompartilhamento() {
    const titulo = tituloEl.textContent || "";
    const versiculo = versiculoEl.textContent || "";
    const referencia = referenciaEl.textContent || "";

    return (
      "Devocional de hoje:\n\n" +
      `${titulo}\n` +
      `${versiculo} — ${referencia}\n\n` +
      `Leia em: ${baseURL}`
    );
  }

  // Tenta usar a Web Share API (compartilhamento nativo do celular)
  async function compartilharNativo() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Devocional de hoje",
          text: mensagemCompartilhamento(),
          url: baseURL
        });
        return true;
      } catch (err) {
        // Usuário cancelou ou houve erro — não precisa quebrar nada
        console.log("Compartilhamento cancelado ou não concluído:", err);
        return true; // já tentou o nativo, não precisa fallback agressivo
      }
    }
    return false; // não tem suporte ao compartilhamento nativo
  }

  // ---- WhatsApp ----
  if (btnWhatsapp) {
    btnWhatsapp.addEventListener("click", async function () {
      const usouNativo = await compartilharNativo();
      if (usouNativo) return;

      // Fallback (principalmente em desktop)
      const texto = encodeURIComponent(mensagemCompartilhamento());
      const url = `https://wa.me/?text=${texto}`;
      window.open(url, "_blank");
    });
  }

  // ---- Facebook ----
  if (btnFacebook) {
    btnFacebook.addEventListener("click", async function () {
      const usouNativo = await compartilharNativo();
      if (usouNativo) return;

      const urlCompartilhar = encodeURIComponent(baseURL);
      const quote = encodeURIComponent(mensagemCompartilhamento());
      const url = `https://www.facebook.com/sharer/sharer.php?u=${urlCompartilhar}&quote=${quote}`;
      window.open(url, "_blank");
    });
  }

  // ---- Instagram ----
  if (btnInstagram) {
    btnInstagram.addEventListener("click", async function () {
      const usouNativo = await compartilharNativo();
      if (usouNativo) {
        // No celular, aqui o usuário escolhe Instagram no menu de compartilhamento
        return;
      }

      // Fallback para navegadores/desktop:
      const texto = mensagemCompartilhamento();

      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(texto);
          alert(
            "O texto do devocional foi copiado!\n\nAbra o Instagram e cole no Direct ou nos Stories."
          );
        } catch (err) {
          alert(
            "Não foi possível copiar automaticamente.\n\nSelecione e copie o texto manualmente no site."
          );
          console.error(err);
        }
      } else {
        alert(
          "Seu navegador não permite cópia automática.\n\nSelecione e copie o texto manualmente no site."
        );
      }
    });
  }
})();

