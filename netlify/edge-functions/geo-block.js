export default async (request, context) => {
  const country = context.geo.country?.code || "ZZ";
  if (country !== "US") {
    return new Response(
     "Thank you for visiting. This plugin is currently offered only within the United States.",
      { status: 451, headers: { "content-type": "text/plain" } }
    );
  }
  return context.next();
};
