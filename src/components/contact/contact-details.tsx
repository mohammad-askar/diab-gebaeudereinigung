import { getTranslations } from "next-intl/server";

import { SectionHeading } from "@/components/ui/section-heading";
import { company } from "@/data/company";

export async function ContactDetails() {
  const t = await getTranslations("ContactPage.details");

  return (
    <div>
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        <article className="border-border bg-surface rounded-3xl border p-6">
          <h3 className="text-brand-blue-dark font-bold">{t("phoneTitle")}</h3>

          <ul className="mt-4 space-y-3">
            {company.contact.phoneNumbers.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="text-brand-blue hover:text-brand-blue-dark font-semibold"
                >
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article className="border-border bg-surface rounded-3xl border p-6">
          <h3 className="text-brand-blue-dark font-bold">{t("emailTitle")}</h3>

          <a
            href={`mailto:${company.contact.email}`}
            className="text-brand-blue hover:text-brand-blue-dark mt-4 block font-semibold break-all"
          >
            {company.contact.email}
          </a>
        </article>

        <article className="border-border bg-surface rounded-3xl border p-6 sm:col-span-2">
          <h3 className="text-brand-blue-dark font-bold">{t("locationTitle")}</h3>

          <p className="text-muted mt-4 leading-7">{t("locationValue")}</p>
        </article>
      </div>

      <div className="border-border bg-surface mt-6 rounded-3xl border p-6">
        <h3 className="text-brand-blue-dark text-xl font-bold">{t("mapTitle")}</h3>

        <p className="text-muted mt-3 leading-7">{t("mapDescription")}</p>

        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noreferrer"
          className="border-brand-blue text-brand-blue mt-5 inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 font-bold transition hover:bg-white"
        >
          {t("mapButton")}
        </a>
      </div>
    </div>
  );
}
