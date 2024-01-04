import Navbar from "@/mycomponents/Navbar";
import Hero from "@/mycomponents/Hero";
import HowItWorks from "@/mycomponents/HowItWorks";
import Testimonials from "@/mycomponents/Testimonials";
import Pricing from "@/mycomponents/Pricing";
import Footer from "@/mycomponents/Footer";
import SignUpForm from "@/mycomponents/SignUpForm";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <SignUpForm />

      <Footer />
    </>
  );
};

export default HomeScreen;
