import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  isDisabled?: boolean;
  onClick: () => void;
}

export const Button = ({ children, isDisabled, onClick }: ButtonProps) => {
  const colorClasses = isDisabled
    ? "bg-neutral-100 text-neutral-500 cursor-default"
    : "bg-blue-400 hover:bg-blue-500 text-blue-50";

  return (
    <button
      className={`${colorClasses} rounded-lg px-4 py-1 text-xs shadow-md transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
