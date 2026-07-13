import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const hero = await getTranslations("Hero");
  const services = await getTranslations("Services");

  return (
    <main className="bg-background min-h-screen">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-10 px-6 py-16 text-center">
        <Image
          src="/images/logo/diab-logo.jpg"
          alt="Diab Gebäudereinigung"
          width={320}
          height={320}
          priority
          className="h-auto w-56 sm:w-72"
        />

        <div className="max-w-3xl">
          <p className="text-brand-green mb-4 font-semibold">{hero("eyebrow")}</p>

          <h1 className="text-brand-blue-dark text-4xl font-bold tracking-tight sm:text-6xl">
            {hero("title")}
          </h1>

          <p className="text-muted mt-6 text-lg leading-8">{hero("description")}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/kontakt"
            className="bg-brand-blue rounded-full px-6 py-3 font-semibold text-white"
          >
            {hero("contactButton")}
          </Link>

          <Link
            href="/leistungen"
            className="border-border bg-surface text-brand-blue-dark rounded-full border px-6 py-3 font-semibold"
          >
            {hero("servicesButton")}
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <span className="bg-surface rounded-full px-5 py-2 font-semibold">
            {services("hotelCleaning")}
          </span>

          <span className="bg-surface rounded-full px-5 py-2 font-semibold">
            {services("buildingCleaning")}
          </span>
        </div>
      </section>
    </main>
  );
}
