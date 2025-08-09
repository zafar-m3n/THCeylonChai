import React from "react";
import TextGenerateEffect from "@/components/ui/TextGenerate";
import about from "@/assets/images/about.jpg"; // make sure you have this image

const AboutHero = () => {
  return (
    <div className="relative overflow-hidden text-white h-[35vh] md:h-[40vh]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${about})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-end items-center text-center px-6 pb-12">
        <TextGenerateEffect
          className="text-center text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-tight tracking-tight text-white"
          words="Our Story, Our Tea"
          animated={true}
        />
        {/* Subtitle */}
        <TextGenerateEffect
          className="mt-4 text-center text-base md:text-lg lg:text-xl font-medium text-gray-200"
          words="From the lush hills of Ceylon to your cup — discover the journey behind every blend."
          animated={true}
        />
      </div>
    </div>
  );
};

export default AboutHero;
