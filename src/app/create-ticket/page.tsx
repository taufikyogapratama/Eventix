import { ArrowLeft, TriangleExclamationPoint } from "lucide-react";
import Link from "next/link";
import CreateForm from "./CreateForm";

const CreateTicket = () => {
  const activation = true;
  return (
    <div className="px-6 max-w-280 mx-auto">
      <div className="py-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-1.5 hover:text-accentCS text-sm font-medium"
        >
          <ArrowLeft size={17} />
          Kembali
        </Link>
      </div>
      <section>
        <h1 className="text-foreground text-3xl font-bold">Buat Tiket Baru</h1>
        <p className="text-mutedCS text-base font-normal">
          Isi detail acara untuk memulai penjualan tiket.
        </p>
      </section>
      <section className="mt-7 p-6 max-w-2xl mx-auto">
        <div
          className={`flex bg-warning/20 text-warning-fg py-4 px-5 rounded-xl gap-3 mb-10 ${activation ? "hidden" : ""}`}
        >
          <p>
            <TriangleExclamationPoint />
          </p>
          <p className="text-sm font-normal">
            <span className="text-base font-semibold">Peringatan</span>
            <br />
            Anda belum mengaktifkan pencairan dana. Harga tiket dikunci di Rp 0
            (Gratis).
          </p>
        </div>
        <CreateForm activation={activation} />
      </section>
    </div>
  );
};

export default CreateTicket;
