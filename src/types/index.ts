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

export type ServiceItem = {
  title: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
};
