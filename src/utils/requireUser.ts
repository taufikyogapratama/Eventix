import getUser from "@/services/getUser";
import { redirect } from "next/navigation";

const requireUser = async () => {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  } else {
    return user;
  }
};

export default requireUser;
