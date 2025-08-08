import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import BestSellers from "./components/BestSellers";

const HomePage = () => {
  useEffect(() => {
    document.title = "T & H Ceylon Chai | Home";
  }, []);

  return (
    <div>
      <HeroSection />
      <BestSellers />
    </div>
  );
};

export default HomePage;
