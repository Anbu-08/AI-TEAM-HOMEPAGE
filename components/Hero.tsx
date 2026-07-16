import { ShieldCheck } from "lucide-react";
import InboxIllustration from "./InboxIllustration";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="section-anchor hero-glow relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-foreground/70">
            <ShieldCheck size={14} className="text-emerald-500" />
            Verified Google OAuth application
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {site.productName}
          </h1>
          <p className="mt-3 text-lg font-medium text-brand-600 sm:text-xl">
            {site.tagline}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/65 sm:text-lg">
            Personal Assistant helps users organize emails, generate AI-powered summaries,
            draft professional replies, search emails quickly, and receive intelligent daily
            briefings — all while keeping user data secure.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.signInUrl}
              className="brand-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-transform hover:scale-[1.03]"
            >
              <GoogleGlyph />
              Sign in with Google
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-surface-border px-7 py-3.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-surface"
            >
              Learn More
            </a>
          </div>

          <p className="mt-5 text-xs text-foreground/45">
            An AI-powered Gmail productivity assistant that helps users manage their inbox
            more efficiently using secure Google authentication.
          </p>
        </div>

        <InboxIllustration />
      </div>
    </section>
  );
}

function GoogleGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0 rounded-full bg-white p-[3px]">
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.98v2.33A9 9 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.98A9 9 0 0 0 0 9c0 1.45.35 2.83.98 4.03l2.97-2.33z" />
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .98 4.97l2.97 2.33C4.66 5.17 6.65 3.58 9 3.58z" />
    </svg>
  );
}
