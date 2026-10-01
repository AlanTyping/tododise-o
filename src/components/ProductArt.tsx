export function ProductArt({ label = "para vos", tone = "#df8977", compact = false }: { label?: string; tone?: string; compact?: boolean }) {
  return (
    <div className={`product-art${compact ? " product-art-compact" : ""}`} style={{ "--art-tone": tone } as React.CSSProperties} aria-label={`Vaso ilustrado personalizado: ${label}`} role="img">
      <span className="art-glint" />
      <span className="art-lid" />
      <span className="art-vessel"><span>{label}</span></span>
      <span className="art-base" />
    </div>
  );
}
