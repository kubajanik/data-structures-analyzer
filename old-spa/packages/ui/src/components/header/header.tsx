import logo from "../../assets/logo.png"

export const Header = () => {
  return (
    <header className="flex items-center justify-center gap-4 h-12 py-2 px-4 border-b border-neutral-100">
      <img className="h-full" src={logo} alt="Logo" />
      <h1 className="text-sm text-neutral-500 font-mono">
        Data Structures Analyzer
      </h1>
    </header>
  )
}
