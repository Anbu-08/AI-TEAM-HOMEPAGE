import type { Metadata } from "next";
import Link from "next/link";
import LegalHero from "@/components/LegalHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms and conditions governing use of ${site.productName} by ${site.developer}.`,
};

const h2 = "mt-10 text-xl font-bold text-foreground sm:text-2xl";
const p = "mt-3 text-[15px] leading-relaxed text-foreground/70";
const ul = "mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-foreground/70";

export default function TermsOfServicePage() {
  return (
    <>
      <LegalHero title="Terms of Service" updated="July 16, 2026" />

      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <p className={p}>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of{" "}
          <strong>{site.productName}</strong> (&ldquo;the Application&rdquo;), developed and
          operated by <strong>{site.developer}</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
          &ldquo;our&rdquo;). By signing in with your Google Account and using the Application,
          you agree to these Terms.
        </p>

        <h2 className={h2}>1. Description of Service</h2>
        <p className={p}>
          {site.productName} is an AI-powered Gmail productivity assistant that helps users
          organize emails, generate AI-powered summaries, draft professional replies, search
          emails, and receive daily email briefings, using access granted through Google&apos;s
          OAuth 2.0 authentication.
        </p>

        <h2 className={h2}>2. Eligibility</h2>
        <p className={p}>
          You must have a valid Google Account and the legal capacity to agree to these Terms to
          use the Application. By using the Application, you represent that you meet these
          requirements.
        </p>

        <h2 className={h2}>3. Google Account &amp; Gmail Access</h2>
        <p className={p}>
          Use of the Application requires you to authenticate with your Google Account and grant
          the Gmail permission (<code>gmail.modify</code>) via Google&apos;s official OAuth
          consent screen. This permission is used to read emails for summaries, organize inbox
          content, and create draft replies — never to send or delete email. You may
          review, limit, or revoke this access at any time from your{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-600 hover:text-brand-700"
          >
            Google Account permissions page
          </a>
          . Our handling of data obtained through these permissions is described in our{" "}
          <Link href="/privacy" className="font-medium text-brand-600 hover:text-brand-700">
            Privacy Policy
          </Link>
          .
        </p>

        <h2 className={h2}>4. Acceptable Use</h2>
        <p className={p}>You agree not to:</p>
        <ul className={ul}>
          <li>Use the Application for any unlawful purpose or in violation of any applicable law or regulation.</li>
          <li>Attempt to gain unauthorized access to the Application, other users&apos; accounts, or connected systems.</li>
          <li>Interfere with, disrupt, or reverse-engineer the Application or its underlying infrastructure.</li>
          <li>Use the Application to transmit spam, malware, or otherwise abuse Gmail sending functionality.</li>
        </ul>

        <h2 className={h2}>5. AI-Generated Content</h2>
        <p className={p}>
          Summaries, draft replies, search results, and briefings are generated using automated,
          AI-based processing and are provided for your convenience. You are solely responsible
          for reviewing any AI-generated draft before sending it — the Application never sends
          emails automatically or without your explicit action.
        </p>

        <h2 className={h2}>6. Intellectual Property</h2>
        <p className={p}>
          The Application, including its design, branding, and underlying software, is the
          property of {site.developer}. These Terms do not grant you any rights to our
          trademarks, logos, or brand assets except as necessary to use the Application as
          intended.
        </p>

        <h2 className={h2}>7. Disclaimer of Warranties</h2>
        <p className={p}>
          The Application is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo;
          without warranties of any kind, express or implied, including but not limited to
          accuracy, reliability, or fitness for a particular purpose. AI-generated summaries and
          drafts may occasionally be incomplete or inaccurate — always review content before
          relying on or sending it.
        </p>

        <h2 className={h2}>8. Limitation of Liability</h2>
        <p className={p}>
          To the fullest extent permitted by law, {site.developer} shall not be liable for any
          indirect, incidental, special, or consequential damages arising out of or related to
          your use of the Application.
        </p>

        <h2 className={h2}>9. Termination</h2>
        <p className={p}>
          You may stop using the Application and revoke its access to your Google Account at any
          time. We may suspend or terminate access to the Application for any user who violates
          these Terms.
        </p>

        <h2 className={h2}>10. Changes to These Terms</h2>
        <p className={p}>
          We may update these Terms from time to time. Material changes will be reflected by an
          updated &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the
          Application after changes take effect constitutes acceptance of the revised Terms.
        </p>

        <h2 className={h2}>11. Governing Law</h2>
        <p className={p}>
          These Terms are governed by the laws of India, without regard to conflict-of-law
          principles.
        </p>

        <h2 className={h2}>12. Contact Us</h2>
        <p className={p}>
          Questions about these Terms can be directed to {site.developer} at{" "}
          <a href={`mailto:${site.supportEmail}`} className="font-medium text-brand-600 hover:text-brand-700">
            {site.supportEmail}
          </a>{" "}
          or{" "}
          <a href={site.url} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 hover:text-brand-700">
            {site.url.replace("https://", "")}
          </a>
          .
        </p>

        <p className="mt-12 text-sm text-foreground/50">
          See also our <Link href="/privacy" className="font-medium text-brand-600 hover:text-brand-700">Privacy Policy</Link>.
        </p>
      </div>
    </>
  );
}
