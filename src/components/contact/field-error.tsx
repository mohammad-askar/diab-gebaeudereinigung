type FieldErrorProps = {
  id: string;
  errors?: string[];
};

export function FieldError({ id, errors }: FieldErrorProps) {
  if (!errors?.length) {
    return null;
  }

  return (
    <div id={id} role="alert" className="mt-2 text-sm font-medium text-red-700">
      {errors.map((error) => (
        <p key={error}>{error}</p>
      ))}
    </div>
  );
}
