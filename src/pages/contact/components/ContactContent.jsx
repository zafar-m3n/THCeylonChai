// ContactContent.jsx
import React, { useMemo, useState } from "react";
import Select, { components as RSComponents } from "react-select";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

const InfoItem = ({ icon, title, children, href }) => (
  <a
    href={href}
    className="group relative flex items-start gap-3 rounded-2xl bg-white/80 ring-1 ring-gray-200 hover:ring-accent/40 hover:shadow-md transition p-4"
  >
    {/* tiny 'string' like a tea tag */}
    <span className="absolute -top-3 left-6 h-3 w-[1px] bg-gray-300" />
    <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
      <Icon icon={icon} width={20} className="text-accent" />
    </span>
    <div className="min-w-0">
      <p className="font-semibold text-gray-900">{title}</p>
      <p className="text-gray-600 truncate">{children}</p>
    </div>
  </a>
);

const Label = ({ htmlFor, children, hint }) => (
  <div className="flex items-baseline justify-between">
    <label htmlFor={htmlFor} className="mb-1 block text-sm font-medium text-gray-700">
      {children}
    </label>
    {hint ? <span className="text-xs text-gray-400">{hint}</span> : null}
  </div>
);

const Input = (props) => (
  <input
    {...props}
    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition"
  />
);

const TextArea = (props) => (
  <textarea
    {...props}
    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition resize-y"
  />
);

