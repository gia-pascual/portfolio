import Image from "next/image";
import Link from "next/link";
import { PortfolioItem } from "@/lib/data";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="flex flex-col overflow-hidden border border-stone-200 bg-white">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        {item.image ? (
          <Image
            src={item.image}
            alt={`${item.title} preview`}
            fill
            className={
              item.imageFit === "contain"
                ? "object-contain object-center p-4"
                : "object-cover object-top"
            }
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full flex-col justify-between bg-navy-950 p-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-300">
              {item.group}
            </span>
            <div>
              <div className="h-px w-full bg-gold-400/30" />
              <h4 className="mt-3 font-display text-base leading-snug text-paper-50">
                {item.title}
              </h4>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-wider text-paper-50/50">
                {item.category}
              </span>
            </div>
          </div>
        )}

        {item.hasVideo && (
          <span className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-navy-950/85 px-2.5 py-1 text-[11px] font-medium text-paper-50">
            <svg viewBox="0 0 24 24" className="h-3 w-3 fill-gold-400">
              <path d="M8 5v14l11-7z" />
            </svg>
            Video Demo
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-xs uppercase tracking-wider text-gold-600">
          {item.category}
        </span>
        <h3 className="mt-2 font-display text-lg text-navy-900">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
          {item.description}
        </p>
        <Link
          href={item.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-gold-600"
        >
          View Case Study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
