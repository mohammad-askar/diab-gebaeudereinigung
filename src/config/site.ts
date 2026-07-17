import type { WebsiteConfiguration } from "@/types";

export const siteConfiguration: WebsiteConfiguration = {
  productionUrl: process.env.NEXT_PUBLIC_SITE_URL,
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
