import { getTranslations } from "next-intl/server";

import { DetailedServiceCard } from "@/components/services/detailed-service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";

type ServiceCategorySectionProps = {
  category: "hotel" | "building";
  surface?: boolean;
};

export async function ServiceCategorySection({
  category,
  surface = false,
}: ServiceCategorySectionProps) {
  const t = await getTranslations("ServicesPage");

  const categoryServices = services.filter((service) => service.category === category);

  return (
    <section className={surface ? "bg-surface py-20 sm:py-24" : "bg-white py-20 sm:py-24"}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t(`categories.${category}.eyebrow`)}
          title={t(`categories.${category}.title`)}
          description={t(`categories.${category}.description`)}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categoryServices.map((service) => {

            return (
              <DetailedServiceCard
                key={service.id}
                icon={service.icon}
                image={service.image}
                imageAlt={t(`items.${service.id}.imageAlt`)}
                title={t(`items.${service.id}.title`)}
                description={t(`items.${service.id}.description`)}
                features={t.raw(`items.${service.id}.features`)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
