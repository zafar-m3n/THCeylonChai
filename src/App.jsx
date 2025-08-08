import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import HomePage from "@/pages/home";
import NotFound from "@/pages/NotFound";
import OurTeas from "@/pages/teas/index";
import BrewingTips from "@/pages/tips/index";
import AboutUs from "@/pages/about/index";
import Gallery from "@/pages/gallery/index";
import ContactUs from "@/pages/contact/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/teas" element={<OurTeas />} />
          <Route path="/tips" element={<BrewingTips />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
