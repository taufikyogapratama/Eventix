import Navbar from "@/components/navbar/Navbar";
import getUser from "@/services/getUser";
import Hero from "@/components/landingpage/Hero";
import Services from "@/components/landingpage/Services";
import HowItWorks from "@/components/landingpage/HowItWorks";
import Footer from "@/components/landingpage/Footer";

const Home = async () => {
  const user = await getUser();
  return (
    <>
      <Navbar variant={user ? "user" : "guest"} pathname="/" />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
      </main>
      <hr />
      <Footer />
    </>
  );
};

export default Home;
