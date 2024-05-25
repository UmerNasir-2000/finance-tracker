"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useMedia } from "react-use";

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
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const isMobile = useMedia("(max-width: 1024px)", false);

  const onNavItemClick = useCallback((href: string) => {
    router.push(href);
    setIsMobileMenuOpen(false);
  }, []);

  if (isMobile) {
    return (
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {links.map((link) => (
              <Button
                key={link.href}
                variant={link.href === path ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => onNavItemClick(link.href)}
              >
                {link.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

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
