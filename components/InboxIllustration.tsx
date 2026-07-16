import { Inbox, Search, Send, Star, FileText, Sparkles, ShieldCheck, Bell } from "lucide-react";

const emails = [
  { initial: "R", color: "bg-brand-500", name: "Registrar's Office", subject: "Semester exam schedule — action needed", time: "9:14 AM", unread: true },
  { initial: "P", color: "bg-emerald-500", name: "Project Team", subject: "Weekly sync notes + next steps", time: "8:47 AM", unread: true },
  { initial: "F", color: "bg-amber-500", name: "Finance Desk", subject: "Invoice #2291 approved", time: "Yesterday", unread: false },
  { initial: "A", color: "bg-violet-500", name: "Advisor", subject: "Re: recommendation letter draft", time: "Yesterday", unread: false },
];

export default function InboxIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <div className="hero-glow absolute -inset-10 -z-10 rounded-[3rem] blur-2xl" aria-hidden="true" />

      <div className="overflow-hidden rounded-3xl border border-surface-border bg-background shadow-2xl shadow-brand-700/10">
        <div className="flex items-center gap-2 border-b border-surface-border bg-surface px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-medium text-foreground/50">Personal Assistant · Inbox</span>
          <Search size={14} className="ml-auto text-foreground/30" />
        </div>

        <div className="flex">
          <div className="hidden w-14 flex-col items-center gap-4 border-r border-surface-border bg-surface py-5 sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white">
              <Inbox size={16} />
            </span>
            <Star size={16} className="text-foreground/30" />
            <Send size={16} className="text-foreground/30" />
            <FileText size={16} className="text-foreground/30" />
          </div>

          <div className="flex-1 divide-y divide-surface-border">
            {emails.map((email) => (
              <div key={email.name} className="flex items-center gap-3 px-4 py-3.5">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${email.color}`}>
                  {email.initial}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className={`truncate text-sm ${email.unread ? "font-semibold text-foreground" : "font-medium text-foreground/70"}`}>
                      {email.name}
                    </p>
                    <span className="shrink-0 text-[11px] text-foreground/40">{email.time}</span>
                  </div>
                  <p className="truncate text-xs text-foreground/50">{email.subject}</p>
                </div>
                {email.unread && <span className="h-2 w-2 shrink-0 rounded-full bg-brand-500" />}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-surface-border bg-brand-50 px-4 py-3.5">
          <div className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-brand-700">
            <Sparkles size={13} />
            AI Summary
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-[90%] rounded-full bg-brand-100" />
            <div className="h-1.5 w-[70%] rounded-full bg-brand-100" />
          </div>
        </div>
      </div>

      <div className="absolute -right-4 -top-5 flex items-center gap-1.5 rounded-full border border-surface-border bg-background px-3 py-2 text-xs font-semibold text-foreground shadow-lg sm:-right-8">
        <ShieldCheck size={14} className="text-emerald-500" />
        Secured by Google OAuth
      </div>

      <div className="absolute -bottom-5 -left-4 flex items-center gap-1.5 rounded-full border border-surface-border bg-background px-3 py-2 text-xs font-semibold text-foreground shadow-lg sm:-left-8">
        <Bell size={14} className="text-accent-orange" />
        Daily briefing ready
      </div>
    </div>
  );
}
