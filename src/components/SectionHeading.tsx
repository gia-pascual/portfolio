import LedgerRule from "./LedgerRule";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <LedgerRule label={eyebrow} />
      <h2
        className={`font-display text-3xl leading-tight md:text-4xl ${
          light ? "text-paper-50" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-paper-50/70" : "text-ink-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
