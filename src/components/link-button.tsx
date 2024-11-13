import { ReactNode } from "react";

import Link from "next/link";

interface LinkButtonProps {
  children: ReactNode;
  isDisabled?: boolean;
  href: string;
}

export const LinkButton = ({ children, isDisabled, href }: LinkButtonProps) => {
  const colorClasses = isDisabled
    ? "bg-neutral-100 text-neutral-500 pointer-events-none"
    : "bg-blue-400 hover:bg-blue-500 text-blue-50";

  return (
    <Link
      className={`${colorClasses} rounded-lg px-4 py-1 text-xs shadow-md transition-colors`}
      href={href}
    >
      {children}
    </Link>
  );
};
