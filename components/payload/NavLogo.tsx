import Image from "next/image";

export default function NavLogo() {
  return (
    <div className="hpt-admin-brand">
      <Image alt="Vtech Group" height={64} priority src="/assets/logo/vtech-group.svg" width={180} />
    </div>
  );
}
