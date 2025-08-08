import React, { useState } from "react";
import { Icon } from "@iconify/react";
import logo from "@/assets/images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Teas", href: "/teas" },
    // { label: "Brewing Tips", href: "/tips" },
    // { label: "Gallery", href: "/gallery" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl bg-white/40 backdrop-blur-lg border border-white/40 rounded-2xl px-6 py-3 shadow-[0_0_15px_#999999]">
        <div className="flex items-center justify-between lg:justify-center relative">
          <nav className="hidden lg:flex items-center gap-6 absolute left-6">
            {navLinks.slice(0, 2).map((link, index) => (
              <a key={index} href={link.href} className="font-medium hover:text-accent transition">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="lg:flex-1 lg:text-center flex items-center justify-between w-full lg:static">
            <img src={logo} alt="Logo" className="h-12 object-contain lg:mx-auto" />
            <button onClick={() => setMenuOpen(true)} className="lg:hidden text-gray-700">
              <Icon icon="mdi:menu" width={28} />
            </button>
          </div>
          <nav className="hidden lg:flex items-center gap-6 absolute right-6">
            {navLinks.slice(2).map((link, index) => (
              <a key={index} href={link.href} className="font-medium hover:text-accent transition">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-60 transform transition-transform duration-300 ease-in-out shadow-xl ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <img src={logo} alt="Logo" className="h-12" />
          <button onClick={() => setMenuOpen(false)} className="text-gray-700">
            <Icon icon="mdi:close" width={26} />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base hover:text-accent font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {menuOpen && <div className="fixed inset-0 bg-black/40 z-50 lg:hidden" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Header;
