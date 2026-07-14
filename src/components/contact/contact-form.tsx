"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { contactServiceIds } from "@/lib/validation/contact";
import type { ContactFormState } from "@/types/contact";

import { FieldError } from "./field-error";
import { SubmitButton } from "./submit-button";

type ContactFormProps = {
  action: (previousState: ContactFormState, formData: FormData) => Promise<ContactFormState>;
};

const initialState: ContactFormState = {
  status: "idle",
};

export function ContactForm({ action }: ContactFormProps) {
  const t = useTranslations("ContactPage.form");
  const [state, formAction] = useActionState(action, initialState);

  const inputClasses =
    "mt-2 min-h-12 w-full rounded-2xl border border-border bg-white px-4 py-3 text-foreground outline-none transition placeholder:text-muted/70 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10";

  return (
    <form action={formAction} noValidate className="mt-9 space-y-6">
      <div className="absolute start-[-9999px] top-auto size-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="text-brand-blue-dark font-bold">
          {t("nameLabel")} <span aria-hidden="true">*</span>
        </label>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          defaultValue={state.values?.name}
          aria-invalid={Boolean(state.fieldErrors?.name?.length)}
          aria-describedby={state.fieldErrors?.name?.length ? "name-error" : undefined}
          placeholder={t("namePlaceholder")}
          className={inputClasses}
        />

        <FieldError id="name-error" errors={state.fieldErrors?.name} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-brand-blue-dark font-bold">
            {t("emailLabel")} <span aria-hidden="true">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            defaultValue={state.values?.email}
            aria-invalid={Boolean(state.fieldErrors?.email?.length)}
            aria-describedby={state.fieldErrors?.email?.length ? "email-error" : undefined}
            placeholder={t("emailPlaceholder")}
            className={inputClasses}
          />

          <FieldError id="email-error" errors={state.fieldErrors?.email} />
        </div>

        <div>
          <label htmlFor="phone" className="text-brand-blue-dark font-bold">
            {t("phoneLabel")}
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            defaultValue={state.values?.phone}
            aria-invalid={Boolean(state.fieldErrors?.phone?.length)}
            aria-describedby={state.fieldErrors?.phone?.length ? "phone-error" : undefined}
            placeholder={t("phonePlaceholder")}
            className={inputClasses}
          />

          <FieldError id="phone-error" errors={state.fieldErrors?.phone} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="text-brand-blue-dark font-bold">
          {t("serviceLabel")} <span aria-hidden="true">*</span>
        </label>

        <select
          id="service"
          name="service"
          required
          defaultValue={state.values?.service ?? ""}
          aria-invalid={Boolean(state.fieldErrors?.service?.length)}
          aria-describedby={state.fieldErrors?.service?.length ? "service-error" : undefined}
          className={inputClasses}
        >
          <option value="" disabled>
            {t("servicePlaceholder")}
          </option>

          {contactServiceIds.map((serviceId) => (
            <option key={serviceId} value={serviceId}>
              {t(`services.${serviceId}`)}
            </option>
          ))}
        </select>

        <FieldError id="service-error" errors={state.fieldErrors?.service} />
      </div>

      <div>
        <label htmlFor="message" className="text-brand-blue-dark font-bold">
          {t("messageLabel")} <span aria-hidden="true">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={7}
          defaultValue={state.values?.message}
          aria-invalid={Boolean(state.fieldErrors?.message?.length)}
          aria-describedby={state.fieldErrors?.message?.length ? "message-error" : undefined}
          placeholder={t("messagePlaceholder")}
          className={inputClasses}
        />

        <FieldError id="message-error" errors={state.fieldErrors?.message} />
      </div>

      <div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="privacy"
            value="accepted"
            required
            aria-invalid={Boolean(state.fieldErrors?.privacy?.length)}
            aria-describedby={state.fieldErrors?.privacy?.length ? "privacy-error" : undefined}
            className="accent-brand-blue mt-1 size-5 shrink-0"
          />

          <span className="text-muted text-sm leading-6">
            {t("privacyLabel")}{" "}
            <Link
              href="/datenschutz"
              className="text-brand-blue font-bold underline underline-offset-4"
            >
              {t("privacyLink")}
            </Link>
          </span>
        </label>

        <FieldError id="privacy-error" errors={state.fieldErrors?.privacy} />
      </div>

      {state.message ? (
        <div
          role={state.status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={
            state.status === "success"
              ? "rounded-2xl border border-green-200 bg-green-50 p-4 font-medium text-green-800"
              : "rounded-2xl border border-red-200 bg-red-50 p-4 font-medium text-red-800"
          }
        >
          {state.message}
        </div>
      ) : null}

      <SubmitButton idleLabel={t("submit")} pendingLabel={t("submitting")} />
    </form>
  );
}
