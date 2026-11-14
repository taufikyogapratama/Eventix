"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Settings } from "lucide-react";

const NavActionUser = () => {
  const pathname = usePathname();
  if (pathname === "/") {
    return (
      <Link href="/dashboard" className="hidden md:inline">
        <Button variant="outline" size="small">
          Dashboard
        </Button>
      </Link>
    );
  } else {
    return (
      <div className="btnAction hidden md:flex items-center gap-4">
        <p className="text-foreground text-sm font-semibold hidden md:block">
          Jhon Doe
        </p>
        <Button variant="outline" size="icon">
          <Settings />
        </Button>
      </div>
    );
  }
};

export default NavActionUser;
