import type { ReactNode } from "react";

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-brand-blue-dark sm:text-3xl">
        {title}
      </h2>

      <div className="mt-5 space-y-4 leading-8 text-muted">{children}</div>
    </section>
  );
}