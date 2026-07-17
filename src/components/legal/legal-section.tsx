import type { ReactNode } from "react";

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="text-brand-blue-dark text-2xl font-bold sm:text-3xl">{title}</h2>

      <div className="text-muted mt-5 space-y-4 leading-8">{children}</div>
    </section>
  );
}
