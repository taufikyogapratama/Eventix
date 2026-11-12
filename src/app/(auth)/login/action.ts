"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

const signin = async (
  prevState: { isError: boolean; email: string; password: string },
  formData: FormData,
) => {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { isError: true, email, password };
  }
  revalidatePath("/", "layout");
  redirect("/dashboard");
};

export default signin;
