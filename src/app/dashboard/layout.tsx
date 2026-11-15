import Navbar from "@/components/Navbar";
import requireUser from "@/utils/requireUser";
import { Children } from "react";

const dashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await requireUser();
  return (
    <>
      <Navbar variant={user ? "user" : "guest"} />
      {children}
    </>
  );
};

export default dashboardLayout;
