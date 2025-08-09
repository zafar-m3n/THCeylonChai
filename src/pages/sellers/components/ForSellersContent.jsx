// ForSellersContent.jsx
import React from "react";
import { Icon } from "@iconify/react";

const ForSellersContent = () => {
  return (
    <section className="bg-white text-gray-900">
      {/* Intro */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-md md:text-xl font-lobster text-accent">Wholesale & Partnerships</p>
          <h2 className="text-3xl md:text-5xl font-lobster">Sell T&H Ceylon Chai</h2>
          <p className="mt-3 text-gray-600">
            From boutique cafés to specialty grocers, we supply fresh Sri Lankan tea with reliable lead times, clean
            labels, and marketing support. Start small, scale smoothly.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl p-5 ring-1 ring-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-accent/10 ring-1 ring-accent/20 mb-3">
              <Icon icon="mdi:leaf" className="text-accent" width={22} />
            </div>
            <h3 className="font-semibold">Fresh, Small-Batch Lots</h3>
            <p className="text-gray-600 mt-1">
              Consistent flavor and aroma through careful cupping and tightly controlled batches.
            </p>
          </div>
          <div className="rounded-2xl p-5 ring-1 ring-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-accent/10 ring-1 ring-accent/20 mb-3">
              <Icon icon="mdi:truck-fast-outline" className="text-accent" width={22} />
            </div>
            <h3 className="font-semibold">Fast, Reliable Dispatch</h3>
            <p className="text-gray-600 mt-1">
              Typical lead times 3–7 business days. Clear tracking and proactive updates.
            </p>
          </div>
          <div className="rounded-2xl p-5 ring-1 ring-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-accent/10 ring-1 ring-accent/20 mb-3">
              <Icon icon="mdi:storefront-outline" className="text-accent" width={22} />
            </div>
            <h3 className="font-semibold">Sell-Through Support</h3>
            <p className="text-gray-600 mt-1">
              Simple brewing guides, shelf talkers, and product copy you can paste into your store.
            </p>
          </div>
        </div>
      </div>

      {/* Packs Snapshot */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="rounded-2xl p-[1px] bg-gradient-to-br from-accent/20 via-white to-accent/10">
          <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-md md:text-xl font-lobster text-accent">Starter Tiers</p>
                <h3 className="text-xl md:text-2xl font-lobster">Popular Pack Sizes</h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Flexible options available—final details based on your needs and location.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent text-white px-4 py-2 font-medium hover:opacity-90"
              >
                Request Catalogue <Icon icon="mdi:arrow-right" width={18} />
              </a>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-gray-500">
                    <th className="py-3">Pack</th>
                    <th className="py-3">MOQ</th>
                    <th className="py-3">Popular For</th>
                  </tr>
                </thead>
                <tbody className="[&>tr:not(:last-child)]:border-b [&>tr]:border-gray-200">
                  <tr>
                    <td className="py-3 font-medium">Loose Leaf 100g</td>
                    <td className="py-3">24 units</td>
                    <td className="py-3">Grocers, gifting</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Loose Leaf 500g</td>
                    <td className="py-3">12 units</td>
                    <td className="py-3">Cafés, refills</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Tea Bags (25s)</td>
                    <td className="py-3">24 units</td>
                    <td className="py-3">Office pantries</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl p-5 ring-1 ring-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 text-accent font-semibold">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 ring-1 ring-accent/20">
                1
              </span>
              Start
            </div>
            <p className="text-gray-700 mt-2">
              Tell us your volumes, pack sizes and blends you’re eyeing. We’ll confirm availability and a timeline.
            </p>
          </div>
          <div className="rounded-2xl p-5 ring-1 ring-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 text-accent font-semibold">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 ring-1 ring-accent/20">
                2
              </span>
              Sample
            </div>
            <p className="text-gray-700 mt-2">
              Optional sample kit shipped or collected. Brew cards included to match our cupping notes.
            </p>
          </div>
          <div className="rounded-2xl p-5 ring-1 ring-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 text-accent font-semibold">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 ring-1 ring-accent/20">
                3
              </span>
              Fulfil
            </div>
            <p className="text-gray-700 mt-2">
              Place your PO, receive tracking within 24–48h of pack date. Reorder reminders optional.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="grid md:grid-cols-2 gap-5">
          <details className="rounded-2xl p-5 ring-1 ring-gray-200 bg-white shadow-sm group">
            <summary className="font-semibold cursor-pointer flex items-center justify-between">
              What’s the minimum order quantity (MOQ)?
              <Icon icon="mdi:chevron-down" width={20} className="transition group-open:rotate-180" />
            </summary>
            <p className="text-gray-700 mt-2">
              Most SKUs start at 12–24 units per pack size. Mixed-case MOQs are available—ask us for current options.
            </p>
          </details>
          <details className="rounded-2xl p-5 ring-1 ring-gray-200 bg-white shadow-sm group">
            <summary className="font-semibold cursor-pointer flex items-center justify-between">
              Can you white-label or co-brand?
              <Icon icon="mdi:chevron-down" width={20} className="transition group-open:rotate-180" />
            </summary>
            <p className="text-gray-700 mt-2">
              Yes. We offer simple co-branding and, on larger volumes, fully custom labels with your brand assets.
            </p>
          </details>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 my-12">
        <div className="rounded-[22px] p-[1px] bg-gradient-to-br from-accent/20 via-white to-accent/10">
          <div className="rounded-[20px] bg-white ring-1 ring-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-md md:text-xl font-lobster text-accent">Let’s work together</p>
              <h3 className="text-xl md:text-2xl font-lobster">Request a wholesale catalogue</h3>
              <p className="text-gray-600 mt-1">
                We’ll reply within one business day with current blends, pack sizes and samples info.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent text-white px-4 py-2 font-medium hover:opacity-90"
            >
              Contact Sales <Icon icon="mdi:email-fast-outline" width={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForSellersContent;
