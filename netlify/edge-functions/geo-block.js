export default async (request, context) => {
  const country = context.geo.country?.code || "ZZ";
  if (country !== "US") {
    return new Response(
      "Service available only in the United States.",
      { status: 451, headers: { "content-type": "text/plain" } }
    );
  }
  return context.next();
};
