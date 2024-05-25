"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
};

const links: NavLink[] = [
  {
    href: "/",
    label: "Dashboard",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
] as const;

const Navigation = () => {
  const path = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {links.map((link) => (
        <Button
          key={link.href}
          asChild
          variant="outline"
          size="sm"
          className={cn(
            "w-full lg:w-auto justify-between font-normal hover:bg-white/20  hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition",
            path === link.href ? "bg-white/10 text-white" : "bg-transparent"
          )}
        >
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </nav>
  );
};

export default Navigation;
