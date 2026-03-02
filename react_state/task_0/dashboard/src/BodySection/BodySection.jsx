import React from "react";
const BodySection = ({ title, children }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default BodySection;
