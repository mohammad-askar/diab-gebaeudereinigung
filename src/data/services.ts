import type { DetailedServiceItem, ServiceCategoryDetails } from "@/types";

export const services: DetailedServiceItem[] = [
  {
    id: "hotelCleaning",
    icon: "hotel",
    category: "hotel",
    image: "/images/company/hotel-room-cleaning.png",
  },
  {
    id: "roomCleaning",
    icon: "hotel",
    category: "hotel",
    image: "/images/services/guest-room-cleaning.png",
  },
  {
    id: "sanitaryCleaning",
    icon: "medical",
    category: "hotel",
    image: "/images/services/sanitary-cleaning.png",
  },
  {
    id: "publicAreas",
    icon: "building",
    category: "hotel",
    image: "/images/company/hotel-corridor-cleaning.png",
  },
  {
    id: "buildingCleaning",
    icon: "building",
    category: "building",
    image: "/images/company/commercial-building-cleaning.png",
  },
  {
    id: "officeCleaning",
    icon: "office",
    category: "building",
    image: "/images/services/office-cleaning.png",
  },
  {
    id: "medicalCleaning",
    icon: "medical",
    category: "building",
    image: "/images/services/medical-cleaning.png",
  },
  {
    id: "windowCleaning",
    icon: "window",
    category: "building",
    image: "/images/company/window-cleaning-team.png",
  },
  {
    id: "constructionCleaning",
    icon: "construction",
    category: "building",
    image: "/images/services/construction-cleaning.png",
  },
];

export const serviceCategories: ServiceCategoryDetails[] = [
  {
    id: "hotel",
    serviceIds: ["hotelCleaning", "roomCleaning", "sanitaryCleaning", "publicAreas"],
  },
  {
    id: "building",
    serviceIds: [
      "buildingCleaning",
      "officeCleaning",
      "medicalCleaning",
      "windowCleaning",
      "constructionCleaning",
    ],
  },
];

export const featuredServices = services.filter((service) =>
  [
    "hotelCleaning",
    "buildingCleaning",
    "officeCleaning",
    "medicalCleaning",
    "windowCleaning",
    "constructionCleaning",
  ].includes(service.id),
);
