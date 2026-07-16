import type { WebsiteConfiguration } from "@/types";

export const siteConfiguration: WebsiteConfiguration = {
  productionUrl: undefined,
  hosting: {
    providerName: undefined,
    providerAddress: undefined,
    providerCountry: undefined,
    privacyPolicyUrl: undefined,
  },
  contactFormEmailDeliveryEnabled: false,
  analyticsEnabled: false,
  embeddedGoogleMapsEnabled: false,
  externalGoogleMapsLinkEnabled: true,
};