import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarouselNav({
  index,
  count,
  onPrev,
  onNext,
  onSelect,
  label,
}: {
  index: number;
  count: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  label: string;
}) {
  if (count <= 1) return null;

  return (
    <div className="mt-6 flex items-center justify-center gap-5">
      <button
        type="button"
        onClick={onPrev}
        aria-label={`${label} anterior`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-soft bg-ink/80 text-gold"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
      </button>

      <div className="flex flex-col items-center gap-2">
        <p className="font-display text-sm tracking-widest text-ivory">
          {index + 1} / {count}
        </p>
        <div className="flex gap-2">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`Ir a ${label} ${i + 1}`}
              aria-current={i === index}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-gold" : "bg-gold-soft"
              }`}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        aria-label={`${label} siguiente`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-soft bg-ink/80 text-gold"
      >
        <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
      </button>
    </div>
  );
}
