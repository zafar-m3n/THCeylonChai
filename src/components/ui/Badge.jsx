import React from "react";
import IconComponent from "./Icon";

const Badge = ({
  children,
  variant = "primary", // primary | success | warning | danger | neutral
  icon, // icon string (optional)
  className = "",
}) => {
  const base = "inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded";

  const variants = {
    primary: "bg-accent text-white",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    neutral: "bg-gray-200 text-gray-800",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {icon && <IconComponent icon={icon} className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
};

export default Badge;
