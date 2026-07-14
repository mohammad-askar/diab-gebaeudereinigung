import { getTranslations } from "next-intl/server";

import { SectionHeading } from "@/components/ui/section-heading";
import { company } from "@/data/company";

export async function OwnersSection() {
  const t = await getTranslations("AboutPage.owners");

  const owners = [
    {
      name: company.owners[0],
      role: t("firstOwnerRole"),
    },
    {
      name: company.owners[1],
      role: t("secondOwnerRole"),
    },
  ];

  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {owners.map((owner) => (
            <article
              key={owner.name}
              className="border-border rounded-3xl border bg-white p-7 text-center"
            >
              <div className="bg-brand-blue/10 text-brand-blue mx-auto flex size-20 items-center justify-center rounded-full text-2xl font-bold">
                {owner.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <h3 className="text-brand-blue-dark mt-5 text-xl font-bold">{owner.name}</h3>

              <p className="text-muted mt-2">{owner.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
