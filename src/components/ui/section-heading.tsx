import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="text-brand-green mb-3 text-sm font-bold tracking-[0.16em] uppercase">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-brand-blue-dark text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="text-muted mt-5 text-base leading-8 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
