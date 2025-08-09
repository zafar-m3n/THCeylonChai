// AboutContent.jsx
import React from "react";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import MilestonesSection from "./MilestonesSection";

/* ---------- Data ---------- */

const STATS = [
  { icon: "mdi:leaf", label: "Small-Batch Lots", value: "100%" },
  { icon: "mdi:map-marker", label: "Picked Regions", value: "3" },
  { icon: "mdi:clock-outline", label: "Dispatch Window", value: "48h" },
];

const VALUES = [
  {
    icon: "mdi:hand-heart",
    title: "People First",
    desc: "Long-term partnerships with growers and fair, transparent practices.",
  },
  {
    icon: "mdi:beaker-outline",
    title: "Taste-Led Blending",
    desc: "Classic profiles with a modern touch—balanced, aromatic, memorable.",
  },
  {
    icon: "mdi:recycle-variant",
    title: "Sustainability",
    desc: "Light-safe, recyclable packs and a focus on reducing waste at source.",
  },
];

const MILESTONES = [
  {
    year: "2019",
    title: "Pamankada Office (Headquarters)",
    desc: "32B, Dutugemunu Street, Pamankada, Sri Lanka.",
    img: "https://picsum.photos/1200/700?random=710",
  },
  {
    year: "2021",
    title: "Colombo Office",
    desc: "No. 78, Horton Place, Colombo 00700, Sri Lanka.",
    img: "https://picsum.photos/1200/700?random=711",
  },
  {
    year: "2023",
    title: "Global Shipping",
    desc: "We expanded packing lines and began worldwide fulfillment.",
    img: "https://picsum.photos/1200/700?random=712",
  },
];

const PROCESS = [
  {
    icon: "mdi:sprout",
    title: "Sourcing",
    sub: "Highlands & mid-grown",
    desc: "Directly from partner estates across key elevations.",
  },
  { icon: "mdi:tea", title: "Tasting", sub: "Cupped at origin", desc: "Every lot is graded before it joins a blend." },
  {
    icon: "mdi:flask-outline",
    title: "Blending",
    sub: "Small batches",
    desc: "Balanced body, aroma, and finish—repeatable.",
  },
  {
    icon: "mdi:package-variant-closed",
    title: "Packing",
    sub: "Fresh-seal",
    desc: "Light-safe, oxygen-controlled packaging.",
  },
];

const PRACTICES = [
  {
    icon: "mdi:filter-off-outline",
    title: "No Fillers, Ever",
    desc: "Only whole or carefully cut leaves — no dust, no shortcuts.",
  },
  {
    icon: "mdi:calendar-clock",
    title: "Roaster’s Discipline",
    desc: "Tight lot tracking and roast-date style batch labels.",
  },
  {
    icon: "mdi:water-opacity",
    title: "Water First Philosophy",
    desc: "Brew curves tuned for real-world kettles and cups.",
  },
  {
    icon: "mdi:sprout-outline",
    title: "Soil-to-Sip",
    desc: "Traceable lots with soil and rainfall notes on select lines.",
  },
];

/* ---------- Small UI helpers ---------- */

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

const ValueCard = ({ icon, title, desc }) => (
  <div className="group rounded-2xl p-6 bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-md hover:ring-accent/40 transition">
    <div className="flex items-start gap-3">
      <span className="mt-1 inline-grid h-10 w-10 place-items-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
        <Icon icon={icon} width={20} className="text-accent" />
      </span>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

const PracticeCard = ({ icon, title, desc }) => (
  <div className="rounded-2xl p-5 bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-md hover:ring-accent/40 transition">
    <div className="flex items-start gap-3">
      <span className="mt-1 inline-grid h-10 w-10 place-items-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
        <Icon icon={icon} width={20} className="text-accent" />
      </span>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

/* ---------- Process dials ---------- */

const InfusionDial = ({ icon, title, sub, desc }) => (
  <div className="rounded-2xl p-5 bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-md transition">
    <div className="relative mx-auto h-28 w-28">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(var(--accent, #dd8f2c) 0 75%, rgba(221,143,44,.15) 75% 100%)`,
          borderRadius: "9999px",
        }}
      />
      <div className="absolute inset-1 rounded-full bg-white ring-1 ring-accent/20 grid place-items-center">
        <Icon icon={icon} width={28} className="text-accent" />
      </div>
    </div>
    <div className="mt-3 text-center">
      <p className="font-semibold text-gray-900">{title}</p>
      <p className="text-xs text-accent/80">{sub}</p>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  </div>
);

/* ---------- Page assembly ---------- */

const AboutContent = () => {
  return (
    <section className="bg-white">
      {/* Story + Stats + Bento grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="text-md md:text-xl font-lobster text-accent">Our Story</p>
            <h2 className="text-3xl md:text-5xl font-lobster text-gray-900 leading-tight">
              A small team, a big love for tea
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We started with a simple aim—share fresh, characterful Ceylon tea with friends near and far. Today, we
              still work in small batches, tasting at origin and blending with care, so your daily cup feels special
              without being complicated.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-2">
              {STATS.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-none">
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                <img
                  src="https://picsum.photos/800/800?random=401"
                  alt="Tea fields"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-1 rounded-2xl overflow-hidden">
                <img
                  src="https://picsum.photos/800/400?random=402"
                  alt="Landscape 1"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-1 rounded-2xl overflow-hidden">
                <img
                  src="https://picsum.photos/800/400?random=403"
                  alt="Landscape 2"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-1 rounded-2xl overflow-hidden">
                <img
                  src="https://picsum.photos/600/600?random=404"
                  alt="Square 1"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-1 rounded-2xl overflow-hidden">
                <img
                  src="https://picsum.photos/600/600?random=405"
                  alt="Square 2"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-1 rounded-2xl overflow-hidden">
                <img
                  src="https://picsum.photos/600/600?random=406"
                  alt="Square 2"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-accent/15 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-md md:text-xl font-lobster text-accent">What We Stand For</h3>
            <p className="text-3xl md:text-4xl font-lobster text-gray-900">Our Values</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <ValueCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-md md:text-xl font-lobster text-accent">How We Grew</h3>
            <p className="text-3xl md:text-4xl font-lobster text-gray-900">Milestones</p>
          </div>
          <MilestonesSection />
        </div>
      </div>

      {/* Process */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-md md:text-xl font-lobster text-accent">From Leaf to Cup</h3>
            <p className="text-3xl md:text-4xl font-lobster text-gray-900">Our Process</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <InfusionDial key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>

      {/* Signature Practices */}
      <div className="bg-accent/15 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-md md:text-xl font-lobster text-accent">Beyond the Basics</h3>
            <p className="text-3xl md:text-4xl font-lobster text-gray-900">Signature Practices</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRACTICES.map((p) => (
              <PracticeCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-[24px] p-[1px] bg-gradient-to-br from-accent/20 via-white to-accent/10 shadow-sm">
            <div className="rounded-[22px] bg-white ring-1 ring-gray-200 p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-md md:text-xl font-lobster text-accent">Care to taste?</p>
                <h3 className="text-2xl md:text-3xl font-lobster text-gray-900">
                  Explore blends made with patience and purpose
                </h3>
                <p className="text-gray-600 mt-2">
                  Discover our best sellers or browse the full range to find your next daily cup.
                </p>
              </div>
              <div className="flex gap-3">
                <a href="/teas">
                  <Button variant="primary" size="lg" icon="mdi:cup" iconPosition="left">
                    Shop Teas
                  </Button>
                </a>
                <a href="/partner">
                  <Button variant="secondary" size="lg" icon="mdi:handshake" iconPosition="left">
                    Partner With Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
