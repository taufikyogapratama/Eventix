import { createClient } from "@/lib/supabase/server";

const getUser = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

export default getUser;
