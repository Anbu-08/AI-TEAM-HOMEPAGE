import { LogIn, ShieldCheck, ScanSearch, Sparkles } from "lucide-react";

const steps = [
  {
    icon: LogIn,
    title: "Sign in securely",
    description: "Sign in securely with your Google Account.",
  },
  {
    icon: ShieldCheck,
    title: "Grant permissions",
    description: "Grant Gmail permissions through Google's OAuth consent screen.",
  },
  {
    icon: ScanSearch,
    title: "Secure analysis",
    description: "The application analyzes your emails securely.",
  },
  {
    icon: Sparkles,
    title: "Get insights",
    description: "Generate summaries, drafts, and insights.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-anchor bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
        </div>

        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-6 left-0 right-0 hidden h-px bg-surface-border lg:block" aria-hidden="true" />
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-background text-sm font-bold text-brand-600 shadow-sm ring-4 ring-surface">
                {index + 1}
              </span>
              <span className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon size={19} strokeWidth={1.8} />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 max-w-[15rem] text-sm text-foreground/60">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
