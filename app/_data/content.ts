export type HeroContent = {
  eyebrow: string;
  title: string;
  support: string;
  cta: string;
};

export const heroes: Record<"a1" | "a2" | "a3", HeroContent> = {
  a1: {
    eyebrow: "NÃO É AZAR",
    title: "O rosto muda. O final se repete.",
    support:
      "Talvez o que você chama de dedo podre seja um padrão afetivo que ainda não aprendeu a enxergar. Em uma aula ao vivo de 3 horas, Ana Cláudia vai mostrar como esse padrão pode se formar, por que ele reaparece e qual é o primeiro passo para parar de tratar sua vida amorosa como uma sina.",
    cta: "QUERO ENTENDER MEU PADRÃO",
  },
  a2: {
    eyebrow: "CANSA SER A GUERREIRA",
    title: "Você tem alguém do lado. Mas continua resolvendo a vida sozinha.",
    support:
      "Para mulheres 40+ que cansaram de ser fortes em tudo e frágeis justamente onde mais queriam se sentir seguras. A aula mostra por que certas relações repetem a mesma sensação de solidão, mesmo quando o homem muda.",
    cta: "QUERO PARAR DE REPETIR ESSE CICLO",
  },
  a3: {
    eyebrow: "DEPOIS DE TANTAS DECEPÇÕES",
    title: "Todos os homens são iguais... ou a mesma história está voltando com rostos diferentes?",
    support:
      "Antes de desistir do amor, vale olhar para o que continua se repetindo. Ana Cláudia mostra como reconhecer o padrão por trás das escolhas, dos sinais ignorados e das relações que começam diferentes, mas terminam com a mesma dor.",
    cta: "QUERO VER O QUE ESTÁ SE REPETINDO",
  },
};

export const discoveryItems = [
  "O que Ana Cláudia chama de Padrão Dedo Podre e por que ele é diferente de falta de sorte.",
  "Como experiências antigas podem influenciar expectativas, medos e escolhas afetivas sem que isso fique óbvio.",
  "Por que mulheres fortes e bem resolvidas em outras áreas ainda podem repetir relações em que se sentem desvalorizadas ou sozinhas.",
  "Como reconhecer sinais de repetição antes de concluir que todos os homens são iguais.",
  "O primeiro movimento para sair do automático e construir critérios mais conscientes para a própria vida amorosa.",
];

export const patternSteps = [
  {
    number: "01",
    title: "Repetição",
    text: "O que muda por fora, mas termina produzindo a mesma dor.",
  },
  {
    number: "02",
    title: "Origem",
    text: "Quais referências e experiências ajudam a explicar por que esse roteiro ganhou força.",
  },
  {
    number: "03",
    title: "Nova direção",
    text: "O que precisa começar a mudar na forma de perceber, escolher e se posicionar.",
  },
];

export const classMoments = [
  {
    number: "1",
    title: "O roteiro que se repete",
    text: "Você vai separar azar de padrão e identificar os pontos em comum entre histórias que pareciam totalmente diferentes.",
  },
  {
    number: "2",
    title: "Onde isso pode ter começado",
    text: "Você vai entender por que referências da infância e da juventude podem continuar influenciando expectativas e reações na vida adulta.",
  },
  {
    number: "3",
    title: "O primeiro passo para uma nova história",
    text: "Você vai sair com mais clareza sobre o que precisa observar e começar a mudar para não entrar no próximo relacionamento com o mesmo roteiro invisível.",
  },
];

export const includedItems = [
  "Aula online e ao vivo de 3 horas com Ana Cláudia.",
  "Exercícios Mentais Aceleradores aplicados ao tema da aula.",
  "Grupo de WhatsApp para suporte, avisos e dúvidas relacionadas à experiência.",
];

export const audienceItems = [
  "Mulheres 40+ que já viveram relações marcadas por desvalorização, traição, abandono emocional ou falta de parceria.",
  "Quem cansou de pensar que não tem sorte no amor.",
  "Quem tem medo de se envolver de novo e quebrar a cara mais uma vez.",
  "Quem já leu, fez terapia, buscou religião ou tentou entender sozinha, mas ainda sente que o mesmo roteiro volta.",
  "Quem quer voltar a acreditar no amor sem voltar a ser ingênua.",
];

export const notForItems = [
  "Quem procura uma fórmula para controlar outra pessoa.",
  "Quem quer uma promessa de relacionamento perfeito sem olhar para a própria história.",
  "Quem não deseja abrir espaço para nenhuma mudança na forma de se relacionar.",
];

export const faqItems = [
  {
    question: "Será que isso funciona comigo?",
    answer:
      "A aula não promete um resultado amoroso específico. Ela foi desenhada para ajudar você a enxergar o padrão que pode estar por trás das repetições e entender o próximo passo. A mudança completa depende da história, do contexto e do processo de cada pessoa.",
  },
  {
    question: "Eu já tentei terapia, livros e outras coisas. O que muda aqui?",
    answer:
      "O foco desta aula é específico: organizar sua história amorosa pela lente do Padrão Dedo Podre. Em vez de acumular mais conteúdo, você vai procurar o que se repete, como isso ganhou força e o que precisa começar a mudar.",
  },
  {
    question: "Preciso estar solteira para participar?",
    answer:
      "Não. O padrão pode aparecer em quem está solteira, namorando, casada ou saindo de uma relação. O ponto central é entender a dinâmica que se repete.",
  },
  {
    question: "A aula vai me dizer qual homem escolher?",
    answer:
      "Não. A proposta é mais profunda do que uma lista de sinais. Primeiro você precisa entender o que faz certos sinais parecerem normais, familiares ou aceitáveis. Clareza vem antes de uma escolha diferente.",
  },
  {
    question: "Vou sair sem dedo podre depois de 3 horas?",
    answer:
      "A aula é o início do processo: clareza, identificação do padrão e primeiro direcionamento. O trabalho completo de mudança é mais profundo e pode exigir acompanhamento.",
  },
];
