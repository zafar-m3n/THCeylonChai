import React from "react";
import logo from "@/assets/images/logoWhite.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Teas", href: "/teas" },
    { label: "Brewing Tips", href: "/tips" },
    { label: "Gallery", href: "/gallery" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="T&H Ceylon Chai" className="h-14 mb-4" />
          <p className="text-sm leading-relaxed text-gray-300">
            T&H Ceylon Chai is rooted in tradition and taste. We handcraft authentic Sri Lankan blends to bring warmth,
            wellness, and a story in every sip.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p className="text-sm text-gray-300 mb-1">+94 76 123 4567</p>
          <p className="text-sm text-gray-300 mb-4">hello@thceylonchai.com</p>
          <div className="flex items-center gap-4 text-xl">
            <a href="#" aria-label="YouTube" className="hover:text-accent">
              <Icon icon="mdi:youtube" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-accent">
              <Icon icon="mdi:instagram" />
            </a>
            <a href="#" aria-label="X (Twitter)" className="hover:text-accent">
              <Icon icon="mdi:twitter" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-accent">
              <Icon icon="mdi:facebook" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent">
              <Icon icon="mdi:linkedin" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Navigate</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-white transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
