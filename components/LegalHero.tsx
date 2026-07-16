export default function LegalHero({
  title,
  updated,
}: {
  title: string;
  updated: string;
}) {
  return (
    <div className="border-b border-surface-border bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-foreground/50">Last updated: {updated}</p>
      </div>
    </div>
  );
}
