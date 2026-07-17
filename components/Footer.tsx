import Image from "next/image";
import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/takshashila-university-logo.png"
              alt="Takshashila University logo"
              width={500}
              height={148}
              className="h-9 w-auto"
            />
            <span className="border-l border-surface-border pl-3 text-sm font-bold text-foreground">
              {site.productName}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-foreground/60">
            {site.tagline}. Developed and maintained by {site.developer} — a research and
            engineering initiative building AI-powered productivity tools.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/privacy" className="text-foreground/60 hover:text-brand-600">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-foreground/60 hover:text-brand-600">Terms of Service</Link></li>
            <li><Link href="/data-deletion" className="text-foreground/60 hover:text-brand-600">Data Deletion</Link></li>
            <li><a href={`mailto:${site.supportEmail}`} className="text-foreground/60 hover:text-brand-600">Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Support</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`mailto:${site.supportEmail}`} className="flex items-center gap-2 text-foreground/60 hover:text-brand-600">
                <Mail size={15} /> {site.supportEmail}
              </a>
            </li>
            <li>
              <a href={site.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/60 hover:text-brand-600">
                <Globe size={15} /> {site.url.replace("https://", "")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-surface-border px-5 py-6 sm:px-8">
        <p className="text-center text-xs text-foreground/50">
          © {year} {site.developer}. {site.productName} is developed by {site.developer}.
        </p>
      </div>
    </footer>
  );
}
