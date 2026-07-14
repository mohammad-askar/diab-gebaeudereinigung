import type { BenefitItem, ProcessStep } from "@/types";

export const benefits: BenefitItem[] = [
  {
    id: "reliable",
  },
  {
    id: "thorough",
  },
  {
    id: "flexible",
  },
  {
    id: "personal",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "contact",
    step: 1,
  },
  {
    id: "consultation",
    step: 2,
  },
  {
    id: "offer",
    step: 3,
  },
  {
    id: "cleaning",
    step: 4,
  },
];
