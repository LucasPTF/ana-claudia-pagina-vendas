import Image from "next/image";

type PortraitPlaceholderProps = {
  variant: "hero" | "authority";
};

export function PortraitPlaceholder({ variant }: PortraitPlaceholderProps) {
  const isHero = variant === "hero";

  return (
    <div className={`portrait-placeholder portrait-placeholder-${variant}`}>
      <Image
        className="portrait-image"
        src={isHero ? "/ana-claudia-hero.webp" : "/ana-claudia-autoridade.webp"}
        alt={isHero ? "Ana Cláudia em retrato profissional para a Aula Dedo Podre Nunca Mais" : "Ana Cláudia em retrato profissional na seção de apresentação"}
        fill
        priority={isHero}
        sizes={isHero ? "(max-width: 820px) 84vw, 42vw" : "(max-width: 820px) 88vw, 38vw"}
      />
    </div>
  );
}
