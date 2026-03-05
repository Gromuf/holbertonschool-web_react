import React from "react";
import BodySection from "./BodySection";

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className="mb-10">
      <BodySection {...props} />
    </div>
  );
};

export default BodySectionWithMarginBottom;
