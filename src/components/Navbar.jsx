import { FiMoon, FiSun } from "react-icons/fi";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        darkMode
          ? "bg-zinc-950/80 border-zinc-800"
          : "bg-white/80 border-zinc-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <h1
          className={`text-2xl font-bold tracking-wide ${
            darkMode ? "text-white" : "text-zinc-900"
          }`}
        >
          WeatherNews
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-xl transition-all duration-300 ${
            darkMode
              ? "bg-zinc-800 text-white hover:bg-zinc-700"
              : "bg-zinc-200 text-zinc-900 hover:bg-zinc-300"
          }`}
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;