import type { DetailedServiceItem, ServiceCategoryDetails } from "@/types";

export const services: DetailedServiceItem[] = [
  {
    id: "hotelCleaning",
    icon: "hotel",
    category: "hotel",
  },
  {
    id: "roomCleaning",
    icon: "hotel",
    category: "hotel",
  },
  {
    id: "sanitaryCleaning",
    icon: "medical",
    category: "hotel",
  },
  {
    id: "publicAreas",
    icon: "building",
    category: "hotel",
  },
  {
    id: "buildingCleaning",
    icon: "building",
    category: "building",
  },
  {
    id: "officeCleaning",
    icon: "office",
    category: "building",
  },
  {
    id: "medicalCleaning",
    icon: "medical",
    category: "building",
  },
  {
    id: "windowCleaning",
    icon: "window",
    category: "building",
  },
  {
    id: "constructionCleaning",
    icon: "construction",
    category: "building",
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
