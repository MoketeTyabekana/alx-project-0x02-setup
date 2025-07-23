import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  size = "medium",
  shape = "rounded-md",
  className = "",
}) => {
  const combined = `
    bg-blue-600 text-white hover:bg-blue-700 transition
    ${sizeClasses[size]} ${shape} ${className}
  `;

  return (
    <button onClick={onClick} className={combined}>
      {title}
    </button>
  );
};

export default Button;
