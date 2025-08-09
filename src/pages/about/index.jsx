import React, { useEffect } from "react";
import AboutHero from "./components/AboutHero";
import AboutContent from "./components/AboutContent";

const AboutUs = () => {
  useEffect(() => {
    document.title = "T & H Ceylon Chai | About";
  }, []);
  return (
    <div>
      <AboutHero />
      <AboutContent />
    </div>
  );
};

export default AboutUs;
