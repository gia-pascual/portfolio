// Central content file. Add new certifications or case studies here —
// the site's layout and components will pick them up automatically.

export const site = {
  name: "Gianni Pascual",
  title: "Bookkeeper | US Tax Support Specialist | QuickBooks Online ProAdvisor",
  headline:
    "Helping accounting firms and businesses maintain organized financial records while supporting US bookkeeping and tax preparation workflows.",
  email: "giannilycapascual@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/giannilycapascual-bookkeeper-quickbooks-qbo-xero/",
  calendly: "https://calendly.com/giannilpascual",
  location: "Dagupan City, Philippines · Remote, U.S. hours (EST/CST)",
  resumeHref: "/resume/Gianni_Pascual_Resume.pdf",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  code: string;
  title: string;
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    code: "01",
    title: "Bookkeeping Support",
    summary:
      "Keeping day-to-day financial records organized, accurate, and ready for review.",
    items: [
      "Transaction organization",
      "Financial record maintenance",
      "Reconciliation support",
      "General bookkeeping assistance",
    ],
  },
  {
    code: "02",
    title: "QuickBooks Online Support",
    summary:
      "Setting up and maintaining QBO so your books stay structured from day one.",
    items: [
      "Company setup",
      "Chart of Accounts",
      "Products & Services",
      "Customer records",
      "Workflow organization",
    ],
  },
  {
    code: "03",
    title: "Accounts Receivable Support",
    summary: "Keeping invoices, billing, and customer balances up to date.",
    items: ["Invoice tracking", "Billing support", "Customer account monitoring"],
  },
  {
    code: "04",
    title: "Financial Reporting Support",
    summary:
      "Supporting the preparation and organization of clear, dependable reports.",
    items: [
      "Support preparing financial reports",
      "Financial organization",
      "Documentation support",
    ],
  },
  {
    code: "05",
    title: "US Tax Support",
    summary:
      "Supporting tax preparation workflows under professional guidance — organizing the data so preparation runs smoothly.",
    items: [
      "Support for tax preparation workflows",
      "Tax data organization",
      "Tax documentation",
      "Preparation support for Form 1040, 1065, and 1120-S",
    ],
  },
];

export type VideoDemo = {
  title: string;
  youtubeId: string;
};

// Video demos embedded on the QuickBooks Online case study page.
export const qboVideoDemos: VideoDemo[] = [
  {
    title: "QuickBooks Online Bookkeeping Walkthrough",
    youtubeId: "Op9MaROw-dM",
  },
  {
    title: "Month-End Close & Bank Reconciliation",
    youtubeId: "vv5mK8fT4wI",
  },
  {
    title: "From Transaction to Financial Statements",
    youtubeId: "Kp6CkHmi6dI",
  },
];

export type PortfolioGroup = "Bookkeeping" | "Tax Preparation";

export type PortfolioItem = {
  slug: string;
  title: string;
  group: PortfolioGroup;
  category: string;
  description: string;
  // Leave `image` unset for items that don't have a real screenshot or
  // document yet — the card renders a clean branded placeholder instead of
  // borrowing an unrelated certificate photo.
  image?: string;
  imageFit?: "cover" | "contain";
  href: string;
  documentHref?: string;
  hasVideo?: boolean;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "quickbooks-setup",
    title: "QuickBooks Online Company Setup",
    group: "Bookkeeping",
    category: "Bookkeeping Case Study",
    description:
      "A full bookkeeping cycle for a sample consulting company — company setup, Chart of Accounts, invoicing, reconciliation, and monthly reports.",
    image: "/images/qbo-case-study-cover.jpg",
    imageFit: "contain",
    href: "/portfolio/quickbooks-setup",
    documentHref: "/documents/QBO_Bookkeeping_Case_Study.pdf",
    hasVideo: true,
  },
  {
    slug: "form-1040",
    title: "Form 1040 Case Study",
    group: "Tax Preparation",
    category: "US Tax Preparation Training",
    description:
      "Mock individual tax return prepared during training, applying IRS rules and best practices under professional guidance.",
    href: "/portfolio/form-1040",
  },
  {
    slug: "form-1065",
    title: "Form 1065 Case Study",
    group: "Tax Preparation",
    category: "US Tax Preparation Training",
    description:
      "Mock partnership return prepared as part of the US Business Tax Preparation training curriculum.",
    href: "/portfolio/form-1065",
  },
  {
    slug: "form-1120s",
    title: "Form 1120-S Case Study",
    group: "Tax Preparation",
    category: "US Tax Preparation Training",
    description:
      "Mock S-corporation return prepared as part of the US Business Tax Preparation training curriculum.",
    href: "/portfolio/form-1120s",
  },
];

