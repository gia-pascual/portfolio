import Image from "next/image";
import { Certification } from "@/lib/data";

export default function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <div
      className={`card-lift flex flex-col overflow-hidden border bg-white ${
        cert.featured ? "border-gold-500/60 ring-1 ring-gold-500/20" : "border-stone-200"
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <Image
          src={cert.image}
          alt={`${cert.title} certificate`}
          fill
          className="object-contain object-center p-3"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        {cert.featured && (
          <span className="absolute left-2 top-2 bg-gold-500 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-navy-950">
            Latest
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg leading-snug text-navy-900">{cert.title}</h3>
        <div className="mt-3 flex items-center justify-between font-mono text-xs text-ink-500">
          <span>{cert.organization}</span>
          <span className="tabular">{cert.year}</span>
        </div>
        <a
          href={cert.documentHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-gold-600"
        >
          View Certificate
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
