import type { Company } from "@/types";

export const company: Company = {
  name: "Diab Gebäudereinigung",
  tradingName: "Diab Gebäudereinigung & Reinigungsservice",
  legalName: "Justyna Agnieszka Zyab",

  owners: ["Justyna Agnieszka Zyab"],

  contact: {
    phoneNumbers: ["0176 32050273", "0176 23698177"],
    email: "diabgeb@gmail.com",
  },

  address: {
    street: "Güterstraße 65",
    postalCode: "54295",
    city: "Trier",
    country: "Deutschland",
  },

  serviceArea: [],

  legal: {
    legalName: "Justyna Agnieszka Zyab",
    legalForm: "Einzelunternehmen",
    representedBy: ["Justyna Agnieszka Zyab"],
    chamber: "Handwerkskammer Trier",

    registrationCourt: undefined,
    registrationNumber: undefined,
    vatId: undefined,

    supervisoryAuthority:
      "Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz",
  },
};
