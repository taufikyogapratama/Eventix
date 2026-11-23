import Navbar from "@/components/navbar/Navbar";
import requireUser from "@/utils/requireUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Ticket | Eventix",
  description: "Buat tiketmu",
};

const CreateTicketLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await requireUser();
  return (
    <>
      <Navbar variant={user ? "user" : "guest"} />
      <main className="pt-18">{children}</main>
    </>
  );
};

export default CreateTicketLayout;
