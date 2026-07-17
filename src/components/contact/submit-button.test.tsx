import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { useFormStatusMock } = vi.hoisted(() => ({
  useFormStatusMock: vi.fn(),
}));

vi.mock("react-dom", async () => {
  const actual = await vi.importActual<typeof import("react-dom")>("react-dom");

  return {
    ...actual,
    useFormStatus: useFormStatusMock,
  };
});

import { SubmitButton } from "./submit-button";

describe("SubmitButton", () => {
  beforeEach(() => {
    useFormStatusMock.mockReset();
  });

  it("shows the idle label", () => {
    useFormStatusMock.mockReturnValue({
      pending: false,
      data: null,
      method: null,
      action: null,
    });

    render(<SubmitButton idleLabel="Send enquiry" pendingLabel="Sending..." />);

    expect(screen.getByRole("button", { name: "Send enquiry" })).toBeEnabled();
  });

  it("shows the pending label and disables the button", () => {
    useFormStatusMock.mockReturnValue({
      pending: true,
      data: null,
      method: null,
      action: null,
    });

    render(<SubmitButton idleLabel="Send enquiry" pendingLabel="Sending..." />);

    expect(screen.getByRole("button", { name: "Sending..." })).toBeDisabled();
  });
});
