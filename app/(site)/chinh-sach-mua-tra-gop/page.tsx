import HelpPlaceholderPage from "@/components/help/HelpPlaceholderPage";
import { pageMetadata } from "@/lib/seo";

const title = "Chính sách mua trả góp";

export const metadata = pageMetadata({
  title,
  description: "Chính sách mua trả góp tại Vtech Group.",
  path: "/chinh-sach-mua-tra-gop",
});

export default function InstallmentPolicyPage() {
  return <HelpPlaceholderPage title={title} activePath="/chinh-sach-mua-tra-gop" />;
}
