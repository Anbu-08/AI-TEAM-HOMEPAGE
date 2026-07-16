"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.svg" alt="Takshashila AI Team logo" width={40} height={40} className="h-10 w-10" />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-foreground sm:text-lg">
              {site.productName}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wide text-foreground/50">
              by {site.developer}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {site.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.signInUrl}
            className="brand-gradient rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/20 transition-transform hover:scale-[1.03]"
          >
            Sign in with Google
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 hover:bg-surface lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-surface-border bg-background px-5 pb-5 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {site.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/75 hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={site.signInUrl}
            className="brand-gradient mt-3 block rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Sign in with Google
          </a>
        </div>
      )}
    </header>
  );
}
