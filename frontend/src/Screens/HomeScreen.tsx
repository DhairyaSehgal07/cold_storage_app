import Navbar from "@/mycomponents/Navbar";
import Hero from "@/mycomponents/Hero";
import HowItWorks from "@/mycomponents/HowItWorks";
import Testimonials from "@/mycomponents/Testimonials";
import Pricing from "@/mycomponents/Pricing";
import Footer from "@/mycomponents/Footer";
import About from "@/mycomponents/About";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <About />
      <Footer />
    </>
  );
};

export default HomeScreen;
