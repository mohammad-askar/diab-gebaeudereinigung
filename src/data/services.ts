import type { ServiceCategory } from "@/types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "hotelreinigung",
    title: "Hotelreinigung",
    description: "Professionelle Reinigungslösungen für Hotels und Beherbergungsbetriebe.",
    items: [
      { title: "Zimmerreinigung" },
      { title: "Badezimmer- und Sanitärreinigung" },
      { title: "Bettwäschewechsel" },
      { title: "Reinigung öffentlicher Bereiche" },
      { title: "Wellness- und Spa-Bereiche" },
      { title: "Konferenzräume und Restaurants" },
    ],
  },
  {
    id: "gebaeudereinigung",
    title: "Gebäudereinigung",
    description: "Gründliche und zuverlässige Reinigung für gewerbliche und private Gebäude.",
    items: [
      { title: "Büroreinigung" },
      { title: "Praxisreinigung" },
      { title: "Treppenhausreinigung" },
      { title: "Unterhaltsreinigung" },
      { title: "Glas- und Fensterreinigung" },
      { title: "Baureinigung" },
      { title: "Sonderreinigungen" },
    ],
  },
];
