"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import useApiQuery from "@/hooks/useApiQuery";

const NavActionUser = () => {
  const { isPending, error, data } = useApiQuery(
    ["username"],
    "profiles",
    "username",
  );
  const userName = isPending
    ? "Memuat..."
    : error
      ? "Error"
      : (data?.[0].username ?? "User");
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
          {userName}
        </p>
        <Button variant="outline" size="icon">
          <Settings />
        </Button>
      </div>
    );
  }
};

export default NavActionUser;
