// Benefits.jsx
import React from "react";
import Icon from "@/components/ui/Icon";

/**
 * Benefits (Why Choose Us) — Staggered premium grid
 * - No featured tile; keeps rhythm consistent, but avoids “regular grid” feel via staggered columns
 * - Card: gradient hairline frame + soft paper panel
 * - Icon: accent gradient ring + subtle lift
 * - Copy tailored for both consumers & wholesale, with “Fresh-Seal Packaging” instead of custom blends
 */

const BENEFITS = [
  {
    icon: "mdi:leaf",
    title: "Fresh from Our Farms",
    desc: "Small-batch harvests from Sri Lanka’s highlands for peak aroma and flavor.",
  },
  {
    icon: "mdi:earth",
    title: "Ethically & Sustainably Sourced",
    desc: "We support local growers and use eco-friendly packaging choices.",
  },
  {
    icon: "mdi:star-shooting",
    title: "Premium Quality Guarantee",
    desc: "Only top-grade Ceylon leaves make it into our blends.",
  },
  {
    icon: "mdi:package-variant-closed",
    title: "Fresh-Seal Packaging",
    desc: "Airtight, light-safe packs lock in flavor from farm to cup.",
  },
  {
    icon: "mdi:truck-fast",
    title: "Worldwide Shipping",
    desc: "Securely packed for freshness—doorstep or café counter, globally.",
  },
  {
    icon: "mdi:handshake",
    title: "Reliable Partner Support",
    desc: "Fair pricing, consistent supply, and responsive service for businesses.",
  },
];

// stagger: left col baseline, middle +8, right +16 on large screens
const staggerClass = (i) => {
  const col = i % 3; // 0,1,2 across lg grid
  if (col === 1) return "lg:mt-8";
  if (col === 2) return "lg:mt-16";
  return ""; // left column baseline
};

const BenefitCard = ({ icon, title, desc }) => (
  <div
    className="
      group relative rounded-[20px] p-[1px]
      bg-gradient-to-br from-accent/15 via-white to-accent/10
      shadow-[0_1px_2px_rgba(0,0,0,0.06)]
      hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]
      transition-all duration-300
    "
  >
    <div
      className="
        rounded-[18px] h-full p-6
        bg-gradient-to-br from-white to-gray-50 ring-1 ring-gray-200
      "
    >
      {/* Icon with accent gradient ring */}
      <div className="mb-4 inline-flex items-center justify-center">
        <span
          className="
            relative inline-grid place-items-center
            rounded-2xl p-[2px]
            bg-gradient-to-br from-accent/40 to-accent/20
          "
        >
          <span className="rounded-2xl bg-white/90 backdrop-blur px-3 py-3 ring-1 ring-accent/20">
            <Icon icon={icon} className="text-accent" width={28} />
          </span>
        </span>
      </div>

      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>

      {/* Accent hairline for finish */}
      <div className="mt-5 h-px bg-gradient-to-r from-accent/30 via-accent/10 to-transparent" />
    </div>

    {/* tiny corner glow on hover */}
    <span
      className="
        pointer-events-none absolute -bottom-2 -right-2 h-8 w-8 rounded-full
        bg-accent/0 blur-xl transition
        group-hover:bg-accent/20
      "
    />
  </div>
);

const Benefits = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-md md:text-xl font-lobster text-accent">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-lobster text-gray-900">Benefits of Buying with Us</h3>
        </div>

        {/* Staggered grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <div key={b.title} className={staggerClass(i)}>
              <BenefitCard {...b} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
