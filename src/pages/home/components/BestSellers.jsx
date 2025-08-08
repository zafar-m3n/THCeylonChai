import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import TeaCard from "./TeaCard";

const BEST_SELLERS = [
  { name: "Black Tea", weight: "100g", price: "Rs. 800", img: "https://picsum.photos/900?random=1" },
  { name: "Blueberry Tea", weight: "40g", price: "Rs. 1,200", img: "https://picsum.photos/900?random=2" },
  { name: "Chai Karak", weight: "60g", price: "Rs. 1,200", img: "https://picsum.photos/900?random=3" },
  { name: "Chai Masala", weight: "60g", price: "Rs. 1,200", img: "https://picsum.photos/900?random=4" },
  { name: "Chocolate Tea", weight: "60g", price: "Rs. 1,200", img: "https://picsum.photos/900?random=5" },
  { name: "Energy Tea", weight: "40g", price: "Rs. 1,200", img: "https://picsum.photos/900?random=6" },
];

const SWIPER_BREAKPOINTS = {
  1024: { slidesPerView: 4, spaceBetween: 22 },
  768: { slidesPerView: 2, spaceBetween: 18 },
  0: { slidesPerView: 1, spaceBetween: 14 },
};

const SectionHeading = ({ kicker, title }) => (
  <div className="max-w-7xl mx-auto px-4 mb-7">
    <h2 className="text-md md:text-xl font-lobster">{kicker}</h2>
    <h2 className="text-4xl md:text-5xl font-lobster">{title}</h2>
  </div>
);

const ArrowButton = ({ dir = "left", onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={dir === "left" ? "Previous" : "Next"}
    className="grid place-items-center h-10 w-10 rounded-full ring-1 ring-black/10 bg-white/90 hover:bg-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
  >
    <Icon icon={dir === "left" ? "mdi:chevron-left" : "mdi:chevron-right"} width={22} className="text-accent" />
  </button>
);

const BestSellers = () => {
  const swiperRef = useRef(null);

  const slidePrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const slideNext = useCallback(() => swiperRef.current?.slideNext(), []);
  const handleViewAll = useCallback(() => {
    window.location.href = "/teas";
  }, []);

  return (
    <section className="pb-12 bg-white">
      {/* Heading Banner */}
      <div className="text-center py-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-widest uppercase font-lobster">
          From Our Farms to Your Doorsteps
        </h2>
      </div>

      <div className="bg-accent/15 text-gray-800 py-12">
        <SectionHeading kicker="Tea Lovers' Choice" title="Our BestSellers" />

        {/* Slider with Arrows */}
        <div
          className="max-w-7xl mx-auto px-4 flex items-center gap-4"
          role="region"
          aria-label="Best sellers carousel"
        >
          <ArrowButton dir="left" onClick={slidePrev} />

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop
            allowTouchMove
            speed={450}
            className="flex-1"
            breakpoints={SWIPER_BREAKPOINTS}
          >
            {BEST_SELLERS.map((tea, i) => (
              <SwiperSlide key={tea.name}>
                <TeaCard
                  {...tea}
                  badge={i < 3 ? "Best Seller" : undefined}
                  badgeVariant="primary"
                  rating={4.5 - (i % 3) * 0.5}
                  reviews={150 - i * 7}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <ArrowButton dir="right" onClick={slideNext} />
        </div>

        {/* View All Button */}
        <div className="mt-8 flex justify-center">
          <Button
            variant="primary"
            size="lg"
            icon="mdi:arrow-right"
            iconPosition="right"
            onClick={handleViewAll}
            className="font-lobster"
          >
            View All Teas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
