import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const requireUser = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }
  return user;
};

export default requireUser;
