import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  isDisabled?: boolean
  onClick: () => void
}

export const Button = ({ children, isDisabled, onClick }: ButtonProps) => {
  const colorClasses = isDisabled
    ? "bg-neutral-100 text-neutral-500 dark:bg-neutral-700 dark:text-neutral-300 cursor-default"
    : "bg-blue-400 hover:bg-blue-500 text-blue-50"

  return (
    <button
      className={`${colorClasses} shadow-md shadow-neutral-500 dark:shadow-neutral-800 text-xs rounded-lg px-4 py-1 transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
