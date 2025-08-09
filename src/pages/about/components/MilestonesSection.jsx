// MilestonesSection.jsx
import React from "react";

const MilestonesSection = () => {
  return (
    <section className="bg-white text-black">
      <div className="max-w-5xl mx-auto px-4">
        {/* ========== first section ========== */}
        <div className="grid grid-cols-12 items-center">
          {/* rail (bottom half) + circle */}
          <div className="col-span-2 relative flex items-center justify-center after:content-[''] after:absolute after:border-l-[3px] after:border-accent after:z-[1] after:h-[50%] after:top-1/2 after:left-1/2">
            <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent text-white font-bold text-lg">
              1
            </div>
          </div>

          {/* card content */}
          <div className="ms-4 md:ms-0 col-span-9">
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm p-4 md:p-6">
              <p className="text-accent text-sm font-medium">2019</p>
              <h5 className="font-semibold text-lg md:text-xl">First Small-Batch Harvest</h5>
              <p className="mt-1 text-gray-700">
                We sourced micro-lots from trusted estates and cupped relentlessly until the flavor profiles felt right:
                bright aromatics, clean finish, and a daily-cup body.
              </p>
            </div>
          </div>
        </div>

        {/* ========== path between 1–2 ========== */}
        <div className="grid grid-cols-12">
          <div className="col-span-2 flex overflow-hidden h-10 p-0">
            <div className="relative w-full h-full border-[3px] border-accent rounded-[15px] left-1/2 -top-[20.5px]" />
          </div>
          <div className="col-span-8 h-10 p-0">
            <hr className="relative m-0 border-t-[3px] border-accent top-[17px]" />
          </div>
          <div className="col-span-2 flex overflow-hidden h-10 p-0">
            <div className="relative w-full h-full border-[3px] border-accent rounded-[15px] -left-1/2 top-[calc(50%-3px)]" />
          </div>
        </div>

        {/* ========== second section (right-aligned) ========== */}
        <div className="grid grid-cols-12 items-center">
          {/* card content (right) */}
          <div className="col-span-9 col-start-2 text-right me-4 md:me-0">
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm p-4 md:p-6">
              <p className="text-accent text-sm font-medium">2021</p>
              <h5 className="font-semibold text-lg md:text-xl">Signature Blends Launch</h5>
              <p className="mt-1 text-gray-700">
                Chai Masala and Chocolate Tea became instant favorites with cafés and home brewers—balanced spice,
                layered cocoa, and unmistakable Ceylon character.
              </p>
            </div>
          </div>

          {/* rail (full height) + circle */}
          <div className="col-span-2 relative flex items-center justify-center text-center after:content-[''] after:absolute after:border-l-[3px] after:border-accent after:z-[1] after:h-full after:top-0 after:left-[calc(50%-3px)]">
            <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent text-white font-bold text-lg">
              2
            </div>
          </div>
        </div>

        {/* ========== path between 2–3 ========== */}
        <div className="grid grid-cols-12">
          <div className="col-span-2 flex overflow-hidden h-10 p-0">
            <div className="relative w-full h-full border-[3px] border-accent rounded-[15px] left-1/2 top-[calc(50%-3px)]" />
          </div>
          <div className="col-span-8 h-10 p-0">
            <hr className="relative m-0 border-t-[3px] border-accent top-[17px]" />
          </div>
          <div className="col-span-2 flex overflow-hidden h-10 p-0">
            <div className="relative w-full h-full border-[3px] border-accent rounded-[15px] -left-1/2 -top-[20.5px]" />
          </div>
        </div>

        {/* ========== third section ========== */}
        <div className="grid grid-cols-12 items-center">
          {/* rail (top half) + circle */}
          <div className="col-span-2 relative flex items-center justify-center text-center after:content-[''] after:absolute after:border-l-[3px] after:border-accent after:z-[1] after:h-[50%] after:top-0 after:left-1/2">
            <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent text-white font-bold text-lg">
              3
            </div>
          </div>

          {/* card content */}
          <div className="ms-4 md:ms-0 col-span-9">
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm p-4 md:p-6">
              <p className="text-accent text-sm font-medium">2023</p>
              <h5 className="font-semibold text-lg md:text-xl">Wholesale & Global Shipping</h5>
              <p className="mt-1 text-gray-700">
                We scaled packing lines, added lot-level traceability, and began shipping worldwide with tracked,
                freshness-first fulfillment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
