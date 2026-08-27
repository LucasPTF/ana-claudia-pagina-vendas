type CtaLinkProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
};

export function CtaLink({ children, className = "", href = "#oferta", external = false }: CtaLinkProps) {
  return (
    <a
      className={`cta ${className}`.trim()}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="cta-arrow">↗</span>
    </a>
  );
}
