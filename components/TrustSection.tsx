import { ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

export default function TrustSection() {
  return (
    <section id="trust" className="section-anchor border-y border-surface-border bg-surface">
      <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
          <ShieldCheck size={24} strokeWidth={1.8} />
        </span>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          Secure Google Integration
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/65">
          {site.productName} uses Google OAuth for secure authentication and accesses Gmail,
          Google Calendar, and Google Contacts only after explicit user consent. User data is
          processed solely to provide requested productivity features and is never sold or
          used for advertising purposes.
        </p>
      </div>
    </section>
  );
}
