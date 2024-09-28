import logo from "../../assets/logo.png"

export const Header = () => {
  return (
    <header className="flex items-center justify-center gap-4 h-12 py-2 px-4 border-b-2 border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-700">
      <img className="h-full" src={logo} alt="Logo" />
      <h1 className="text-sm text-neutral-500 dark:text-neutral-300 font-mono">
        Data Structures Analyzer
      </h1>
      <button
        onClick={() => window.document.documentElement.classList.toggle("dark")}
      >
        Toggle
      </button>
    </header>
  )
}
