import Navbar from "@/components/Navbar";
import getUser from "@/services/getUser";
import Hero from "@/components/landingpage/Hero";
import Services from "@/components/landingpage/Services";

const Home = async () => {
  const user = await getUser();
  return (
    <>
      <Navbar variant={user ? "user" : "guest"} pathname="/" />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
};

export default Home;
