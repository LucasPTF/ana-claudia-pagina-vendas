import type { HeroContent } from "@/app/_data/content";
import {
  audienceItems,
  classMoments,
  discoveryItems,
  faqItems,
  includedItems,
  notForItems,
  patternSteps,
} from "@/app/_data/content";
import { CtaLink } from "./CtaLink";
import { PortraitPlaceholder } from "./PortraitPlaceholder";

type SalesPageProps = {
  hero: HeroContent;
};

function BrandMark() {
  return (
    <a className="brand" href="#inicio" aria-label="Dedo Podre Nunca Mais, voltar ao início">
      <span className="brand-symbol" aria-hidden="true">DP</span>
      <span className="brand-copy">Dedo Podre<br />Nunca Mais</span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label"><span />{children}</p>;
}

export function SalesPage({ hero }: SalesPageProps) {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <header className="site-header container">
          <BrandMark />
          <span className="header-meta">AULA ONLINE AO VIVO • 3 HORAS</span>
        </header>

        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="hero-support">{hero.support}</p>
            <CtaLink>{hero.cta}</CtaLink>
            <div className="hero-facts" aria-label="Informações da aula">
              <span>AO VIVO</span>
              <span>3 HORAS</span>
              <span>R$29,90</span>
            </div>
          </div>

          <div className="hero-portrait-wrap">
            <div className="handwritten">clareza muda escolhas</div>
            <PortraitPlaceholder variant="hero" />
            <div className="hero-note">
              <strong>Com Ana Cláudia</strong>
              <span>Desenvolvimento humano desde 2009</span>
            </div>
          </div>
        </div>
      </section>

      <section className="recognition section-light">
        <div className="container recognition-grid">
          <div>
            <SectionLabel>ANTES DE DESISTIR DO AMOR</SectionLabel>
            <h2>Tem uma coisa cruel em viver a mesma decepção mais de uma vez.</h2>
          </div>
          <div className="recognition-copy">
            <p>Na primeira, você culpa a pessoa. Na segunda, começa a desconfiar da sua sorte. Depois de algumas histórias parecidas, a frase aparece quase sozinha: “eu tenho dedo podre”.</p>
            <p>E é aí que o problema cresce. Quando você chama repetição de destino, para de procurar o que realmente está se repetindo.</p>
            <p>Talvez não seja falta de beleza, inteligência ou força. Você pode ser excelente no trabalho, resolver uma casa inteira e ainda se sentir perdida quando o assunto é amor.</p>
          </div>
        </div>
        <div className="truth-strip">
          <div className="container">
            <p>O ponto não é se culpar.</p>
            <strong>É enxergar o roteiro antes de entrar nele de novo.</strong>
          </div>
        </div>
      </section>

      <section className="perspective section-wine">
        <div className="container narrow">
          <SectionLabel>A PRIMEIRA VERDADE QUE MUDA O JOGO</SectionLabel>
          <h2>“Dedo podre” parece azar porque o resultado se repete sem que a causa fique visível.</h2>
          <div className="perspective-grid">
            <p>Relações não começam no dia em que você conhece alguém. Você chega nelas carregando referências, crenças, medos, tolerâncias e formas de reconhecer o que parece familiar.</p>
            <p>Quando parte disso funciona no automático, você pode mudar o nome, a cidade, o aplicativo e até o tipo de homem... e ainda cair em situações que despertam a mesma sensação.</p>
          </div>
          <div className="clarity-card">
            <span>PERCEBER NÃO É SE CULPAR</span>
            <p>Aquilo que pode ser visto também pode começar a ser mudado.</p>
          </div>
        </div>
      </section>

      <section className="transformation section-cream">
        <div className="container">
          <SectionLabel>A TRANSFORMAÇÃO DESTA AULA</SectionLabel>
          <div className="transformation-heading">
            <h2>Você não entra para sair com uma promessa mágica de homem perfeito.</h2>
            <p>Você entra para parar de tratar sua vida amorosa como loteria.</p>
          </div>
          <div className="question-card">
            <span>UMA NOVA PERGUNTA</span>
            <blockquote>“O que se repete aqui?”</blockquote>
            <p>Essa mudança de pergunta já muda o lugar de onde você escolhe, aceita, recua e decide dar uma nova chance ao amor.</p>
          </div>
        </div>
      </section>

      <section className="discovery section-light">
        <div className="container">
          <SectionLabel>O QUE VOCÊ VAI DESCOBRIR</SectionLabel>
          <h2>Clareza para olhar a própria história com outro mapa.</h2>
          <div className="discovery-list">
            {discoveryItems.map((item, index) => (
              <article className="discovery-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="map-section section-ink">
        <div className="container">
          <div className="map-intro">
            <div>
              <SectionLabel>O MAPA DO PADRÃO DEDO PODRE</SectionLabel>
              <h2>Saia do último capítulo. Observe a sequência.</h2>
            </div>
            <p>O mecanismo central da aula é simples: parar de olhar só para o último relacionamento e observar a sequência.</p>
          </div>
          <div className="map-steps">
            {patternSteps.map((step) => (
              <article className="map-step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <p className="map-closing">É como parar de culpar cada rua errada e finalmente olhar o mapa.</p>
        </div>
      </section>

      <section className="class-section section-cream">
        <div className="container">
          <div className="class-heading">
            <div>
              <SectionLabel>COMO FUNCIONA A AULA</SectionLabel>
              <h2>Três horas para transformar informação em percepção prática.</h2>
            </div>
            <div className="class-summary">
              <span>ONLINE</span>
              <span>AO VIVO</span>
              <span>3 HORAS</span>
            </div>
          </div>
          <p className="class-lead">Não é uma palestra para dizer “se ame mais” e deixar você sozinha com a frase bonita. Ana Cláudia vai explicar o padrão, ajudar você a olhar para a própria história e conduzir exercícios mentais.</p>
          <div className="class-moments">
            {classMoments.map((moment) => (
              <article key={moment.number}>
                <span>{moment.number}</span>
                <div>
                  <h3>{moment.title}</h3>
                  <p>{moment.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="included section-rose">
        <div className="container included-grid">
          <div>
            <SectionLabel>O QUE VOCÊ RECEBE</SectionLabel>
            <h2>Uma experiência completa para dar o primeiro passo.</h2>
          </div>
          <div className="included-list">
            {includedItems.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="audience section-light">
        <div className="container">
          <div className="audience-grid">
            <div className="audience-card audience-card-positive">
              <SectionLabel>PARA QUEM FAZ SENTIDO</SectionLabel>
              <h2>Para quem quer voltar a acreditar sem voltar a ser ingênua.</h2>
              <ul>
                {audienceItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="audience-card audience-card-negative">
              <SectionLabel>PARA QUEM NÃO É</SectionLabel>
              <ul>
                {notForItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="authority section-wine">
        <div className="container authority-grid">
          <div className="authority-portrait">
            <PortraitPlaceholder variant="authority" />
            <div className="authority-stamp">
              <strong>DESDE 2009</strong>
              <span>em desenvolvimento humano</span>
            </div>
          </div>
          <div className="authority-copy">
            <SectionLabel>QUEM É ANA CLÁUDIA</SectionLabel>
            <h2>Ela conhece esse assunto dos dois lados: como profissional e como mulher.</h2>
            <p>Ana Cláudia passou por dois relacionamentos fracassados e viveu uma fase em que era chamada de guerreira: resolvia tudo, fazia tudo e, mesmo casada, sentia que estava sozinha.</p>
            <p>Trabalha com desenvolvimento humano desde 2009 e direciona estudos e atendimentos para relacionamento desde 2018. Hoje, relata viver um relacionamento saudável há 7 anos.</p>
            <p>Foi da própria experiência, somada aos anos trabalhando com mulheres, que nasceu a forma como ela organiza o Padrão Dedo Podre: identificar o que se repete, entender a raiz e trabalhar a construção de uma nova identidade afetiva.</p>
            <div className="authority-quote">
              <span>EXPERIÊNCIA VIVIDA</span>
              <p>“Eu também já fui a mulher que tinha alguém do lado e continuava resolvendo tudo sozinha.”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="difference section-cream">
        <div className="container difference-grid">
          <div>
            <SectionLabel>O DIFERENCIAL</SectionLabel>
            <h2>A aula não começa perguntando como escolher o homem certo.</h2>
          </div>
          <div>
            <p className="difference-question">Ela começa antes:</p>
            <blockquote>“Por que certas histórias continuam parecendo familiares para você?”</blockquote>
            <p>Esse deslocamento muda o foco de sorte para percepção. De culpa para clareza. De “todos são iguais” para “o que eu ainda não estava enxergando?”</p>
          </div>
        </div>
      </section>

      <section className="offer section-ink" id="oferta">
        <div className="offer-orbit" />
        <div className="container offer-grid">
          <div className="offer-copy">
            <SectionLabel>OFERTA ESPECIAL</SectionLabel>
            <h2>O primeiro passo para parar de olhar sua vida amorosa no escuro.</h2>
            <p>Entre na Aula Dedo Podre Nunca Mais e entenda por que sua história amorosa parece repetir o mesmo final.</p>
            <ul>
              {includedItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <aside className="price-card">
            <span>ACESSO À AULA</span>
            <div className="price"><small>R$</small><strong>29</strong><small>,90</small></div>
            <p>Pagamento único</p>
            <button className="cta cta-disabled" type="button" disabled aria-describedby="checkout-note">
              <span>QUERO MINHA VAGA</span>
              <span aria-hidden="true" className="cta-arrow">↗</span>
            </button>
            <small id="checkout-note">Inscrições aguardando o link oficial de pagamento.</small>
            <div className="guarantee-mini">
              <strong>7 DIAS DE GARANTIA</strong>
              <span>Para avaliar sua compra conforme as regras da plataforma de pagamento.</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="faq section-light">
        <div className="container faq-grid">
          <div>
            <SectionLabel>DÚVIDAS FREQUENTES</SectionLabel>
            <h2>Antes de decidir, leia com calma.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing section-wine">
        <div className="container narrow closing-inner">
          <SectionLabel>UMA NOVA DIREÇÃO COMEÇA COM CLAREZA</SectionLabel>
          <h2>O amor não precisa voltar como ingenuidade. Pode voltar como clareza.</h2>
          <p>Existe uma diferença entre ser forte e ser obrigada a carregar tudo sozinha. Também existe uma diferença entre azar e repetição.</p>
          <CtaLink>QUERO ENTENDER MEU PADRÃO</CtaLink>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <BrandMark />
          <p>Esta aula tem caráter educativo e não substitui acompanhamento psicológico, médico ou terapêutico individual.</p>
          <p>© {new Date().getFullYear()} Ana Cláudia. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
