export const publicRoutes = ["/", "/leistungen", "/ueber-uns", "/kontakt"] as const;

export const legalRoutes = ["/impressum", "/datenschutz"] as const;

export const allPublicRoutes = [...publicRoutes, ...legalRoutes] as const;

export type PublicRoute = (typeof allPublicRoutes)[number];
