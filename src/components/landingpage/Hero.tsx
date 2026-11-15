import { Button } from "@/components/ui/button";
import { Check, Search } from "lucide-react";
import Link from "next/link";
import { HeroImage } from "../HeroImage";

const Hero = () => {
  return (
    <section className="hero max-w-280 mx-auto px-6 pt-18 md:flex pb-12">
      <div className="satu md:w-1/2">
        <p className="text-xs flex items-center gap-2 mt-12.5 md:mt-17.5 text-mutedCS font-semibold">
          <div className="w-2.5 h-2.5 rounded-full bg-accentCS"></div>
          Platform Tiket Online
        </p>
        <h1 className="text-foreground text-3xl md:text-6xl font-bold mt-4">
          Jual & beli
          <br className="hidden md:inline" /> tiket acara dari satu tempat.
        </h1>
        <p className="text-mutedCS text-[1.06rem] font-normal mt-6">
          Eventix membantu kamu membuat acara, menjual tiketnya lewat tautan,
          dan menerima pembayaran — khususnya acara gratis. Pembeli hanya perlu
          kode tiket untuk melihat, membayar, dan check-in.
        </p>
        <div className="cta flex gap-4 mt-7">
          <Button
            variant="default"
            size="default"
            className="flex-1 md:flex-none"
          >
            Buat Tiket
          </Button>
          <Button
            variant="outline"
            size="default"
            className="flex-1 md:flex-none"
          >
            <Search className="mr-2" />
            Cari Tiket
          </Button>
        </div>
        <p className="flex text-mutedCS gap-2 mt-5 mb-12 text-sm font-normal">
          <Check className="text-success" />
          Gratis untuk tiket gratis · Belum punya akun?{" "}
          <Link href="/register" className="text-accentCS">
            Daftar dulu
          </Link>
        </p>
      </div>
      <div className="dua md:w-1/2 flex justify-center items-center">
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
