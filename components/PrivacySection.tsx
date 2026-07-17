import Link from "next/link";
import { Eye, Sparkles, PenLine, FolderKanban, CalendarDays, Users, ShieldOff, Ban, UserCheck } from "lucide-react";

const usages = [
  { icon: Eye, label: "Reading emails" },
  { icon: Sparkles, label: "Generating summaries" },
  { icon: PenLine, label: "Creating draft replies" },
  { icon: FolderKanban, label: "Organizing inbox content" },
  { icon: CalendarDays, label: "Assisting with scheduling" },
  { icon: Users, label: "Suggesting recipients from contacts" },
];

const commitments = [
  { icon: Ban, label: "Never sells user data" },
  { icon: ShieldOff, label: "Never shares Google user data with third parties" },
  { icon: UserCheck, label: "Users can revoke access anytime from their Google Account" },
];

export default function PrivacySection() {
  return (
    <section id="privacy" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Your Privacy Comes First
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/65">
            Personal Assistant only accesses Gmail, Google Calendar, and Google Contacts after
            the user explicitly grants permission through Google&apos;s OAuth process. The
            application only uses this data to provide the requested features, including:
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {usages.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 rounded-xl border border-surface-border bg-background px-4 py-3 text-sm text-foreground/75">
                <Icon size={16} className="shrink-0 text-brand-600" />
                {label}
              </li>
            ))}
          </ul>

          <Link
            href="/privacy"
            className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Read the full Privacy Policy →
          </Link>
        </div>

        <div className="rounded-2xl border border-surface-border bg-surface p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
            Our commitments
          </h3>
          <ul className="mt-5 space-y-4">
            {commitments.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Icon size={16} />
                </span>
                <p className="text-sm leading-relaxed text-foreground/75">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
