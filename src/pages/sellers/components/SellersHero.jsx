import React from "react";
import TextGenerateEffect from "@/components/ui/TextGenerate";
import sellers from "@/assets/images/sellers.jpg"; // Make sure you have this image in your assets

const SellersHero = () => {
  return (
    <div className="relative overflow-hidden text-white h-[35vh] md:h-[40vh]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${sellers})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-end items-center text-center px-6 pb-12">
        <TextGenerateEffect
          className="text-center text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-tight tracking-tight text-white"
          words="Partner With T&H Ceylon Chai"
          animated={true}
        />
        <TextGenerateEffect
          className="mt-4 text-center text-base md:text-lg lg:text-xl font-medium text-gray-200"
          words="Join our network of sellers and bring the authentic taste of Ceylon chai to your customers."
          animated={true}
        />
      </div>
    </div>
  );
};

export default SellersHero;
