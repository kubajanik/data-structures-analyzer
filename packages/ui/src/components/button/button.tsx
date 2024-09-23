import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-400 hover:bg-blue-500 shadow-md text-blue-50 text-sm rounded-lg px-4 py-1 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
