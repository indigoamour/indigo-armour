import type { MetadataRoute } from "next";
import getCategories from "@/actions/get-categories";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.indigoamour.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/shop`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/shipping-policy`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/cancellation-and-refunds`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/story`, changeFrequency: "monthly", priority: 0.6 },
  ];

  let dynamicCategoryRoutes: MetadataRoute.Sitemap = [];
  try {
    const categories = await getCategories();
    dynamicCategoryRoutes = (categories ?? []).map((cat: any) => ({
      url: `${baseUrl}/category/${cat.id}`,
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  } catch (error) {
    // Avoid build failure if API is unavailable
    dynamicCategoryRoutes = [];
  }

  return [...staticRoutes, ...dynamicCategoryRoutes];
}

// import type { MetadataRoute } from "next";
// import getCategories from "@/actions/get-categories";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const baseUrl = "https://www.indigoamour.com";

//   const staticRoutes: MetadataRoute.Sitemap = [
//     { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
//     { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
//     { url: `${baseUrl}/shop`, changeFrequency: "weekly", priority: 0.9 },
//     { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
//     { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.4 },
//     { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.4 },
//     { url: `${baseUrl}/shipping-policy`, changeFrequency: "yearly", priority: 0.4 },
//     { url: `${baseUrl}/cancellation-and-refunds`, changeFrequency: "yearly", priority: 0.4 },
//     { url: `${baseUrl}/story`, changeFrequency: "monthly", priority: 0.6 },
//   ];

//   let dynamicCategoryRoutes: MetadataRoute.Sitemap = [];
//   try {
//     const categories = await getCategories();
//     dynamicCategoryRoutes = (categories ?? []).map((cat: any) => ({
//       url: `${baseUrl}/category/${cat.id}`,
//       changeFrequency: "weekly",
//       priority: 0.8,
//     }));
//   } catch (error) {
//     // Intentionally swallow to avoid build break if API is unavailable
//     dynamicCategoryRoutes = [];
//   }

//   return [...staticRoutes, ...dynamicCategoryRoutes];
// }

