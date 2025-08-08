import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";

const HomePage = () => {
  useEffect(() => {
    document.title = "T & H Ceylon Chai | Home";
  }, []);

  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default HomePage;
