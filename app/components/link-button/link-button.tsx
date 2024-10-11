import { Link } from "@remix-run/react";
import type { To } from "@remix-run/router";
import { ReactNode } from "react";

interface LinkButtonProps {
  children: ReactNode;
  isDisabled?: boolean;
  to: To;
}

export const LinkButton = ({ children, isDisabled, to }: LinkButtonProps) => {
  const colorClasses = isDisabled
    ? "bg-neutral-100 text-neutral-500 pointer-events-none"
    : "bg-blue-400 hover:bg-blue-500 text-blue-50";

  return (
    <Link
      className={`${colorClasses} rounded-lg px-4 py-1 text-xs shadow-md transition-colors`}
      to={to}
    >
      {children}
    </Link>
  );
};
