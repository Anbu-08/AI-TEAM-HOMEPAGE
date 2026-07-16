import { Mail, PenLine, FolderKanban, Search, BellRing, LockKeyhole, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Mail,
    title: "Email Summaries",
    description: "Quickly understand long email conversations using AI-generated summaries.",
  },
  {
    icon: PenLine,
    title: "Smart Reply Drafting",
    description: "Generate professional draft replies while keeping you in complete control before sending.",
  },
  {
    icon: FolderKanban,
    title: "Inbox Organization",
    description: "Categorize and organize emails to reduce clutter and improve productivity.",
  },
  {
    icon: Search,
    title: "Intelligent Search",
    description: "Search emails naturally using keywords and AI-powered understanding.",
  },
  {
    icon: BellRing,
    title: "Daily Email Briefings",
    description: "Receive concise daily overviews of important emails and tasks.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Authentication",
    description: "Connect your Gmail securely through Google's official OAuth 2.0 authentication.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Everything you need to manage Gmail smarter
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-surface-border bg-background p-7 shadow-sm transition-shadow hover:shadow-lg hover:shadow-brand-700/5"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon size={22} strokeWidth={1.8} />
            </span>
            <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
