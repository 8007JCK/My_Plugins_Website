export default async (request, context) => {
  const country = context.geo.country?.code || "ZZ";

  const allowedCountries = new Set([
    // North America
    "US", "CA", "MX",

    // South America
    "BR", "AR", "CL", "CO", "PE",

    // Europe (EU + UK)
    "DE", "FR", "IT", "ES", "NL", "BE", "PL", "SE",
    "NO", "DK", "FI", "IE", "PT", "AT", "CZ", "HU",
    "RO", "BG", "HR", "SI", "SK", "LT", "LV", "EE",
    "LU", "MT", "CY", "GR", "UK"
  ]);

  if (!allowedCountries.has(country)) {
    return new Response(
      "Thank you for visiting. This plugin is currently available only in Europe and the Americas.",
      { status: 451, headers: { "content-type": "text/plain" } }
    );
  }

  return context.next();
};
