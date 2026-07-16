import Image from "next/image";
import { site } from "@/lib/site";

export default function AboutSection() {
  return (
    <section id="about" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-surface-border bg-surface px-8 py-14 text-center">
        <Image src="/logo.svg" alt="Takshashila AI Team logo" width={56} height={56} className="h-14 w-14" />
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Developed by {site.developer}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-foreground/65">
          {site.developer} is a research and engineering initiative focused on building
          AI-powered productivity tools, intelligent assistants, and educational technology
          solutions.
        </p>
      </div>
    </section>
  );
}
