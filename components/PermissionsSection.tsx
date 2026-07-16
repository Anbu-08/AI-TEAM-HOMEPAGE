import { Eye, FolderKanban, PenSquare, CircleCheck } from "lucide-react";

const scopes = [
  {
    icon: Eye,
    scope: "gmail.readonly",
    description: "Used to summarize emails.",
  },
  {
    icon: FolderKanban,
    scope: "gmail.modify",
    description: "Used to organize inbox content.",
  },
  {
    icon: PenSquare,
    scope: "gmail.compose",
    description: "Used to create draft replies.",
  },
];

const assurances = [
  "No emails are sent automatically.",
  "No data is used for advertising.",
];

export default function PermissionsSection() {
  return (
    <section id="permissions" className="section-anchor bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Why Gmail Permissions Are Needed
          </h2>
          <p className="mt-4 text-base text-foreground/60">
            Personal Assistant requests only the specific Gmail scopes required to power its
            features — nothing more.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {scopes.map(({ icon: Icon, scope, description }) => (
            <div key={scope} className="rounded-2xl border border-surface-border bg-background p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon size={19} strokeWidth={1.8} />
              </span>
              <p className="mt-4 font-mono text-sm font-semibold text-foreground">{scope}</p>
              <p className="mt-1.5 text-sm text-foreground/60">{description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
          {assurances.map((text) => (
            <div key={text} className="flex items-center gap-2 rounded-full border border-surface-border bg-background px-4 py-2 text-sm font-medium text-foreground/70">
              <CircleCheck size={16} className="shrink-0 text-emerald-500" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
