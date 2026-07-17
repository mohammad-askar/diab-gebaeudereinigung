import { describe, expect, it } from "vitest";

import { contactFormSchema } from "./contact";

const validForm = {
  name: "Max Mustermann",
  email: "max@example.com",
  phone: "0176 12345678",
  service: "officeCleaning",
  message: "Please send me a quotation for office cleaning.",
  privacy: "accepted",
  website: "",
};

describe("contactFormSchema", () => {
  it("accepts valid contact form data", () => {
    const result = contactFormSchema.safeParse(validForm);

    expect(result.success).toBe(true);
  });

  it("rejects an invalid email address", () => {
    const result = contactFormSchema.safeParse({
      ...validForm,
      email: "invalid-email",
    });

    expect(result.success).toBe(false);
  });

  it("rejects a short message", () => {
    const result = contactFormSchema.safeParse({
      ...validForm,
      message: "Short",
    });

    expect(result.success).toBe(false);
  });

  it("rejects an unsupported service", () => {
    const result = contactFormSchema.safeParse({
      ...validForm,
      service: "unsupported",
    });

    expect(result.success).toBe(false);
  });

  it("rejects a filled honeypot field", () => {
    const result = contactFormSchema.safeParse({
      ...validForm,
      website: "https://spam.example",
    });

    expect(result.success).toBe(false);
  });

  it("accepts an empty optional phone number", () => {
    const result = contactFormSchema.safeParse({
      ...validForm,
      phone: "",
    });

    expect(result.success).toBe(true);
  });
});
