import React, { useEffect } from "react";
import ContactHero from "./components/ContactHero";
import ContactContent from "./components/ContactContent";

const ContactUs = () => {
  useEffect(() => {
    document.title = "T & H Ceylon Chai | Contact";
  }, []);
  return (
    <div>
      <ContactHero />
      <ContactContent />
    </div>
  );
};

export default ContactUs;
