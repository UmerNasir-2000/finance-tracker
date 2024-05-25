import Link from "next/link";

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
  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {links.map((link) => (
        <Link href={link.href}>{link.label}</Link>
      ))}
    </nav>
  );
};

export default Navigation;
