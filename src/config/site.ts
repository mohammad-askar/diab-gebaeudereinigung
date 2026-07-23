import type { WebsiteConfiguration } from "@/types";

export const siteConfiguration: WebsiteConfiguration = {
  productionUrl: process.env.NEXT_PUBLIC_SITE_URL,

  hosting: {
    providerName: "Vercel Inc.",
    providerAddress: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
    providerCountry: "United States",
    privacyPolicyUrl: "https://vercel.com/legal/privacy-notice",
  },

  contactFormEmailDeliveryEnabled: false,
  analyticsEnabled: false,
  embeddedGoogleMapsEnabled: false,
  externalGoogleMapsLinkEnabled: true,
};
