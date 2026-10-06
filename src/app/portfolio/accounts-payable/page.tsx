import type { Metadata } from "next";
import Container from "@/components/Container";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import Button from "@/components/Button";
import { portfolioItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Accounts Payable Management — Case Study",
  description:
    "The full vendor bill cycle in QuickBooks Online: vendor setup, bill and expense recording, vendor payments, and A/P aging monitoring.",
};

const item = portfolioItems.find((p) => p.slug === "accounts-payable")!;

const objectives = [
  "Demonstrate the vendor bill and expense workflow",
  "Record vendor bills and payments accurately",
  "Track outstanding vendor balances",
  "Monitor Accounts Payable through aging reports",
  "Analyze Accounts Payable activity through financial reports",
];

const sections = [
  {
    title: "Vendor Management & Setup",
    body: "Built out a vendor database with complete contact and billing information, so vendor transactions and outstanding balances can be tracked accurately from the start.",
  },
  {
    title: "Expense & Vendor Bill Recording",
    body: "Recorded vendor bills with the correct vendor, bill date, due date, and expense category, ensuring expenses are classified consistently and Accounts Payable obligations are properly tracked.",
  },
  {
    title: "Vendor Payment Recording",
    body: "Reviewed outstanding vendor bills, verified amounts due, and recorded payments as they were settled — keeping vendor balances current and preventing obligations from being overstated.",
  },
  {
    title: "Accounts Payable Aging Monitoring",
    body: "Reviewed the A/P Aging report to monitor outstanding vendor balances by age, supporting better payment planning and cash flow management.",
  },
];

export default function AccountsPayableCaseStudy() {
  return (
    <>
      <CaseStudyHeader
        category={item.category}
        title="Bright Path Consulting LLC"
        meta="Sample Company · Accrual Basis · Reporting Period Jan–Dec 2025"
      />

      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-ink-700">
            This case study demonstrates the Accounts Payable (A/P) management process using
            Bright Path Consulting LLC, a sample company built in QuickBooks Online for
            portfolio purposes. It covers the vendor payment workflow — from vendor setup and
            bill recording to payment processing and monitoring outstanding Accounts Payable
            through financial reports.
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink-700">
            Effective A/P management plays an important role in maintaining accurate financial
            records, managing cash flow, and ensuring vendor obligations are properly tracked.
            This case study highlights using QuickBooks Online to manage vendor information,
            record bills and expenses, process vendor payments, and monitor outstanding
            liabilities using the Accounts Payable Aging Report.
          </p>

          <div className="mt-12 border-t border-stone-200 pt-8">
            <h2 className="font-display text-xl text-navy-900">Project Objectives</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {objectives.map((obj) => (
                <li key={obj} className="flex items-start gap-2 text-sm text-ink-700">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold-500" />
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex flex-col gap-10 border-t border-stone-200 pt-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl text-navy-900">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-stone-200 pt-8">
            <h2 className="font-display text-xl text-navy-900">Business Value</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Organized vendor records and consistent bill recording reduce processing errors
              and keep Accounts Payable balances accurate. Regular review of outstanding
              payables supports better payment planning, healthier cash flow management, and
              more reliable financial reporting.
            </p>
          </div>

          <p className="mt-12 border-t border-stone-200 pt-8 text-sm leading-relaxed text-ink-500">
            All company information and financial data shown are fictional and created for
            training and portfolio demonstration purposes only.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={item.documentHref ?? "/portfolio"} variant="primary" external>
              View Full Case Study (PDF)
            </Button>
            <Button href="/portfolio" variant="secondary">
              Back to Portfolio
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
