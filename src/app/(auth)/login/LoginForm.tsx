"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import signin from "./action";
import Link from "next/link";
import { Eye, EyeOff, Loader } from "lucide-react";
import useShowPassword from "@/hooks/useShowPassword";

const LoginForm = () => {
  let state = {
    isError: false,
    email: "",
    password: "",
  };
  const [responseState, signinFn, isPending] = useActionState(signin, state);
  const { showPassword, handleShowPw } = useShowPassword();
  return (
    <form className="bg-surface p-8 rounded-xl outline outline-border">
      <label className="text-mutedCS font-medium text-[0.8rem]" htmlFor="email">
        Email
      </label>
      <br />
      <input
        className="text-[0.8rem] w-[13.35rem] h-9 outline outline-border rounded-md py-2 px-3 mb-4 mt-1 md:w-88"
        id="email"
        name="email"
        type="email"
        placeholder="Masukkan alamat email"
        maxLength={254}
        autoComplete="email"
        inputMode="email"
        defaultValue={responseState.email}
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
          minLength={8}
          maxLength={72}
          defaultValue={responseState.password}
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
        <p className="font-medium text-[0.8rem] text-danger-fg">
          Kredensial login tidak valid
        </p>
      )}
      <Button
        type="submit"
        className="m-0 w-[13.35rem] md:w-88 mt-3"
        disabled={isPending}
        formAction={signinFn}
      >
        {isPending ? <Loader className="animate-spin" /> : "Login"}
      </Button>
      <p className="mt-6 text-foreground text-[0.8rem] font-normal text-center">
        Belum punya akun?{" "}
        <Link href="/register" className="text-accentCS underline">
          Daftar
        </Link>
      </p>
    </form>
  );
};
export default LoginForm;
