import { Mail, Globe } from "lucide-react";
import { site } from "@/lib/site";

export default function ContactSection() {
  return (
    <section id="contact" className="section-anchor bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="brand-gradient overflow-hidden rounded-3xl px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Get in Touch</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Questions about {site.productName}, our data practices, or Gmail permissions?
            Reach out any time.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.supportEmail}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition-transform hover:scale-[1.03]"
            >
              <Mail size={16} />
              {site.supportEmail}
            </a>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Globe size={16} />
              {site.url.replace("https://", "")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
