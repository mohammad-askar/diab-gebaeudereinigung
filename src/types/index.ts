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
  tradingName?: string;
  legalName?: string;
  owners: string[];
  contact: ContactDetails;
  address: CompanyAddress;
  serviceArea: string[];
  legal: LegalBusinessDetails;
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
  id: string;
  icon: ServiceIconName;
  category: "hotel" | "building";
  image: string;
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

export type CompanyValue = {
  id: "reliability" | "quality" | "flexibility" | "communication";
};

export type WorkingStep = {
  id: "understand" | "plan" | "execute" | "review";
  step: number;
};
export type LegalBusinessDetails = {
  legalName?: string;
  legalForm?: string;
  representedBy?: string[];
  chamber?: string;
  registrationCourt?: string;
  registrationNumber?: string;
  vatId?: string;
  taxNumber?: string;
  supervisoryAuthority?: string;
};

export type HostingDetails = {
  providerName?: string;
  providerAddress?: string;
  providerCountry?: string;
  privacyPolicyUrl?: string;
};

export type WebsiteConfiguration = {
  productionUrl?: string;
  hosting: HostingDetails;
  contactFormEmailDeliveryEnabled: boolean;
  analyticsEnabled: boolean;
  embeddedGoogleMapsEnabled: boolean;
  externalGoogleMapsLinkEnabled: boolean;
};
