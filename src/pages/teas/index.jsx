import React, { useEffect } from "react";

const OurTeas = () => {
  useEffect(() => {
    document.title = "T & H Ceylon Chai | Our Products";
  }, []);
  return <div>OurTeas</div>;
};

export default OurTeas;
