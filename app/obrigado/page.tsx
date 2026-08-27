import { CtaLink } from "@/app/_components/CtaLink";

const groupUrl = "https://chat.whatsapp.com/CkPy60kniNU3wLWsDBN4Sq?s=cl&p=a&mlu=4";

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <div className="thank-you-orbit thank-you-orbit-one" />
      <div className="thank-you-orbit thank-you-orbit-two" />
      <div className="thank-you-shell">
        <div className="thank-you-mark">AC</div>
        <p className="eyebrow">INSCRIÇÃO CONCLUÍDA</p>
        <h1>Seu primeiro passo já foi dado.</h1>
        <p className="thank-you-lead">Se você chegou aqui após concluir sua inscrição, entre agora no grupo oficial da Aula Dedo Podre Nunca Mais.</p>
        <div className="thank-you-steps">
          <article>
            <span>01</span>
            <div>
              <h2>Entre no grupo</h2>
              <p>É por lá que serão enviados avisos e orientações relacionados à experiência.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h2>Aguarde as próximas orientações</h2>
              <p>A data, o horário e a forma de acesso à aula serão confirmados pelos canais oficiais.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h2>Reserve este endereço</h2>
              <p>Se não puder entrar no grupo agora, salve esta página para acessar novamente.</p>
            </div>
          </article>
        </div>
        <CtaLink href={groupUrl} external className="thank-you-cta">ENTRAR NO GRUPO OFICIAL</CtaLink>
        <small className="thank-you-note">Nenhuma data ou horário foi informado nos materiais do projeto. A confirmação será feita pelos canais oficiais.</small>
      </div>
    </main>
  );
}
