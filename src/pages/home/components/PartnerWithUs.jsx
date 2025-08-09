// PartnerWithUs.jsx
import React from "react";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

const STATS = [
  { icon: "mdi:storefront-outline", label: "Cafés & Stores", value: "250+" },
  { icon: "mdi:earth", label: "Countries Served", value: "20+" },
  { icon: "mdi:truck-fast", label: "Dispatch Window", value: "48h" },
];

const FEATURES = [
  {
    icon: "mdi:leaf",
    title: "Consistent, Premium Quality",
    desc: "Small-batch Ceylon teas with strict QC for repeatable results.",
  },
  {
    icon: "mdi:package-variant-closed",
    title: "Wholesale-Ready Packaging",
    desc: "Bulk packs and retail units; freshness locked from farm to shelf.",
  },
  {
    icon: "mdi:handshake",
    title: "Reliable Partner Support",
    desc: "Fair pricing, steady supply, responsive service — no drama.",
  },
  {
    icon: "mdi:clipboard-list-outline",
    title: "Simple Re-Order Workflow",
    desc: "Clear SKUs, fast invoicing, and predictable lead times.",
  },
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

const Feature = ({ icon, title, desc }) => (
  <div className="group rounded-xl p-4 bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-md hover:ring-accent/40 transition">
    <div className="flex items-start gap-3">
      <span className="mt-1 inline-grid h-9 w-9 place-items-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
        <Icon icon={icon} width={20} className="text-accent" />
      </span>
      <div>
        <h4 className="text-gray-900 font-semibold">{title}</h4>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

const PartnerWithUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-[24px] p-[1px] bg-gradient-to-br from-accent/20 via-white to-accent/10 shadow-sm">
          <div className="relative rounded-[22px] overflow-hidden ring-1 ring-black/5 grid lg:grid-cols-2">
            <div className="relative bg-white">
              <span className="absolute left-6 top-6 h-1 w-12 rounded-full bg-accent/80" />
              <div className="p-8 lg:p-10">
                <p className="text-md md:text-xl font-lobster text-accent">Partner With Us</p>
                <h2 className="text-3xl md:text-5xl font-lobster text-gray-900 mt-1">
                  Wholesale for Cafés, Stores & Hospitality
                </h2>
                <p className="mt-4 text-gray-700 leading-relaxed max-w-xl">
                  Serve unforgettable cups with reliable quality, steady supply, and packaging built for both
                  back-of-house efficiency and retail shelves.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="/partner" className="sm:w-auto w-full">
                    <Button variant="primary" size="lg" icon="mdi:handshake" iconPosition="left" className="w-full">
                      Become a Partner
                    </Button>
                  </a>
                  <a href="/catalog" className="sm:w-auto w-full">
                    <Button variant="secondary" size="lg" icon="mdi:download" iconPosition="left" className="w-full">
                      View Catalog
                    </Button>
                  </a>
                </div>
                <div className="mt-8 grid sm:grid-cols-3 gap-6">
                  {STATS.map((s) => (
                    <Stat key={s.label} {...s} />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative bg-accent/10">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/60 to-transparent" />
              <div className="p-8 lg:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FEATURES.map((f) => (
                    <Feature key={f.title} {...f} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </section>
  );
};

export default PartnerWithUs;
