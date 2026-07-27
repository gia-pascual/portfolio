import Link from "next/link";
import Container from "./Container";
import LedgerRule from "./LedgerRule";

export default function CaseStudyHeader({
  category,
  title,
  meta,
}: {
  category: string;
  title: string;
  meta: string;
}) {
  return (
    <section className="border-b border-stone-200 bg-stone-100/60 py-14 md:py-20">
      <Container>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-navy-900"
        >
          <span aria-hidden="true">←</span> All case studies
        </Link>
        <div className="mt-6">
          <LedgerRule label={category} />
          <h1 className="font-display text-3xl leading-tight text-navy-900 md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-wider text-ink-500">{meta}</p>
        </div>
      </Container>
    </section>
  );
}
