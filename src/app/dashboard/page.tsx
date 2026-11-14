"use server";
import Navbar from "@/components/navbar";
import requireUser from "@/utils/requireUser";

const Dashboard = async () => {
  const user = await requireUser();
  return (
    <>
      <Navbar variant={user ? "user" : "guest"} />
      <h1>Ini Dashboard</h1>
      <p>hallo {user.email}</p>
      <form action="/auth/signout" method="post">
        <button className="button block" type="submit">
          Sign out
        </button>
      </form>
    </>
  );
};

export default Dashboard;
