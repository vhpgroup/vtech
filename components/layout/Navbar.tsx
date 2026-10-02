import Link from "next/link";
import { CircleHelp, FileVideo, Gift, Home, Package, ShieldCheck } from "lucide-react";
import { CatalogMenuButton } from "@/components/layout/CategoryMenu";

const navLinks = [
  { href: "/san-pham", label: "Sản phẩm", icon: Package },
  { href: "/giai-phap", label: "Giải pháp", icon: CircleHelp },
  { href: "/du-an", label: "Dự án", icon: ShieldCheck },
  { href: "/thuong-hieu", label: "Đối tác", icon: Gift },
  { href: "/tin-tuc", label: "Tin tức", icon: FileVideo },
  { href: "/lien-he", label: "Liên hệ", icon: CircleHelp },
];

export default function Navbar() {
  return (
    <nav className="nav desktop-only">
      {/* Nút danh mục DUY NHẤT của site: bấm → panel danh mục thả xuống
          (gộp từ nút "Danh mục" đỏ cũ trên header). Link tới trang /san-pham
          vẫn còn ngay bên cạnh qua mục "Sản phẩm". */}
      <CatalogMenuButton />
      <Link className="nav-home" href="/">
        <Home aria-hidden="true" size={17} />
        Trang chủ
      </Link>
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <link.icon aria-hidden="true" size={17} />
          {link.label}
        </Link>
      ))}
      <div className="news-ticker" aria-label="Tin tức mới">
        <strong>Tin mới:</strong>
        <Link href="/tin-tuc">Giải pháp thiết bị văn phòng và số hóa cho doanh nghiệp</Link>
      </div>
    </nav>
  );
}
