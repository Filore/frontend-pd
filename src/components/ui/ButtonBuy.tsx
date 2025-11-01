import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  className?: string;
};

export default function ButtonBuy({
  children,
  variant = "primary",
  onClick,
  className,
}: ButtonProps) {
  const baseStyles =
    "font-semibold py-3 rounded-2xl active:scale-95 transition text-center w-full";

  const variants = {
    primary: "bg-[#A1F200] text-black",
    secondary: "bg-[#1A1F2E] text-white",
    danger: "bg-[#FF0037] text-white",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
}

