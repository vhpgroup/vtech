import HomePageClient from "@/components/home/HomePageClient";
import {
  getHomeCategorySectionProducts,
  getHomeProductsFromPayload,
  getProductCategoryNavFromPayload,
} from "@/lib/catalog-payload";
import { toHomeCardProduct } from "@/lib/home-category-sections";
import { getBannersFromPayload, getLatestPostsFromPayload, getSiteSettingsFromPayload, getSolutionsFromPayload } from "@/lib/content-payload";
import { pageMetadata } from "@/lib/seo";
import { normalizeSiteSettings } from "@/lib/site-settings";

export const revalidate = 300;

export const metadata = pageMetadata({
  title: "Vtech Group - Thiết bị văn phòng & giải pháp số hóa",
  description:
    "Vtech Group cung cấp máy in, máy scan, thiết bị văn phòng và giải pháp số hóa tài liệu cho doanh nghiệp.",
});

export default async function HomePage() {
  const [products, categorySectionProducts, categories, banners, solutions, rawSettings, posts] =
    await Promise.all([
      getHomeProductsFromPayload(),
      getHomeCategorySectionProducts(),
      getProductCategoryNavFromPayload(),
      getBannersFromPayload(),
      getSolutionsFromPayload(),
      getSiteSettingsFromPayload(),
      getLatestPostsFromPayload(4),
    ]);
  const settings = normalizeSiteSettings(rawSettings);

  return (
    <>
      <h1 className="sr-only">
        Máy scan, máy in &amp; thiết bị văn phòng chính hãng cho doanh nghiệp - Vtech Group
      </h1>
      <HomePageClient
        initialProducts={products.map(toHomeCardProduct)}
        categorySectionProducts={categorySectionProducts.map(toHomeCardProduct)}
        categories={categories}
        initialBanners={banners}
        initialSolutions={solutions}
        initialPosts={posts}
        quoteEmail={settings.email}
      />
    </>
  );
}
