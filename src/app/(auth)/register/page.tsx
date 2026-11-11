import { Button } from "@/components/ui/button";
import signup from "./action";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <section>
      <h1 className="text-foreground font-bold text-[1.75rem] text-center mb-4">
        Buat Akun Baru
      </h1>
      <p className="font-normal text-mutedCS text-base text-center mb-5">
        Daftar untuk mulai membeli dan
        <br /> membuat tiket acara favoritmu.
      </p>
      <form className="bg-surface p-8 rounded-xl outline outline-border">
        <label
          className="text-mutedCS font-medium text-[0.8rem]"
          htmlFor="username"
        >
          Nama Lengkap
        </label>
        <br />
        <input
          className="text-[0.8rem] w-[13.35rem] h-9 outline outline-border rounded-md py-2 px-3 mb-4 mt-1"
          id="username"
          name="username"
          type="text"
          placeholder="Masukkan nama lengkap"
          required
        />
        <br />
        <label
          className="text-mutedCS font-medium text-[0.8rem]"
          htmlFor="email"
        >
          Email
        </label>
        <br />
        <input
          className="text-[0.8rem] w-[13.35rem] h-9 outline outline-border rounded-md py-2 px-3 mb-4 mt-1"
          id="email"
          name="email"
          type="email"
          placeholder="Masukkan alamat email"
          required
        />
        <br />
        <label
          className="text-mutedCS font-medium text-[0.8rem]"
          htmlFor="password"
        >
          Kata Sandi
        </label>
        <br />
        <input
          className="text-[0.8rem] w-[13.35rem] h-9 outline outline-border rounded-md py-2 px-3 mb-4 mt-1"
          id="password"
          name="password"
          type="password"
          placeholder="Minimal 8 karakter"
          required
        />
        <br />
        <label
          className="text-mutedCS font-medium text-[0.8rem]"
          htmlFor="password"
        >
          Konfirmasi Kata Sandi
        </label>
        <br />
        <input
          className="text-[0.8rem] w-[13.35rem] h-9 outline outline-border rounded-md py-2 px-3 mb-4 mt-1"
          id="password"
          name="password"
          type="password"
          placeholder="Ulangi kata sandi"
          required
        />
        <br />

        {/* <button formAction={signup}>Sign up</button> */}
        <Button className="m-0" formAction={signup}>
          Sign up
        </Button>
        <p className="mt-6 text-foreground text-[0.8rem] font-normal text-center">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-accentCS">
            Masuk
          </Link>
        </p>
      </form>
    </section>
  );
}
