import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  isDisabled?: boolean
  onClick: () => void
}

export const Button = ({ children, isDisabled, onClick }: ButtonProps) => {
  const colorClasses = isDisabled ?
    'bg-neutral-100 text-neutral-500 cursor-default' :
    'bg-blue-400 hover:bg-blue-500 text-blue-50';

  return (
    <button
      className={`${colorClasses} shadow-md text-xs rounded-lg px-4 py-1 transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
