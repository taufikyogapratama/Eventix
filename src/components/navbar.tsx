import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { Settings } from "lucide-react";
import Link from "next/link";

type props = {
  variant: "guest" | "user";
};

const Navbar = (props: props) => {
  return (
    <nav className="bg-surface">
      <div className="bracket max-w-280 mx-auto flex justify-between items-center px-6 h-18">
        <a className="logo flex gap-2 cursor-pointer">
          <Image src="/logo.svg" alt="logo image" width={26} height={26} />
          <p className="text-xl font-bold">Eventix</p>
        </a>
        {props.variant === "guest" ? (
          <div className="menu hidden md:flex gap-6">
            <a
              href=""
              className="text-sm font-semibold text-mutedCS hover:text-foreground"
            >
              Layanan
            </a>
            <a
              href=""
              className="text-sm font-semibold text-mutedCS hover:text-foreground"
            >
              Cara Kerja
            </a>
          </div>
        ) : (
          <div className="menu hidden md:flex">
            <a
              href=""
              className="text-sm font-semibold text-mutedCS hover:text-foreground"
            >
              Riwayat
            </a>
          </div>
        )}
        <div className="action flex gap-4">
          <ModeToggle />
          {props.variant === "guest" ? (
            <div className="btnAction hidden md:block ">
              <Link href="/login">
                <Button variant="ghost" size="small">
                  Masuk
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" size="small">
                  Daftar
                </Button>
              </Link>
            </div>
          ) : (
            <div className="btnAction flex items-center gap-4">
              <p className="text-foreground text-sm font-semibold hidden md:block">
                Jhon Doe
              </p>
              <Button variant="outline" size="icon">
                <Settings />
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
