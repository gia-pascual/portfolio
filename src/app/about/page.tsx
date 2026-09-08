import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import LedgerRule from "@/components/LedgerRule";
import Button from "@/components/Button";
import TimelineItem from "@/components/TimelineItem";
import { internshipTimeline, technicalSkills, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Management Accounting graduate with accounting support experience, QuickBooks Online expertise, and ongoing US bookkeeping and tax preparation training.",
};

const experience = [
  {
    role: "Billing & Project Coordinator (Remote)",
    org: "Electrical Contracting & Wiring Installation Company · Brooklyn, NYC",
    period: "September 2025 – Present",
    bullets: [
      "Assisted in setting up the company's QuickBooks Online account, including company settings, the Chart of Accounts, Products & Services, and customer records.",
      "Prepared detailed project estimates based on construction floor plans and project specifications.",
      "Prepared customer invoices and maintained accurate billing documentation.",
      "Monitored contractor work hours, labor costs, and project progress to support project tracking and management reporting.",
      "Tracked tenant rent payments using Rent Manager property management software.",
      "Maintained organized project documentation, billing records, and administrative reports.",
    ],
  },
  {
    role: "Accounting Support | Junior Bookkeeper",
    org: "Aderans Philippines Inc. · Microsoft Dynamics 365 Business Central",
    period: "January 2024 – January 2025",
    bullets: [
      "Managed petty cash transactions, replenishments, and expense reporting in compliance with company policies.",
      "Processed accounts receivable transactions, monitored collections, and maintained accurate financial records.",
      "Assisted in preparing invoices and reconciling customer accounts.",
      "Encoded accounting transactions using Microsoft Dynamics 365 Business Central.",
      "Assisted with payroll preparation, inventory audits, and financial reporting.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-stone-100/60 py-16 md:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
            <SectionHeading
              eyebrow="Professional Profile"
              title="Detail-oriented support for U.S. bookkeeping and tax workflows"
              description="An accounting professional supporting U.S.-based business operations through billing coordination, project documentation, financial record management, and QuickBooks Online support — while completing structured training in U.S. tax preparation."
            />
            <div className="relative mx-auto h-40 w-40 flex-shrink-0 overflow-hidden border border-stone-200 md:h-48 md:w-48">
              <Image
                src="/images/profile.png"
                alt={site.name}
                fill
                className="object-cover object-top"
                sizes="192px"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-5 text-base leading-relaxed text-ink-700">
            <p>
              In my current role as a Billing &amp; Project Coordinator for a U.S. electrical
              contracting company, I assist with QuickBooks Online company setup, customer
              records, estimates, invoicing, billing documentation, labor cost monitoring, and
              project tracking.
            </p>
            <p>
              I have also completed QuickBooks Online bookkeeping training, developing practical
              experience across a full bookkeeping cycle in a case study environment: company
              setup, Chart of Accounts organization, customer and vendor management, transaction
              recording, bank reconciliation, and financial reporting.
            </p>
            <p>
              With a Bachelor&apos;s degree in Management Accounting and prior corporate accounting
              experience using Microsoft Dynamics 365 Business Central, I combine accounting
              fundamentals with hands-on remote operations experience. I am currently expanding
              into U.S. tax preparation through a structured internship covering individual and
              business taxation, tax software, and professional tax workflows.
            </p>
            <p>
              My goal is to provide accurate, organized, and reliable accounting support to U.S.
              businesses and accounting firms — applying attention to detail, continuous
              learning, and a process-driven approach to every engagement.
            </p>
          </div>

          <div className="mt-10 border-t border-stone-200 pt-8">
            <LedgerRule label="Education" />
            <p className="font-display text-lg text-navy-900">
              Bachelor of Science in Management Accounting
            </p>
            <p className="mt-1 text-sm text-ink-500">
              University of Pangasinan · Dagupan City, Philippines · 2023
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-stone-100/60 py-16 md:py-20">
        <Container>
          <SectionHeading eyebrow="Experience" title="Professional experience" />
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {experience.map((job) => (
              <div key={job.role} className="border border-stone-200 bg-white p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg text-navy-900">{job.role}</h3>
                  <span className="font-mono text-xs tabular text-gold-600">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-ink-500">{job.org}</p>
                <ul className="mt-5 flex flex-col gap-3 border-t border-stone-100 pt-5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-ink-700">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Internship"
            title="Bookkeeping & U.S. Tax Preparation Internship"
            description="Borderless Accountant · January 2026 – Present"
          />
          <div className="mt-12 max-w-2xl">
            {internshipTimeline.map((entry, index) => (
              <TimelineItem
                key={entry.title}
                entry={entry}
                isLast={index === internshipTimeline.length - 1}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-stone-100/60 py-16 md:py-20">
        <Container>
          <SectionHeading eyebrow="Technical Skills" title="Software & tools" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technicalSkills.map((group) => (
              <div key={group.category} className="border border-stone-200 bg-white p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-gold-600">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-ink-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-10 border border-stone-200 bg-white p-8 md:grid-cols-2 md:p-10">
            <div>
              <LedgerRule label="Remote Work Readiness" />
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
                <dt className="text-ink-500">Internet</dt>
                <dd className="text-ink-900">Globe Fiber 100 Mbps · Backup: Smart 5G hotspot</dd>
                <dt className="text-ink-500">Equipment</dt>
                <dd className="text-ink-900">Asus TUF Gaming Laptop · Dual monitors · Noise-cancelling headset</dd>
                <dt className="text-ink-500">Workspace</dt>
                <dd className="text-ink-900">Dedicated home office</dd>
                <dt className="text-ink-500">Availability</dt>
                <dd className="text-ink-900">Full-time · Flexible across U.S. (EST/CST) time zones</dd>
              </dl>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <p className="text-sm leading-relaxed text-ink-500">
                Fluent in English, with a workspace and schedule built around consistent
                availability for U.S.-based accounting firms and businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href={site.resumeHref} variant="primary" external>
                  Download CV
                </Button>
                <Button href="/contact" variant="secondary">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
