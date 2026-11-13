import { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Masuk",
  description: "Masuk untuk mengelola tiket dan acara favoritmu.",
};

const LoginPage = () => {
  return (
    <main>
      <h1 className="text-foreground font-bold text-[1.75rem] text-center mb-4">
        Masuk ke Akunmu
      </h1>
      <p className="font-normal text-mutedCS text-base text-center mb-5">
        Masuk untuk mengelola tiket dan
        <br className="md:hidden" /> acara favoritmu.
      </p>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
