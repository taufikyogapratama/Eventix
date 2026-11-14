import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import NavActionUser from "./NavActionUser";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

type props = {
  variant: "guest" | "user";
  pathname?: string;
};

const Navbar = (props: props) => {
  return (
    <nav className="bg-surface">
      <div className="bracket max-w-280 mx-auto flex justify-between items-center px-6 h-18">
        <Link href="/" className="logo flex gap-2 cursor-pointer">
          <Image src="/logo.svg" alt="logo image" width={26} height={26} />
          <p className="text-xl font-bold">Eventix</p>
        </Link>
        {props.pathname ? (
          <div className="menu hidden md:flex gap-6">
            <Link
              href=""
              className="text-sm font-semibold text-mutedCS hover:text-foreground"
            >
              Layanan
            </Link>
            <Link
              href=""
              className="text-sm font-semibold text-mutedCS hover:text-foreground"
            >
              Cara Kerja
            </Link>
          </div>
        ) : (
          <div className="menu hidden md:flex">
            <Link
              href=""
              className="text-sm font-semibold text-mutedCS hover:text-foreground"
            >
              Riwayat
            </Link>
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
            <NavActionUser />
          )}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader></SheetHeader>
                {props.pathname ? (
                  <div className="gap-0">
                    <Link href="" className="block py-4 px-4 hover:bg-accent">
                      Layanan
                    </Link>
                    <Link href="" className="block py-4 px-4 hover:bg-accent">
                      Cara Kerja
                    </Link>

                    <Link
                      href="/dashboard"
                      className={`block py-4 px-4 hover:bg-accent ${props.variant === "user" ? "" : "hidden"}`}
                    >
                      Dashboard
                    </Link>
                  </div>
                ) : (
                  <div className="gap-0">
                    <Link href="" className="block py-4 px-4 hover:bg-accent">
                      Riwayat
                    </Link>
                    <Link href="" className="block py-4 px-4 hover:bg-accent">
                      Pengaturan
                    </Link>
                  </div>
                )}
                <SheetFooter>
                  <div
                    className={`${props.variant === "user" ? "hidden" : ""}`}
                  >
                    <Link href="/login">
                      <Button
                        variant="outline"
                        size="small"
                        className="w-full mb-3"
                      >
                        Masuk
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button variant="outline" size="small" className="w-full">
                        Daftar
                      </Button>
                    </Link>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
