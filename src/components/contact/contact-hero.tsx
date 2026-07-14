import { getTranslations } from "next-intl/server";

export async function ContactHero() {
  const t = await getTranslations("ContactPage.hero");

  return (
    <section className="bg-surface relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-brand-blue/10 absolute -end-40 -top-48 size-[32rem] rounded-full blur-3xl"
      />

      <div
        aria-hidden="true"
        className="bg-brand-green/10 absolute -start-36 -bottom-44 size-[30rem] rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:py-24 lg:py-28">
        <p className="border-brand-green/30 bg-brand-green/10 text-brand-green-dark inline-flex rounded-full border px-4 py-2 text-sm font-bold">
          {t("eyebrow")}
        </p>

        <h1 className="text-brand-blue-dark mx-auto mt-7 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>

        <p className="text-muted mx-auto mt-6 max-w-3xl text-lg leading-8 sm:text-xl">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
