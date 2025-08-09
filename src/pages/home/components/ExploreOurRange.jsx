// ExploreOurRange.jsx
import React from "react";
import Icon from "@/components/ui/Icon";

const CATEGORIES = [
  {
    title: "Black Tea",
    image: "https://picsum.photos/500/500?random=11",
    link: "/teas/black",
  },
  {
    title: "Herbal Infusions",
    image: "https://picsum.photos/500/500?random=12",
    link: "/teas/herbal",
  },
  {
    title: "Chai & Spiced",
    image: "https://picsum.photos/500/500?random=13",
    link: "/teas/chai",
  },
  {
    title: "Green Tea",
    image: "https://picsum.photos/500/500?random=14",
    link: "/teas/green",
  },
  {
    title: "Fruit Blends",
    image: "https://picsum.photos/500/500?random=15",
    link: "/teas/fruit",
  },
  {
    title: "Gift Packs",
    image: "https://picsum.photos/500/500?random=16",
    link: "/teas/gift",
  },
];

const ExploreOurRange = () => {
  return (
    <section className="bg-accent/15 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-md md:text-xl font-lobster text-accent">Discover Your Perfect Brew</h2>
          <h3 className="text-4xl md:text-5xl font-lobster text-gray-900">Explore Our Range</h3>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.title}
              href={cat.link}
              className="
                group relative overflow-hidden rounded-2xl
                bg-white shadow-sm hover:shadow-lg transition-all duration-300
              "
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="
                  w-full h-64 object-cover
                  transform group-hover:scale-105 transition-transform duration-500
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent
                  flex items-end justify-center p-4
                "
              >
                <h4
                  className="
                    text-white text-xl font-semibold
                    transform group-hover:translate-y-[-4px] transition-all duration-300
                  "
                >
                  {cat.title}
                </h4>
              </div>

              {/* Corner icon on hover */}
              <div
                className="
                  absolute top-4 right-4 opacity-0 group-hover:opacity-100
                  transform translate-y-[-10px] group-hover:translate-y-0
                  transition-all duration-300
                "
              >
                <span className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md">
                  <Icon icon="mdi:arrow-right" className="text-accent" width={20} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreOurRange;
