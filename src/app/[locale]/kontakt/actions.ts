"use server";

import { getTranslations } from "next-intl/server";

import { contactFormSchema } from "@/lib/validation/contact";
import type { ContactFormState } from "@/types/contact";

function getStringValue(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value : "";
}

export async function submitContactForm(
  locale: string,
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const t = await getTranslations({
    locale,
    namespace: "ContactPage.form",
  });

  const rawValues = {
    name: getStringValue(formData, "name"),
    email: getStringValue(formData, "email"),
    phone: getStringValue(formData, "phone"),
    service: getStringValue(formData, "service"),
    message: getStringValue(formData, "message"),
    privacy: getStringValue(formData, "privacy"),
    website: getStringValue(formData, "website"),
  };

  if (rawValues.website) {
    return {
      status: "error",
      message: t("validation.spamDetected"),
    };
  }

  const result = contactFormSchema.safeParse(rawValues);

  if (!result.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};

    for (const issue of result.error.issues) {
      const field = issue.path[0];

      if (typeof field !== "string" || field === "website") {
        continue;
      }

      const translatedMessage = (() => {
        switch (field) {
          case "name":
            return t("validation.nameRequired");
          case "email":
            return t("validation.emailInvalid");
          case "phone":
            return t("validation.phoneInvalid");
          case "service":
            return t("validation.serviceRequired");
          case "message":
            return t("validation.messageRequired");
          case "privacy":
            return t("validation.privacyRequired");
          default:
            return t("generalError");
        }
      })();

      const existingErrors = fieldErrors[field as keyof typeof fieldErrors] ?? [];

      fieldErrors[field as keyof typeof fieldErrors] = [...existingErrors, translatedMessage];
    }

    return {
      status: "error",
      message: t("generalError"),
      fieldErrors,
      values: {
        name: rawValues.name,
        email: rawValues.email,
        phone: rawValues.phone,
        service: rawValues.service,
        message: rawValues.message,
      },
    };
  }

  /*
   * The data is valid here.
   * Email delivery will be connected in a separate task.
   *
   * Do not log contact form contents in production because they contain
   * personal data.
   */

  return {
    status: "success",
    message: t("temporarySuccess"),
  };
}
