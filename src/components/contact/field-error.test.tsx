import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FieldError } from "./field-error";

describe("FieldError", () => {
  it("renders nothing when no errors exist", () => {
    const { container } = render(<FieldError id="name-error" />);

    expect(container).toBeEmptyDOMElement();
  });

  it("renders one error message", () => {
    render(<FieldError id="email-error" errors={["Enter a valid email address."]} />);

    const alert = screen.getByRole("alert");

    expect(alert).toHaveAttribute("id", "email-error");
    expect(alert).toHaveTextContent("Enter a valid email address.");
  });

  it("renders multiple error messages", () => {
    render(
      <FieldError id="message-error" errors={["Message is required.", "Message is too short."]} />,
    );

    expect(screen.getByText("Message is required.")).toBeInTheDocument();
    expect(screen.getByText("Message is too short.")).toBeInTheDocument();
  });
});
