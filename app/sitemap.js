const SITE_URL = "https://primemeridiansystems.com";

export default function sitemap() {
  const now = new Date("2026-06-05");
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
