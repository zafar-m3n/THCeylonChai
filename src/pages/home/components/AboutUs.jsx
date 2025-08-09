// AboutUs.jsx
import React from "react";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

const IMAGES = [
  { src: "https://picsum.photos/600/600?random=201", type: "square" },
  { src: "https://picsum.photos/800/400?random=202", type: "landscape" },
  { src: "https://picsum.photos/800/400?random=203", type: "landscape" },
  { src: "https://picsum.photos/600/600?random=204", type: "square" },
  { src: "https://picsum.photos/600/600?random=205", type: "square" },
  { src: "https://picsum.photos/600/600?random=206", type: "square" },
];

const Stat = ({ icon, value, label }) => (
  <div className="flex items-center gap-3">
    <span className="inline-grid h-10 w-10 place-items-center rounded-full bg-accent/10 ring-1 ring-accent/20">
      <Icon icon={icon} width={20} className="text-accent" />
    </span>
    <div>
      <div className="text-lg font-semibold text-gray-900">{value}</div>
      <div className="text-xs text-gray-600">{label}</div>
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Bento grid */}
        <div className="order-1 lg:order-none">
          <div className="grid grid-cols-3 gap-3">
            {/* Large square on left */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
              <img
                src={IMAGES[0].src}
                alt="Tea 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Two landscape stacked on right */}
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
              <img
                src={IMAGES[1].src}
                alt="Tea 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
              <img
                src={IMAGES[2].src}
                alt="Tea 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Bottom row: two squares */}
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
              <img
                src={IMAGES[3].src}
                alt="Tea 4"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
              <img
                src={IMAGES[4].src}
                alt="Tea 5"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
              <img
                src={IMAGES[5].src}
                alt="Tea 5"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Right: Copy */}
        <div className="space-y-5">
          <p className="text-md md:text-xl font-lobster text-accent">About Us</p>
          <h2 className="text-3xl md:text-5xl font-lobster text-gray-900 leading-tight">
            From Sri Lanka’s Highlands to Your Cup
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We’re a quality-obsessed tea company dedicated to fresh, characterful Ceylon blends. Our leaves are picked
            in small batches, tasted at origin, and packed to lock in aroma before they ever meet your kettle.
          </p>

          <ul className="mt-3 space-y-3">
            <li className="flex items-start gap-3">
              <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                <Icon icon="mdi:leaf" width={18} className="text-accent" />
              </span>
              <span className="text-gray-700">
                Ethical partnerships with growers for better tea and better livelihoods.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                <Icon icon="mdi:beaker-outline" width={18} className="text-accent" />
              </span>
              <span className="text-gray-700">Taste-led blending — from timeless classics to limited editions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                <Icon icon="mdi:package-variant-closed" width={18} className="text-accent" />
              </span>
              <span className="text-gray-700">Fresh-seal, light-safe packaging to preserve nuance and body.</span>
            </li>
          </ul>

          <div className="grid sm:grid-cols-3 gap-6 pt-2">
            <Stat icon="mdi:map-marker" value="3 Regions" label="Picked & tasted" />
            <Stat icon="mdi:star-shooting" value="Top Grade" label="Ceylon leaves" />
            <Stat icon="mdi:clock-outline" value="48h" label="Dispatch window" />
          </div>

          <div className="pt-2">
            <a href="/about">
              <Button variant="primary" size="lg" icon="mdi:arrow-right" iconPosition="right">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
