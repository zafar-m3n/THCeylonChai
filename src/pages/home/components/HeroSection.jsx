import React, { useState, useEffect } from "react";
import TextGenerateEffect from "@/components/ui/TextGenerate";
import hero1 from "@/assets/images/hero1.jpg";
import hero2 from "@/assets/images/hero2.jpg";
import hero3 from "@/assets/images/hero3.jpg";
import AnimatedContent from "@/components/ui/AnimatedContent";

const slides = [
  {
    image: hero1,
    title: "Discover the Finest Ceylon Tea Blends",
    paragraph:
      "From bold, full-bodied black teas to soothing green infusions, explore our collection crafted from the finest handpicked Ceylon leaves. Each blend is carefully curated to bring you an authentic taste of Sri Lanka in every cup.",
    buttonText: "Explore Our Teas",
    buttonLink: "/our-teas",
  },
  {
    image: hero2,
    title: "Perfect Your Brew with Expert Tea Tips",
    paragraph:
      "Unlock the secrets to brewing the perfect cup of tea with our expert tips and techniques. Whether you prefer a strong morning brew or a delicate evening infusion, we’ll guide you through every step for the perfect flavor.",
    buttonText: "Brewing Tips",
    buttonLink: "/brewing-tips",
  },
  {
    image: hero3,
    title: "Experience the Story Behind T & H Ceylon Chai",
    paragraph:
      "Learn about our journey from the lush tea gardens of Sri Lanka to homes around the world. Discover how tradition, sustainability, and passion for tea have shaped T & H Ceylon Chai into the brand you know and love.",
    buttonText: "About Us",
    buttonLink: "/about-us",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden text-white md:h-[100vh] h-[70vh]">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 animate-zoom" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <TextGenerateEffect
          key={`title-${currentIndex}`}
          className="text-center text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold leading-tight tracking-tight text-white"
          words={slides[currentIndex].title}
          animated={true}
        />

        <AnimatedContent
          key={`btn-${currentIndex}`}
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1.5}
          initialOpacity={0.2}
          animateOpacity
        >
          <p className="text-base md:text-lg max-w-2xl mb-8 text-white/90">{slides[currentIndex].paragraph}</p>

          <a
            href={slides[currentIndex].buttonLink}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-white/80 transition"
          >
            {slides[currentIndex].buttonText}
          </a>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default HeroSection;
