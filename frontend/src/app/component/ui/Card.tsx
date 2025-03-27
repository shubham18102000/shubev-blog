import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return <div className={`p-6 border rounded-lg shadow-md ${className}`}>{children}</div>;
};

export default Card;
