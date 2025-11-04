import type { MetadataRoute } from "next";

// Example: replace this with real API fetch or DB call
async function getServices() {
 // If data comes from API:
 // const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/services`);
 // const services = await res.json();
 // return services.map((service) => service.slug);

 // Static example
 return [
  "ai-agent-automation",
  "ai-development",
  "data-engineering",
  "machine-learning",
 ];
}

export async function GET() {
 const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

 const staticPages = [
  "/",
  "/about",
  "/services",
  "/team",
  "/contact",
  "/cookies-policy",
  "/privacy-policy",
  "/terms-of-use",
 ];

 // ✅ Get dynamic service pages
 const serviceSlugs = await getServices();

 const serviceUrls = serviceSlugs.map((slug) => ({
  url: `${baseUrl}/services/${slug}`,
  lastModified: new Date(),
 }));

 // ✅ Merge both static + dynamic URLs
 const allUrls: MetadataRoute.Sitemap = [
  ...staticPages.map((path) => ({
   url: `${baseUrl}${path}`,
  })),
  ...serviceUrls,
 ];

 return new Response(
  `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls
       .map(
        (page) => `
            <url>
              <loc>${page.url}</loc>
            </url>`
       )
       .join("")}
    </urlset>`,
  {
   headers: {
    "Content-Type": "application/xml",
   },
  }
 );
}
