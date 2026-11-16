import { Button } from "@/components/ui/button";
import Card from "./Card";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="max-w-280 mx-auto px-6 pt-16 pb-14">
      <h2 className="text-mutedCS text-sm font-semibold">Cara Kerja</h2>
      <h3 className="text-foreground text-2xl font-bold mt-3">
        Tiga langkah, tiket siap jalan
      </h3>
      <div className="card grid grid-cols-1 md:grid-cols-3 mt-10 gap-6 mb-14">
        <Card
          icon="satu"
          title="Daftar akun"
          description="Buat akun dengan nama lengkap dan email. Semua data tiket langsung tersambung ke dashboard milikmu."
          variant="round"
        />
        <Card
          icon="dua"
          title="Buat atau cari tiket"
          description="Penyelenggara mempublikasikan acara dan membagikan tipenya; pembeli mencari tiket lewat kode dan menyelesaikan pembayaran."
          variant="round"
        />
        <Card
          icon="tiga"
          title="Check-in dengan QR"
          description="Di hari acara, tunjukkan QR dari halaman QR pribadi. Panitia scan, sistem menandai tiket sebagai terverifikasi secara instan."
          variant="round"
        />
      </div>
      <div className="py-9 md:py-13 px-6 md:px-12 bg-foreground rounded-2xl md:flex items-center justify-between md:h-64.25">
        <div>
          <p className="text-background text-2xl font-bold">
            Mulai agenda pertamamu hari ini.
          </p>
          <p className="text-mutedCS text-sm font-normal mt-2">
            Daftar gratis, buat tiket dalam hitungan menit, dan
            <br /> bagikan tautan penjualannya. Tanpa biaya untuk
            <br /> acara gratis.
          </p>
        </div>
        <div className="btn mt-6 flex gap-4">
          <Link href="/register">
            <Button variant="default" size="default" className="flex-1">
              Daftar Sekarang
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="secondary" size="default" className="flex-1">
              Masuk
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
