"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-paper-50/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight text-navy-900"
          onClick={() => setOpen(false)}
        >
          Gianni Pascual
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-navy-900"
                    : "text-ink-500 hover:text-navy-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-navy-900 bg-navy-900 px-5 py-2.5 text-sm font-medium text-paper-50 transition-colors hover:bg-navy-800"
          >
            Book a Call
          </a>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-navy-900 transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-navy-900 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-navy-900 transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-200 bg-paper-50 md:hidden">
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-sm font-medium text-ink-700 border-b border-stone-100 last:border-none"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center border border-navy-900 bg-navy-900 px-5 py-3 text-sm font-medium text-paper-50"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
