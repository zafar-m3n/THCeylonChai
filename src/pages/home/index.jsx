import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import BestSellers from "./components/BestSellers";
import Testimonials from "./components/Testimonials";
import Benefits from "./components/WhyChooseUs";
import ExploreOurRange from "./components/ExploreOurRange";

const HomePage = () => {
  useEffect(() => {
    document.title = "T & H Ceylon Chai | Home";
  }, []);

  return (
    <div>
      <HeroSection />
      <BestSellers />
      <Testimonials />
      <Benefits />
      <ExploreOurRange />
    </div>
  );
};

export default HomePage;
