import type { ReactNode } from "react";

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  children: ReactNode;
};

export function LegalPageLayout({
  eyebrow,
  title,
  introduction,
  children,
}: LegalPageLayoutProps) {
  return (
    <main>
      <section className="bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <p className="text-sm font-bold tracking-[0.16em] text-brand-green uppercase">
            {eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-blue-dark sm:text-5xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            {introduction}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-12">{children}</div>
        </div>
      </section>
    </main>
  );
}