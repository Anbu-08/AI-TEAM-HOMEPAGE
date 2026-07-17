import type { Metadata } from "next";
import Link from "next/link";
import LegalHero from "@/components/LegalHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Personal Assistant by Takshashila AI Team accesses, uses, and protects your Gmail data.",
};

const h2 = "mt-10 text-xl font-bold text-foreground sm:text-2xl";
const p = "mt-3 text-[15px] leading-relaxed text-foreground/70";
const ul = "mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-foreground/70";

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHero title="Privacy Policy" updated="July 17, 2026" />

      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <p className={p}>
          This Privacy Policy explains how <strong>{site.productName}</strong> (&ldquo;the
          Application,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;), developed and operated by{" "}
          <strong>{site.developer}</strong>, accesses, uses, stores, and protects information
          when you use the Application, including data obtained through your Google Account via
          Google&apos;s OAuth 2.0 authentication.
        </p>

        <h2 className={h2}>1. Who We Are</h2>
        <p className={p}>
          {site.productName} is an AI-powered Gmail productivity assistant built and maintained
          by {site.developer}. This policy applies to the Application and its associated
          Google OAuth integration only.
        </p>

        <h2 className={h2}>2. Information We Access</h2>
        <p className={p}>
          When you sign in with Google and grant permission, {site.productName} may access the
          following Google services, and only after you explicitly consent through
          Google&apos;s OAuth consent screen:
        </p>
        <ul className={ul}>
          <li>
            <strong>Gmail</strong> — to read and analyze email messages, generate AI-powered
            summaries, create and manage draft replies, organize inbox content, and send
            emails on your behalf only when you request it.
          </li>
          <li>
            <strong>Google Calendar</strong> — to view calendar events, assist with meeting
            scheduling, and create and manage events when you request it.
          </li>
          <li>
            <strong>Google Contacts</strong> — to access contact information to improve
            recipient suggestions and communication workflows.
          </li>
          <li>
            <strong>Google Cloud Pub/Sub</strong> — to receive real-time Gmail notifications
            that keep your inbox data synchronized.
          </li>
        </ul>
        <p className={p}>
          We also access basic Google profile information (name, email address, profile
          picture) to identify your account within the Application.
        </p>

        <h2 className={h2}>3. How We Use Your Information</h2>
        <p className={p}>Google user data accessed through these services is used exclusively to power the features you request, including:</p>
        <ul className={ul}>
          <li>Reading emails to generate AI-powered summaries.</li>
          <li>Generating concise summaries of long email conversations.</li>
          <li>Creating draft replies that remain in your Drafts folder until you choose to send them.</li>
          <li>Sending emails on your behalf, only when you explicitly request it.</li>
          <li>Organizing and categorizing inbox content to reduce clutter.</li>
          <li>Powering natural-language, AI-assisted email search.</li>
          <li>Assisting with meeting scheduling and managing calendar events you request.</li>
          <li>Suggesting recipients and improving communication workflows using your contacts.</li>
          <li>Compiling daily briefings of important emails and tasks.</li>
        </ul>
        <p className={p}>
          <strong>{site.productName} never sends emails without your explicit request</strong> —
          emails are sent only when you ask the Application to send them. Google user data is
          never used to serve advertisements.
        </p>

        <h2 className={h2}>4. Google API Services User Data Policy</h2>
        <p className={p}>
          {site.productName}&apos;s use and transfer of information received from Google APIs
          adheres to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-600 hover:text-brand-700"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. Gmail data is used only to provide or
          improve the user-facing features of the Application, is never used for
          advertising, and human review of email content occurs only with your explicit consent,
          to investigate abuse or a security incident, or to comply with applicable law.
        </p>

        <h2 className={h2}>5. What We Do Not Do</h2>
        <ul className={ul}>
          <li>We never sell user data.</li>
          <li>We never share Google user data with third parties.</li>
          <li>We never use Google Workspace data for advertising or ad targeting.</li>
          <li>We never send emails on your behalf without your explicit request.</li>
          <li>We do not use Google user data to train generalized/non-personalized AI or machine-learning models.</li>
        </ul>

        <h2 className={h2}>6. Data Storage &amp; Security</h2>
        <p className={p}>
          Data accessed via Gmail scopes is transmitted over encrypted connections (HTTPS/TLS)
          and processed only to deliver the features described above. Access is restricted to
          the systems and personnel required to operate the Application. We apply
          industry-standard administrative, technical, and physical safeguards designed to
          protect your information against unauthorized access, alteration, or disclosure.
        </p>

        <h2 className={h2}>7. Data Retention</h2>
        <p className={p}>
          We retain the minimum data necessary to provide the Application&apos;s features
          (such as cached summaries or authentication tokens) for as long as your account is
          active. You may request deletion of your data at any time by contacting us, and all
          retained data is deleted upon revocation of access or account deletion, except where
          retention is required by law. See our{" "}
          <Link href="/data-deletion" className="font-medium text-brand-600 hover:text-brand-700">
            Data Deletion Instructions
          </Link>{" "}
          for step-by-step guidance.
        </p>

        <h2 className={h2}>8. Your Choices &amp; How to Revoke Access</h2>
        <p className={p}>
          You remain in control of your data at all times. You can review or revoke{" "}
          {site.productName}&apos;s access to your Google Account at any time from your{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-600 hover:text-brand-700"
          >
            Google Account permissions page
          </a>
          . Revoking access immediately stops the Application from accessing your Gmail data.
        </p>

        <h2 className={h2}>9. Children&apos;s Privacy</h2>
        <p className={p}>
          {site.productName} is not directed at children under 13, and we do not knowingly
          collect information from children under 13.
        </p>

        <h2 className={h2}>10. Changes to This Policy</h2>
        <p className={p}>
          We may update this Privacy Policy from time to time. Material changes will be
          reflected by an updated &ldquo;Last updated&rdquo; date at the top of this page.
          Continued use of the Application after changes take effect constitutes acceptance of
          the revised policy.
        </p>

        <h2 className={h2}>11. Contact Us</h2>
        <p className={p}>
          If you have questions about this Privacy Policy or our data practices, contact{" "}
          {site.developer} at{" "}
          <a href={`mailto:${site.supportEmail}`} className="font-medium text-brand-600 hover:text-brand-700">
            {site.supportEmail}
          </a>{" "}
          or visit{" "}
          <a href={site.url} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 hover:text-brand-700">
            {site.url.replace("https://", "")}
          </a>
          .
        </p>

        <p className="mt-12 text-sm text-foreground/50">
          See also our <Link href="/terms" className="font-medium text-brand-600 hover:text-brand-700">Terms of Service</Link>.
        </p>
      </div>
    </>
  );
}
