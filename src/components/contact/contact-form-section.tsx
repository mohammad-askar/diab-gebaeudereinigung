import { getTranslations } from "next-intl/server";

import { SectionHeading } from "@/components/ui/section-heading";
import type { ContactFormState } from "@/types/contact";

import { ContactForm } from "./contact-form";

type ContactFormSectionProps = {
  action: (previousState: ContactFormState, formData: FormData) => Promise<ContactFormState>;
};

export async function ContactFormSection({ action }: ContactFormSectionProps) {
  const t = await getTranslations("ContactPage.form");

  return (
    <div className="border-border shadow-brand-blue-dark/10 rounded-[2rem] border bg-white p-6 shadow-xl sm:p-8">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <ContactForm action={action} />
    </div>
  );
}
