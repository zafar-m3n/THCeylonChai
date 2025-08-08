// Testimonials.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Icon from "@/components/ui/Icon";

/**
 * Continually sliding testimonials (two rows, opposite directions)
 * - Clean white section background
 * - No horizontal page scroll; borders/shadows visible vertically
 * - Premium card UI:
 *    • Subtle gradient BORDER frame (not a loud stripe)
 *    • Soft “paper” inner panel with very light gradient
 *    • Accent micro-elements (quote chip, gradient divider)
 *    • Dual ring avatar (gold + accent)
 *    • Gentle lift on hover
 */

const TESTIMONIALS = [
  {
    name: "Amara Wijesinghe",
    role: "Tea Enthusiast • Colombo",
    quote: "The aroma is unreal. Every cup tastes freshly picked—it's my daily ritual now.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Green Leaf Traders",
    role: "Wholesale Partner • Kandy",
    quote: "Reliable quality and on-time delivery—our customers notice the difference.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Hassan Al-Farsi",
    role: "Restaurant Owner • Dubai",
    quote: "Their Chai Karak became our signature. Rich, consistent, and truly authentic.",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Nadisha Perera",
    role: "Home Baker • Negombo",
    quote: "Chocolate Tea pairs perfectly with desserts—my customers always ask for it.",
    avatar: "https://i.pravatar.cc/100?img=56",
  },
  {
    name: "Ceylon Box Co.",
    role: "Gifting & Hampers • Colombo",
    quote: "Elegant packaging and consistent taste—ideal for corporate gifting.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Ishara De Silva",
    role: "Fitness Coach • Galle",
    quote: "Energy Tea is my go-to pre-session brew. Clean boost, no jitters.",
    avatar: "https://i.pravatar.cc/100?img=20",
  },
];

const TestimonialCard = ({ t }) => (
  <div
    className="
      group relative w-[280px] sm:w-[340px] md:w-[380px]
      rounded-[22px] p-[1px]
      bg-gradient-to-br from-accent/20 via-white to-accent/10
      shadow-[0_1px_2px_rgba(0,0,0,0.06)]
      hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]
      transition-all duration-300
    "
  >
    {/* Inner 'paper' panel */}
    <div
      className="
        rounded-[20px] bg-gradient-to-br from-white to-gray-50
        ring-1 ring-gray-200 p-5 h-full
      "
    >
      {/* Top row: accent quote chip */}
      <div className="flex items-start justify-between">
        <span className="inline-grid place-items-center h-8 w-8 rounded-full bg-accent/10 text-accent">
          <Icon icon="mdi:format-quote-open" width={16} />
        </span>
      </div>

      {/* Quote */}
      <blockquote className="mt-3">
        <p className="text-[1rem] leading-relaxed text-gray-800/95">
          <span className="italic">“{t.quote}”</span>
        </p>
      </blockquote>

      {/* Subtle accent divider */}
      <div className="mt-5 h-px bg-gradient-to-r from-accent/35 via-accent/15 to-transparent" />

      {/* Footer */}
      <div className="mt-5 flex items-center gap-3">
        {/* Avatar with dual ring (gold outer + accent inner) */}
        <div className="relative">
          {/* Outer gold ring */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-[6px] rounded-full"
            style={{ boxShadow: "0 0 0 2px #D4AF37" }}
          />
          {/* Inner accent ring */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-[3px] rounded-full ring-2 ring-accent/45"
          />
          <img
            src={t.avatar}
            alt={t.name}
            className="relative z-[1] w-10 h-10 rounded-full object-cover shadow"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="min-w-0">
          <p className="font-semibold text-gray-900 truncate">{t.name}</p>
          <p className="text-xs text-gray-500 truncate">{t.role}</p>
        </div>
      </div>

      {/* Corner flourish (very subtle leaf mark) */}
      <svg
        viewBox="0 0 24 24"
        className="pointer-events-none absolute bottom-3 right-3 w-10 h-10 opacity-[0.06] text-accent"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2C7 2 3 6 3 11c0 4 3 8 9 11 6-3 9-7 9-11 0-5-4-9-9-9zm0 2c3.9 0 7 3.1 7 7 0 3-2.3 6.2-7 8.9C7.3 17.2 5 14 5 11c0-3.9 3.1-7 7-7z" />
      </svg>
    </div>
  </div>
);

// Row wrapper: hide horizontal overflow, allow vertical breathing room
const RowWrapper = ({ children }) => <div className="relative overflow-x-hidden overflow-y-visible">{children}</div>;

const Row = ({ items, reverse = false, speed = 6500 }) => (
  <Swiper
    modules={[Autoplay]}
    loop
    allowTouchMove
    slidesPerView="auto"
    spaceBetween={16}
    speed={speed}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      reverseDirection: reverse,
    }}
    // vertical overflow visible (for shadows), horizontal clipped by wrapper
    style={{ overflow: "visible" }}
    className="!py-3"
  >
    {[...items, ...items].map((t, i) => (
      <SwiperSlide key={`${t.name}-${i}`} className="!w-auto">
        <TestimonialCard t={t} />
      </SwiperSlide>
    ))}
  </Swiper>
);

const Testimonials = () => {
  return (
    <section className="bg-white py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-md md:text-xl font-lobster text-accent">Voices of Our Tea Family</h2>
          <h3 className="text-4xl md:text-5xl font-lobster text-gray-900">What Customers & Partners Say</h3>
        </div>

        {/* Row 1 */}
        <RowWrapper>
          <Row items={TESTIMONIALS} reverse={false} speed={6500} />
        </RowWrapper>

        {/* Spacer */}
        <div className="h-6" />

        {/* Row 2 (opposite direction) */}
        <RowWrapper>
          <Row items={[...TESTIMONIALS].reverse()} reverse speed={7500} />
        </RowWrapper>
      </div>
    </section>
  );
};

export default Testimonials;
