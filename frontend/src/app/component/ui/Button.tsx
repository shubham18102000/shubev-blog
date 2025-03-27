import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={`px-4 py-2 rounded-md font-semibold ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
