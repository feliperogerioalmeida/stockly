import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  children: React.ReactNode;
  href: string;
}

const SidebarButton = ({ href, children }: SidebarButtonProps) => {
  const pathname = usePathname();
  return (
    <Button
      variant={pathname == href ? "secondary" : "ghost"}
      asChild
      className="justify-start gap-2"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default SidebarButton;
