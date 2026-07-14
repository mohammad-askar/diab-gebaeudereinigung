import { ServiceIcon } from "@/components/ui/service-icon";
import type { ServiceIconName } from "@/types";

type DetailedServiceCardProps = {
  icon: ServiceIconName;
  title: string;
  description: string;
  features: string[];
};

export function DetailedServiceCard({
  icon,
  title,
  description,
  features,
}: DetailedServiceCardProps) {
  return (
    <article className="group border-border hover:border-brand-blue/30 hover:shadow-brand-blue-dark/10 flex h-full flex-col rounded-3xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl sm:p-7">
      <div className="bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue flex size-14 items-center justify-center rounded-2xl transition group-hover:text-white">
        <ServiceIcon name={icon} />
      </div>

      <h3 className="text-brand-blue-dark mt-6 text-xl font-bold sm:text-2xl">{title}</h3>

      <p className="text-muted mt-3 leading-7">{description}</p>

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="bg-brand-green mt-1 flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
            >
              ✓
            </span>

            <span className="text-foreground leading-7">{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
