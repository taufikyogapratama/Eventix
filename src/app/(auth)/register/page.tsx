import { Metadata } from "next";
import RegisterForm from "./RegisterForm";

export const metadata: Metadata = {
  title: "Daftar",
  description: "Buat akun baru untuk mulai membeli dan membuat tiket acara.",
};

const RegisterPage = () => {
  return (
    <main>
      <h1 className="text-foreground font-bold text-[1.75rem] text-center mb-4">
        Buat Akun Baru
      </h1>
      <p className="font-normal text-mutedCS text-base text-center mb-5">
        Daftar untuk mulai membeli dan
        <br /> membuat tiket acara favoritmu.
      </p>
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
