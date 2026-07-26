import Image from "next/image";

import { ServiceIcon } from "@/components/ui/service-icon";
import type { ServiceIconName } from "@/types";

type DetailedServiceCardProps = {
  icon: ServiceIconName;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  features: string[];
};

export function DetailedServiceCard({
  icon,
  image,
  imageAlt,
  title,
  description,
  features,
}: DetailedServiceCardProps) {
  return (
    <article className="group border-border hover:border-brand-blue/30 hover:shadow-brand-blue-dark/10 flex h-full flex-col overflow-hidden rounded-3xl border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative m-3 aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.14)]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="scale-[1.1] object-cover object-center transition duration-500 ease-out group-hover:scale-[1.15]"
        />

        {/* Light general overlay */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-slate-950/5" />

        {/* Bottom gradient for icon visibility */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-950/5 to-transparent"
        />

        {/* Soft shadow in the top-right corner */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.18),transparent_34%)]"
        />

        {/* Stronger shadow in the bottom-right corner to hide the symbol */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.78),transparent_27%)]"
        />

        {/* Soft shadow in the bottom-left corner */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.14),transparent_32%)]"
        />

        {/* Light inner border */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[1.4rem] ring-1 ring-white/30 ring-inset"
        />

        <div className="absolute start-5 bottom-5">
          <div className="bg-brand-blue/90 group-hover:bg-brand-blue flex size-14 items-center justify-center rounded-2xl text-white shadow-lg ring-1 ring-white/20 backdrop-blur-sm transition duration-300">
            <ServiceIcon name={icon} />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pt-3 pb-7 sm:px-7 sm:pb-8">
        <h3 className="text-brand-blue-dark text-xl font-bold sm:text-2xl">{title}</h3>

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
      </div>
    </article>
  );
}
