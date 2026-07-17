type LegalPlaceholderProps = {
  label: string;
};

export function LegalPlaceholder({ label }: LegalPlaceholderProps) {
  return (
    <span className="inline-flex rounded-lg border border-amber-300 bg-amber-50 px-2 py-1 font-semibold text-amber-900">
      [{label}]
    </span>
  );
}
