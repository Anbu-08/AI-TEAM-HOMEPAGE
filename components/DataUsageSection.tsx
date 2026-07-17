import { ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

export default function DataUsageSection() {
  return (
    <section id="data-usage" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Google User Data Usage
        </h2>
        <p className="mt-5 text-base leading-relaxed text-foreground/65">
          {site.productName} accesses Google user data only with explicit user consent.
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground/65">
          The application uses Gmail, Calendar, and Contacts data solely to provide email
          management, scheduling assistance, contact suggestions, AI-powered summaries, and
          communication productivity features.
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground/65">
          {site.productName} does not sell user data and does not use Google Workspace data
          for advertising purposes.
        </p>

        <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-surface-border bg-surface p-6 text-left">
          <ShieldCheck size={20} className="mt-0.5 shrink-0 text-emerald-500" />
          <p className="text-sm leading-relaxed text-foreground/75">
            {site.productName}&apos;s use and transfer of information received from Google APIs
            will adhere to the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-600 hover:text-brand-700"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
