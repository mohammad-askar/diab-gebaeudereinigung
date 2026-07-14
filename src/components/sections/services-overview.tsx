import { getTranslations } from "next-intl/server";

import { featuredServices } from "@/data/services";
import { Link } from "@/i18n/navigation";

import { SectionHeading } from "../ui/section-heading";
import { ServiceIcon } from "../ui/service-icon";

export async function ServicesOverview() {
  const t = await getTranslations("HomePage.services");

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />

          <Link
            href="/leistungen"
            className="text-brand-blue hover:text-brand-blue-dark inline-flex shrink-0 items-center gap-2 self-start font-bold lg:self-auto"
          >
            {t("viewAll")}
            <span aria-hidden="true" className="directional-icon">
              →
            </span>
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <article
              key={service.id}
              className="group border-border hover:border-brand-blue/30 hover:shadow-brand-blue-dark/10 rounded-3xl border bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue flex size-14 items-center justify-center rounded-2xl transition group-hover:text-white">
                <ServiceIcon name={service.icon} />
              </div>

              <h3 className="text-brand-blue-dark mt-6 text-xl font-bold">
                {t(`items.${service.id}.title`)}
              </h3>

              <p className="text-muted mt-3 leading-7">{t(`items.${service.id}.description`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
