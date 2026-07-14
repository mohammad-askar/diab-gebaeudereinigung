export type ContactDetails = {
  phoneNumbers: string[];
  email: string;
  whatsapp?: string;
};

export type CompanyAddress = {
  street?: string;
  postalCode?: string;
  city?: string;
  country: string;
};

export type Company = {
  name: string;
  legalName?: string;
  owners: string[];
  contact: ContactDetails;
  address: CompanyAddress;
  serviceArea: string[];
};

export type ServiceIconName =
  "hotel" | "building" | "office" | "medical" | "window" | "construction";

export type ServiceItem = {
  id: string;
  icon: ServiceIconName;
};

export type BenefitItem = {
  id: string;
};

export type ProcessStep = {
  id: string;
  step: number;
};
export type DetailedServiceItem = {
  id: ServiceId;
  icon: ServiceIconName;
  category: "hotel" | "building";
};

export type ServiceCategoryDetails = {
  id: "hotel" | "building";
  serviceIds: ServiceId[];
};

export type ServiceId =
  | "hotelCleaning"
  | "roomCleaning"
  | "sanitaryCleaning"
  | "publicAreas"
  | "buildingCleaning"
  | "officeCleaning"
  | "medicalCleaning"
  | "windowCleaning"
  | "constructionCleaning";
