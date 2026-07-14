export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "phone" | "service" | "message" | "privacy", string[]>
>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: ContactFieldErrors;
  values?: {
    name?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
  };
};
