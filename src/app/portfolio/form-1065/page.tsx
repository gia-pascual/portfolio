import type { Metadata } from "next";
import Container from "@/components/Container";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Form 1065 Case Study",
  description:
    "A mock partnership tax return case study completed during U.S. business tax preparation training.",
};

export default function Form1065CaseStudy() {
  return (
    <>
      <CaseStudyHeader
        category="US Tax Preparation Training"
        title="Form 1065 Case Study"
        meta="Partnership Return · Training Exercise"
      />
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-ink-700">
            As part of the U.S. Business Tax Preparation curriculum, I prepared a mock Form 1065
            partnership return, working through partner allocations, income and expense
            categorization, and the supporting schedules that accompany a partnership filing.
          </p>
          <div className="mt-10 grid gap-8 border-t border-stone-200 pt-8 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-lg text-navy-900">What the exercise covered</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {[
                  "Organizing partnership income and expense data",
                  "Working through partner allocation schedules",
                  "Completing Form 1065 and supporting schedules",
                  "Reviewing entries against case study source data",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-ink-700">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold-500" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-lg text-navy-900">Software used</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                Intuit ProConnect Tax and Drake Tax, applying the same organization and
                documentation habits used in bookkeeping and QuickBooks Online work.
              </p>
            </div>
          </div>
          <p className="mt-10 border-t border-stone-200 pt-8 text-sm leading-relaxed text-ink-500">
            This was completed as a training exercise, not an independently filed return. Actual
            client tax preparation is performed under professional guidance.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/portfolio" variant="secondary">
              Back to Portfolio
            </Button>
            <Button href="/certifications" variant="ghost">
              View Related Certificate
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
