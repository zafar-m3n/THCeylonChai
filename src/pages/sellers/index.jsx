import React, { useEffect } from "react";
import SellersHero from "./components/SellersHero";
import ForSellersContent from "./components/ForSellersContent";

const Sellers = () => {
  useEffect(() => {
    document.title = "T & H Ceylon Chai | For Sellers";
  }, []);
  return (
    <div>
      <SellersHero />
      <ForSellersContent />
    </div>
  );
};

export default Sellers;
