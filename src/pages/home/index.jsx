import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import BestSellers from "./components/BestSellers";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
  useEffect(() => {
    document.title = "T & H Ceylon Chai | Home";
  }, []);

  return (
    <div>
      <HeroSection />
      <BestSellers />
      <Testimonials />
    </div>
  );
};

export default HomePage;
