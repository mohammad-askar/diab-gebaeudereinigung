import type { ServiceIconName } from "@/types";

type ServiceIconProps = {
  name: ServiceIconName;
  className?: string;
};

export function ServiceIcon({ name, className = "size-7" }: ServiceIconProps) {
  const commonProps = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "hotel":
      return (
        <svg {...commonProps}>
          <path d="M3 20V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v15" />
          <path d="M8 20v-4h8v4" />
          <path d="M7 7h2" />
          <path d="M15 7h2" />
          <path d="M7 11h2" />
          <path d="M15 11h2" />
          <path d="M2 20h20" />
        </svg>
      );

    case "building":
      return (
        <svg {...commonProps}>
          <path d="M4 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" />
          <path d="M16 8h3a1 1 0 0 1 1 1v12" />
          <path d="M8 7h4" />
          <path d="M8 11h4" />
          <path d="M8 15h4" />
          <path d="M8 21v-3h4v3" />
          <path d="M2 21h20" />
        </svg>
      );

    case "office":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="13" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 18v3" />
          <path d="M7 9h10" />
          <path d="M7 13h6" />
        </svg>
      );

    case "medical":
      return (
        <svg {...commonProps}>
          <path d="M12 21s8-4.5 8-11a4.5 4.5 0 0 0-8-2.8A4.5 4.5 0 0 0 4 10c0 6.5 8 11 8 11Z" />
          <path d="M12 9v6" />
          <path d="M9 12h6" />
        </svg>
      );

    case "window":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M12 3v18" />
          <path d="M3 12h18" />
          <path d="m16.5 7.5 1-1" />
          <path d="m6.5 17.5 2-2" />
        </svg>
      );

    case "construction":
      return (
        <svg {...commonProps}>
          <path d="M4 21h16" />
          <path d="m6 21 2-10h8l2 10" />
          <path d="M9 11V7a3 3 0 0 1 6 0v4" />
          <path d="M7 16h10" />
        </svg>
      );
  }
}
