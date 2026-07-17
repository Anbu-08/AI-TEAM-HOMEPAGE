import { Mail, CalendarDays, Users, RadioTower, CircleCheck } from "lucide-react";

const services = [
  {
    icon: Mail,
    name: "Gmail",
    items: [
      "Read and analyze email messages",
      "Generate AI-powered summaries",
      "Create and manage draft replies",
      "Organize inbox content",
      "Send emails on behalf of the user when requested",
    ],
  },
  {
    icon: CalendarDays,
    name: "Google Calendar",
    items: [
      "View calendar events",
      "Assist with meeting scheduling",
      "Create and manage events when requested by the user",
    ],
  },
  {
    icon: Users,
    name: "Google Contacts",
    items: [
      "Access contact information to improve recipient suggestions and communication workflows",
    ],
  },
  {
    icon: RadioTower,
    name: "Google Cloud Pub/Sub",
    items: [
      "Receive real-time Gmail notifications to keep inbox data synchronized",
    ],
  },
];

export default function GoogleServicesSection() {
  return (
    <section id="google-services" className="section-anchor bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Google Services Used
          </h2>
          <p className="mt-4 text-base text-foreground/60">
            Personal Assistant uses Google APIs only after explicit user authorization
            through Google OAuth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map(({ icon: Icon, name, items }) => (
            <div key={name} className="rounded-2xl border border-surface-border bg-background p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon size={19} strokeWidth={1.8} />
                </span>
                <h3 className="text-base font-bold text-foreground">{name}</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                    <CircleCheck size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
