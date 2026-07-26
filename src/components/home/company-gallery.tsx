import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { SectionHeading } from "@/components/ui/section-heading";
import { companyImages } from "@/data/company-images";

export async function CompanyGallery() {
  const t = await getTranslations("HomePage.gallery");

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />

        <div className="mt-12 grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companyImages.map((image) => (
            <figure
              key={image.id}
              className={`group relative overflow-hidden rounded-3xl bg-slate-100 ${image.aspectClass}`}
            >
              <Image
                src={image.src}
                alt={t(`items.${image.id}.alt`)}
                fill
                sizes={
                  image.id === "commercial-building"
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                }
                className={`${image.imageClass} transition duration-500 group-hover:scale-105`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-lg font-bold">{t(`items.${image.id}.title`)}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
