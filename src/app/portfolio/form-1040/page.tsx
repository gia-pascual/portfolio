import type { Metadata } from "next";
import Container from "@/components/Container";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Form 1040 Case Study",
  description:
    "A mock individual tax return case study completed during U.S. Form 1040 tax preparation training.",
};

export default function Form1040CaseStudy() {
  return (
    <>
      <CaseStudyHeader
        category="US Tax Preparation Training"
        title="Form 1040 Case Study"
        meta="Individual Tax Return · Training Exercise"
      />
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-ink-700">
            As part of the U.S. Form 1040 Tax Preparation training program, I prepared a mock
            individual tax return, applying IRS rules and standard preparation procedures to a
            case-based scenario. The exercise covered gathering and organizing income and
            deduction data, applying the correct filing status and forms, and reviewing the
            return for accuracy before completion.
          </p>
          <div className="mt-10 grid gap-8 border-t border-stone-200 pt-8 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-lg text-navy-900">What the exercise covered</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {[
                  "Organizing income and deduction documentation",
                  "Applying individual filing status rules",
                  "Completing Form 1040 line by line",
                  "Reviewing entries for accuracy and completeness",
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
                Intuit ProConnect Tax and Drake Tax, alongside the tax data organization habits
                developed through QuickBooks Online bookkeeping training.
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
