// LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = ({ size = 12, color = "blue-500", height = "h-64" }) => {
  const borderSize = 4; // Tailwind border-4
  return (
    <div className={`flex items-center justify-center ${height}`}>
      <div
        className={`w-${size} h-${size} border-${borderSize} border-${color} border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
