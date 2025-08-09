import React, { useEffect } from "react";

const BrewingTips = () => {
  useEffect(() => {
    document.title = "T & H Ceylon Chai | Tips";
  }, []);
  return <div>BrewingTips</div>;
};

export default BrewingTips;
