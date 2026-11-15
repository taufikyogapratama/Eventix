import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import Card from "./Card";

const Services = () => {
  return (
    <section className="max-w-280 mx-auto px-6 py-14">
      <p className="text-mutedCS text-sm font-semibold">Layanan</p>
      <h2 className="text-foreground text-2xl font-bold mt-3">
        Semua yang dibutuhkan untuk acaramu
      </h2>
      <p className="text-mutedCS text-base font-normal mt-3">
        Dari membuat tiket pertama sampai check-in di gerbang, semuanya bisa
        dijalankan langsung dari browser tanpa aplikasi tambahan.
      </p>
      <div className="card grid grid-cols-1 md:grid-cols-2 mt-10 gap-6">
        <Card
          icon="plus"
          title="Buat & Kelola Acara"
          description="Atur nama acara,  tanggal, kuota, dan deskripsi lewat satu formulir. Belum mengaktifkan pencairan dana? Harga tiket otomatis terkunci di Rp 0 (Gratis)."
          cta="Mulai buat tiket"
          href=""
        />
        <Card
          icon="copy"
          title="Jual lewat Tautan"
          description='Setiap tiket punya link sendiri. Salin dari dashboard, bagikan ke grup atau bio, dan pantau penjualan dari kartu "Tiket Dibuat".'
          cta="Lihat dashboard"
          href="/dashboard"
        />
        <Card
          icon="search"
          title="Beli Tiket dengan Kode"
          description="Temukan tiket lewat kode acara, lihat detail acara, lalu bayar lewat Virtual Account, e-Wallet, atau transfer bank di halaman invoice."
          cta="Cari tiket"
          href=""
        />
        <Card
          icon="scan-qr-code"
          title="Check-in QR di Gerbang"
          description="Panitia cukup scan QR tiket lewat halaman scanner. Hasil scan berwarna hijau bila valid, merah bila tiket sudah terpakai atau tidak ditemukan."
          cta="Coba scanner"
          href=""
        />
      </div>
    </section>
  );
};

export default Services;
