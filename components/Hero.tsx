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
            Uses secure Google Sign-In
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {site.productName}
          </h1>
          <p className="mt-3 text-lg font-medium text-brand-600 sm:text-xl">
            {site.tagline}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/65 sm:text-lg">
            Personal Assistant helps users manage Gmail, Calendar, and Contacts through
            AI-powered automation. The application can summarize emails, generate draft
            replies, organize inbox content, assist with scheduling, and improve communication
            productivity.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.signInUrl}
              className="brand-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-transform hover:scale-[1.03]"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-surface-border px-7 py-3.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-surface"
            >
              Learn More
            </a>
          </div>

          <p className="mt-5 text-xs text-foreground/45">
            Gmail, Google Calendar, and Google Contacts are accessed only after you grant
            permission through Google&apos;s OAuth consent screen.
          </p>
        </div>

        <InboxIllustration />
      </div>
    </section>
  );
}
