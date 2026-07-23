import { getTranslations } from "next-intl/server";

import { SectionHeading } from "@/components/ui/section-heading";
import { company } from "@/data/company";

export async function OwnersSection() {
  const t = await getTranslations("AboutPage.owners");
  const teamMembers = [
    {
      name: company.owners[0],
      role: t("ownerRole"),
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
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="border-border rounded-3xl border bg-white p-7 text-center"
            >
              <div className="bg-brand-blue/10 text-brand-blue mx-auto flex size-20 items-center justify-center rounded-full text-2xl font-bold">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <h3 className="text-brand-blue-dark mt-5 text-xl font-bold">{member.name}</h3>

              <p className="text-muted mt-2">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
