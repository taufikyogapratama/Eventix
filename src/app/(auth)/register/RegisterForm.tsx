"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import signup from "./action";
import { useActionState } from "react";
import { Eye, EyeOff, Loader } from "lucide-react";
import useShowPassword from "@/hooks/useShowPassword";

const RegisterForm = () => {
  let state = {
    isError: false,
    username: "",
    email: "",
    password: "",
    valPassword: "",
    message: "",
  };
  const [responseState, signupFn, isPending] = useActionState(signup, state);
  const { showPassword, handleShowPw } = useShowPassword();
  return (
    <form className="bg-surface p-8 rounded-xl outline outline-border">
      <label
        className="text-mutedCS font-medium text-[0.8rem]"
        htmlFor="username"
      >
        Nama Lengkap
      </label>
      <br />
      <input
        className="text-[0.8rem] w-[13.35rem] h-9 outline outline-border rounded-md py-2 px-3 mb-3 mt-1 md:w-88"
        id="username"
        name="username"
        type="text"
        maxLength={50}
        placeholder="Masukkan nama lengkap"
        defaultValue={responseState.username}
        required
      />
      <br />
      <label className="text-mutedCS font-medium text-[0.8rem]" htmlFor="email">
        Email
      </label>
      <br />
      <input
        className="text-[0.8rem] w-[13.35rem] h-9 outline outline-border rounded-md py-2 px-3 mb-3 mt-1 md:w-88"
        id="email"
        name="email"
        type="email"
        placeholder="Masukkan alamat email"
        defaultValue={responseState.email}
        maxLength={254}
        autoComplete="email"
        inputMode="email"
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
      <div className="w-[13.35rem] md:w-88 flex mb-3 mt-1 outline outline-border items-center rounded-md">
        <input
          className="text-[0.8rem] h-9 py-2 px-3 w-full"
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Minimal 8 karakter"
          defaultValue={responseState.password}
          minLength={8}
          maxLength={72}
          required
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleShowPw}
          className="mr-1"
          aria-label={
            showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"
          }
        >
          {showPassword ? (
            <EyeOff aria-hidden="true" />
          ) : (
            <Eye aria-hidden="true" />
          )}
        </Button>
      </div>
      <label
        className="text-mutedCS font-medium text-[0.8rem]"
        htmlFor="valPassword"
      >
        Konfirmasi Kata Sandi
      </label>
      <br />
      <div className="w-[13.35rem] md:w-88 flex mb-3 mt-1 outline outline-border items-center rounded-md">
        <input
          className="text-[0.8rem] h-9 py-2 px-3 w-full"
          id="valPassword"
          name="valPassword"
          type={showPassword ? "text" : "password"}
          placeholder="Ulangi kata sandi"
          defaultValue={responseState.valPassword}
          maxLength={72}
          required
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleShowPw}
          className="mr-1"
          aria-label={
            showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"
          }
        >
          {showPassword ? (
            <EyeOff aria-hidden="true" />
          ) : (
            <Eye aria-hidden="true" />
          )}
        </Button>
      </div>
      {responseState.isError && (
        <p className="font-medium text-[0.8rem] text-danger-fg w-[13.35rem] md:w-88">
          {responseState.message}
        </p>
      )}

      <Button
        type="submit"
        className="m-0 w-full mt-3"
        formAction={signupFn}
        disabled={isPending}
      >
        {isPending ? <Loader className="animate-spin" /> : "Sign up"}
      </Button>
      <p className="mt-6 text-foreground text-[0.8rem] font-normal text-center">
        Sudah punya akun?{" "}
        <Link href="/login" className="text-accentCS underline">
          Masuk
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
