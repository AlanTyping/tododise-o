export function SectionHeading({ eyebrow, title, dark = false, aside }: { eyebrow: string; title: React.ReactNode; dark?: boolean; aside?: React.ReactNode }) {
  return (
    <div className={`section-heading${dark ? " section-heading-light" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {aside ? <div className="section-heading-aside">{aside}</div> : null}
    </div>
  );
}