const QuickChip = ({ active, children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={[
      "px-3 py-1.5 rounded-full text-sm ring-1 transition",
      active
        ? "bg-accent text-white ring-accent hover:bg-accent/90"
        : "bg-white ring-gray-200 text-gray-700 hover:ring-accent/40",
    ].join(" ")}
  >
    {children}
  </button>
);

// react-select custom parts
const DropdownIndicator = (props) => (
  <RSComponents.DropdownIndicator {...props}>
    <Icon icon="mdi:leaf" width={18} className="text-accent" />
  </RSComponents.DropdownIndicator>
);

const ContactContent = () => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState({ value: "general", label: "General" });
  const maxChars = 800;

  const inquiryOptions = useMemo(
    () => [
      { value: "general", label: "General" },
      { value: "orders", label: "Orders" },
      { value: "wholesale", label: "Wholesale / Partner" },
      { value: "shipping", label: "Shipping" },
      { value: "other", label: "Other" },
    ],
    []
  );

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: 12,
      borderColor: state.isFocused ? "#dd8f2c" : "#d1d5db",
      boxShadow: state.isFocused ? "0 0 0 4px rgba(221,143,44,0.15)" : "none",
      padding: 2,
      minHeight: 44,
      "&:hover": { borderColor: "#dd8f2c" },
    }),
    valueContainer: (base) => ({ ...base, paddingInline: 4 }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "#dd8f2c" : state.isFocused ? "rgba(221,143,44,0.08)" : "white",
      color: state.isSelected ? "white" : "#111827",
      cursor: "pointer",
    }),
    menu: (base) => ({ ...base, borderRadius: 12, overflow: "hidden" }),
    indicatorSeparator: () => ({ display: "none" }),
  };

  const setTypeByValue = (val) => {
    const found = inquiryOptions.find((o) => o.value === val);
    if (found) setType(found);
  };

  const aromaPct = Math.min(100, Math.round((message.length / maxChars) * 100));

  return (
    <section className="relative bg-white py-16 overflow-x-clip">
      {/* subtle tea-stain rings */}
      <div className="pointer-events-none absolute -top-8 -left-8 h-48 w-48 rounded-full border-8 border-accent/10 blur-[2px]" />
      <div className="pointer-events-none absolute bottom-6 -right-10 h-40 w-40 rounded-full border-8 border-accent/10 blur-[2px]" />

      <div className="max-w-7xl mx-auto px-4">
        {/* contact strip */}
        <div className="grid gap-4 sm:grid-cols-3 mb-12">
          <InfoItem icon="mdi:email-outline" title="Email" href="mailto:hello@thceylonchai.com">
            hello@thceylonchai.com
          </InfoItem>
          <InfoItem icon="mdi:phone" title="Phone / WhatsApp" href="tel:+94771234567">
            +94 77 123 4567
          </InfoItem>
          <InfoItem icon="mdi:clock-outline" title="Hours">
            Mon–Sat · 9:00–18:00 (IST)
          </InfoItem>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* form */}
          <div className="rounded-[22px] p-[1px] bg-gradient-to-br from-accent/20 via-white to-accent/10 shadow-sm">
            <div className="rounded-[20px] bg-white ring-1 ring-gray-200 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-lobster text-gray-900">Send us a message</h3>
              <p className="mt-2 text-gray-600">
                Questions about orders, wholesale, or blends? We usually reply within 1–2 business days.
              </p>

              <form className="mt-6 grid gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required placeholder="Jane Perera" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" required placeholder="jane@example.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+94 ..." />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Wholesale inquiry, order help, etc." />
                  </div>
                </div>

                <div>
                  <Label>Inquiry Type</Label>
                  <Select
                    options={inquiryOptions}
                    defaultValue={inquiryOptions[0]}
                    styles={selectStyles}
                    isSearchable={false}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <TextArea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value.slice(0, maxChars))}
                    placeholder="Tell us how we can help…"
                  />
                  <div className="mt-1 flex justify-between text-xs">
                    <span className="text-gray-500">Be as detailed as you like — links welcome.</span>
                    <span className="text-gray-400">
                      {message.length}/{maxChars}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    id="consent"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    You may contact me about my inquiry. I agree to the privacy policy.
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Button variant="primary" size="lg" icon="mdi:send" iconPosition="left">
                    Send Message
                  </Button>
                  <Button variant="secondary" size="lg" icon="mdi:whatsapp" iconPosition="left">
                    Chat on WhatsApp
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* map & visit */}
          <div className="space-y-6">
            <div className="rounded-[24px] overflow-hidden ring-1 ring-gray-200 bg-white shadow-sm">
              <div className="relative h-[380px]">
                <iframe
                  title="Colombo Map"
                  src="https://maps.google.com/maps?q=Colombo%2C%20Sri%20Lanka&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="inline-grid h-10 w-10 place-items-center rounded-full bg-accent/90 shadow-lg ring-4 ring-white">
                    <Icon icon="mdi:map-marker" width={22} className="text-white" />
                  </span>
                </div>

                {/* bottom overlay card */}
                <div className="absolute left-4 bottom-4 right-4">
                  <div className="rounded-xl bg-white/95 backdrop-blur-sm p-4 ring-1 ring-gray-200 shadow">
                    <div className="flex items-center gap-3">
                      <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                        <Icon icon="mdi:office-building-marker-outline" width={18} className="text-accent" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900">Colombo, Sri Lanka</p>
                        <p className="text-xs text-gray-600 truncate">Head office & dispatch</p>
                      </div>
                      <a
                        href="https://maps.google.com/?q=Colombo%2C%20Sri%20Lanka"
                        className="ml-auto inline-flex items-center gap-1 text-accent text-sm hover:underline underline-offset-4"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open in Maps
                        <Icon icon="mdi:arrow-top-right" width={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                    <Icon icon="mdi:truck-fast" width={18} className="text-accent" />
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">Dispatch</p>
                    <p className="text-sm text-gray-600">Usually within 48h</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                    <Icon icon="mdi:earth" width={18} className="text-accent" />
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">Shipping</p>
                    <p className="text-sm text-gray-600">Worldwide, tracked</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] p-[1px] bg-gradient-to-br from-accent/20 via-white to-accent/10 shadow-sm">
              <div className="rounded-[22px] bg-white ring-1 ring-gray-200 p-6">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:email-fast-outline" width={20} className="text-accent" />
                  <h4 className="text-lg font-semibold text-gray-900">Prefer email?</h4>
                </div>
                <p className="mt-1 text-gray-600">
                  Write to{" "}
                  <a href="mailto:hello@thceylonchai.com" className="text-accent underline underline-offset-4">
                    hello@thceylonchai.com
                  </a>{" "}
                  and we’ll reply shortly.
                </p>

                <div className="mt-4 flex items-center gap-4">
                  <a
                    href="https://instagram.com"
                    className="inline-grid h-10 w-10 place-items-center rounded-full ring-1 ring-gray-200 hover:ring-accent/40 hover:shadow-md transition"
                  >
                    <Icon icon="mdi:instagram" width={20} className="text-gray-700" />
                  </a>
                  <a
                    href="https://facebook.com"
                    className="inline-grid h-10 w-10 place-items-center rounded-full ring-1 ring-gray-200 hover:ring-accent/40 hover:shadow-md transition"
                  >
                    <Icon icon="mdi:facebook" width={20} className="text-gray-700" />
                  </a>
                  <a
                    href="https://t.me"
                    className="inline-grid h-10 w-10 place-items-center rounded-full ring-1 ring-gray-200 hover:ring-accent/40 hover:shadow-md transition"
                  >
                    <Icon icon="mdi:telegram" width={20} className="text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
