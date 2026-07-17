import { describe, expect, it } from "vitest";

import { cn } from "./utils";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("rounded-xl", "font-bold")).toBe("rounded-xl font-bold");
  });

  it("ignores false and undefined values", () => {
    expect(cn("base", false && "hidden", undefined)).toBe("base");
  });

  it("resolves conflicting Tailwind classes", () => {
    expect(cn("px-4", "px-8")).toBe("px-8");
  });

  it("supports conditional object syntax", () => {
    expect(
      cn({
        visible: true,
        hidden: false,
      }),
    ).toBe("visible");
  });
});
