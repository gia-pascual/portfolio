import { TimelineEntry } from "@/lib/data";

export default function TimelineItem({
  entry,
  isLast,
}: {
  entry: TimelineEntry;
  isLast: boolean;
}) {
  const completed = entry.status === "Completed";
  return (
    <div className="relative flex gap-5 pb-10 last:pb-0">
      {!isLast && (
        <span className="absolute left-[7px] top-4 h-full w-px bg-stone-200" aria-hidden="true" />
      )}
      <span
        className={`relative mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2 ${
          completed
            ? "border-gold-500 bg-gold-500"
            : "border-navy-700 bg-paper-50"
        }`}
        aria-hidden="true"
      />
      <div>
        <span
          className={`font-mono text-xs uppercase tracking-wider ${
            completed ? "text-gold-600" : "text-navy-700"
          }`}
        >
          {entry.status}
        </span>
        <h3 className="mt-1 font-display text-lg text-navy-900">{entry.title}</h3>
        {entry.detail && (
          <p className="mt-1 text-sm leading-relaxed text-ink-500">{entry.detail}</p>
        )}
      </div>
    </div>
  );
}
