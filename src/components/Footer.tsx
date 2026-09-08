import Link from "next/link";
import Container from "./Container";
import { site } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-navy-950 text-paper-50">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl">{site.name}</p>
            <p className="mt-1 text-sm text-paper-50/60">{site.title}</p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-paper-50/70">
            <a href={`mailto:${site.email}`} className="hover:text-gold-300">
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-300"
            >
              LinkedIn Profile
            </a>
            <a href={site.resumeHref} className="hover:text-gold-300">
              Download CV
            </a>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold-400/60 px-5 py-2.5 text-sm font-medium text-gold-300 transition-colors hover:bg-gold-500/10"
            >
              Book a Call
            </a>
            <nav className="flex gap-4 text-sm text-paper-50/60">
              <Link href="/about" className="hover:text-gold-300">
                About
              </Link>
              <Link href="/portfolio" className="hover:text-gold-300">
                Portfolio
              </Link>
              <Link href="/contact" className="hover:text-gold-300">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-paper-50/10" />
        <p className="mt-6 text-xs text-paper-50/40">
          © {year} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
