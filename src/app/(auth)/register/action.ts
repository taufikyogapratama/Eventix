"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

const signup = async (
  prevState: {
    isError: boolean;
    username: string;
    email: string;
    password: string;
    valPassword: string;
    message: string;
  },
  formData: FormData,
) => {
  const supabase = await createClient();
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const valPassword = formData.get("valPassword") as string;
  if (password !== valPassword) {
    return {
      isError: true,
      username,
      email,
      password,
      valPassword,
      message: "Konfirmasi sandi tidak sama.",
    };
  }
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: formData.get("username") as string,
      },
    },
  });

  if (error) {
    return {
      isError: true,
      username,
      email,
      password,
      valPassword,
      message: "Kredensial register tidak valid atau email sudah terdaftar",
    };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
};

export default signup;
