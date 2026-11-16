import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <section className="pt-18 max-w-280 mx-auto px-6  grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="logo image" width={26} height={26} />
            <p className="text-foreground text-xl font-bold">Eventix</p>
          </Link>
          <p className="text-mutedCS text-sm font-normal mt-3">
            Platform tiket online untuk pengelola
            <br /> acara dan pembeli. Buat tiket, sebar
            <br /> tautan, dan check-in tamu lewat QR.
          </p>
        </div>
        <div>
          <p className="text-mutedCS text-[10px] font-semibold mb-3.5">
            PRODUK
          </p>
          <ul className="flex flex-col gap-1 text-mutedCS text-sm font-normal">
            <li>
              <Link className="hover:text-foreground" href="">
                Buat Tiket
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="">
                Cari Tiket
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="">
                QR Pass
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="">
                Scanner Check-in
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-mutedCS text-[10px] font-semibold mb-3.5">Akun</p>
          <ul className="flex flex-col gap-1 text-mutedCS text-sm font-normal">
            <li>
              <Link className="hover:text-foreground" href="/login">
                Masuk
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="/register">
                Daftar
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <hr className="mt-10" />
      <p className="text-mutedCS text-sm font-normal text-center py-4">
        © 2026 Taufik Yoga Pratama. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
