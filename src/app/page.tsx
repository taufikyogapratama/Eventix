import Navbar from "@/components/navbar";
import getUser from "@/services/getUser";

const Home = async () => {
  const user = await getUser();
  return (
    <>
      <Navbar variant={user ? "user" : "guest"} pathname="/" />
    </>
  );
};

export default Home;
