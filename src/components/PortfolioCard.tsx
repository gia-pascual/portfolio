import Image from "next/image";
import Link from "next/link";
import { PortfolioItem } from "@/lib/data";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="flex flex-col overflow-hidden border border-stone-200 bg-white">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <Image
          src={item.image}
          alt={`${item.title} preview`}
          fill
          className="object-cover object-top"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
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
