import React from "react";
import Loading from "../Loading";
import IconComponent from "./Icon";

const Button = ({
  type = "button",
  children,
  onClick,
  className = "",
  variant = "primary", // primary | secondary | outline 
  size = "sm", // sm | md | lg
  disabled = false,
  loading = false,
  icon, // icon string for iconify
  iconPosition = "left", // left | right
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-accent text-white hover:bg-accent-dark focus:ring-accent",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
  };

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          {icon && iconPosition === "left" && <IconComponent icon={icon} />}
          {children}
          {icon && iconPosition === "right" && <IconComponent icon={icon} />}
        </>
      )}
    </button>
  );
};

export default Button;
