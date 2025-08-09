import React from "react";
import TextGenerateEffect from "@/components/ui/TextGenerate";
import contact from "@/assets/images/contact.jpg";

const ContactHero = () => {
  return (
    <div className="relative overflow-hidden text-white h-[35vh] md:h-[40vh]">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${contact})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-end items-center text-center px-6 pb-12">
        <TextGenerateEffect
          className="text-center text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-tight tracking-tight text-white"
          words="Get In Touch With Us"
          animated={true}
        />
        {/* Subtitle */}
        <TextGenerateEffect
          className="mt-4 text-center text-base md:text-lg lg:text-xl font-medium text-gray-200"
          words="We’re here to answer your questions and help you discover the perfect tea experience."
          animated={true}
        />
      </div>
    </div>
  );
};

export default ContactHero;