export type Certification = {
  title: string;
  organization: string;
  year: string;
  image: string;
  documentHref: string;
};

export const certifications: Certification[] = [
  {
    title: "7-Week U.S. Bookkeeping & QuickBooks Online Training Program",
    organization: "Borderless Accountants Academy",
    year: "2026",
    image: "/certificates/bookkeeping-qbo-training.jpg",
    documentHref: "/documents/Bookkeeping_QBO_Training_Certificate.pdf",
  },
  {
    title: "US Tax Preparation — Internship Program",
    organization: "Borderless Accountants Academy",
    year: "2026",
    image: "/certificates/tax-prep-internship.jpg",
    documentHref: "/documents/Tax_Prep_Internship_Certificate.pdf",
  },
  {
    title: "US Form 1040 Tax Preparation: Individual Tax Return Training",
    organization: "Borderless Accountants Community",
    year: "2026",
    image: "/certificates/form-1040-training.jpg",
    documentHref: "/documents/Form_1040_Training_Certificate.pdf",
  },
  {
    title: "Certified QuickBooks Online ProAdvisor",
    organization: "Intuit QuickBooks",
    year: "2025",
    image: "/certificates/qbo-proadvisor.jpg",
    documentHref: "/documents/QBO_ProAdvisor_Certificate.pdf",
  },
  {
    title: "Xero Advisor Certified",
    organization: "Xero",
    year: "2025",
    image: "/certificates/xero-advisor.jpg",
    documentHref: "/documents/Xero_Advisor_Certificate.pdf",
  },
];

export type TimelineEntry = {
  status: "Completed" | "In Progress";
  title: string;
  detail?: string;
};

export const internshipTimeline: TimelineEntry[] = [
  {
    status: "Completed",
    title: "7-Week US Bookkeeping & QuickBooks Online Training",
  },
  {
    status: "Completed",
    title: "US Individual Tax Preparation",
  },
  {
    status: "Completed",
    title: "US Business Tax Preparation",
  },
  {
    status: "Completed",
    title: "Mock Tax Returns — Forms 1040, 1065, 1120-S",
    detail: "Software: Intuit ProConnect Tax, Drake Tax",
  },
  {
    status: "In Progress",
    title: "Practical Tax Preparation Experience",
    detail:
      "Assisting with US tax preparation using CCH Tax under professional guidance.",
  },
];

export const technicalSkills = [
  {
    category: "Accounting Software",
    items: [
      "QuickBooks Online",
      "Xero",
      "Microsoft Dynamics 365 Business Central",
      "Intuit ProConnect Tax",
      "Drake Tax",
      "CCH Tax",
    ],
  },
  {
    category: "Productivity",
    items: ["Microsoft Excel", "Google Workspace"],
  },
  {
    category: "Communication",
    items: ["Slack", "Zoom", "Google Meet", "Loom"],
  },
  {
    category: "Project Management",
    items: ["Asana", "Monday.com"],
  },
];

export const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "I provide bookkeeping support, QuickBooks Online setup and maintenance, accounts receivable support, financial reporting support, and US tax preparation support for Forms 1040, 1065, and 1120-S — all performed as support work under appropriate professional guidance.",
  },
  {
    question: "What accounting software do you use?",
    answer:
      "QuickBooks Online and Xero for day-to-day bookkeeping, and Microsoft Dynamics 365 Business Central from prior corporate accounting experience.",
  },
  {
    question: "What tax software do you use?",
    answer:
      "Intuit ProConnect Tax, Drake Tax, and CCH Tax, developed through structured US tax preparation training and hands-on internship experience.",
  },
  {
    question: "Do you work US business hours?",
    answer:
      "Yes. I'm available full-time and flexible across US Eastern and Central time zones.",
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "Use the Book a Call button anywhere on the site to find a time that works, or send a message through the contact form.",
  },
  {
    question: "Can you assist CPA firms remotely?",
    answer:
      "Yes. I work fully remote with reliable fiber internet, a backup mobile hotspot, dual monitors, and a dedicated home office set up for consistent, US-hours availability.",
  },
];

// Sections that exist in the codebase but are intentionally not linked from
// navigation yet. Flip `active` to true once content is ready — no layout
// changes required.
export const futureSections = {
  introVideo: { active: false },
  additionalCaseStudies: { active: false },
  testimonials: { active: false },
  additionalCertifications: { active: false },
};
