export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="mb-2 font-display text-sm uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl uppercase leading-tight text-ivory sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
