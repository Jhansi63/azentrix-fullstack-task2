import { FiMoon, FiSun } from "react-icons/fi";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
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
  );
}

export default ThemeToggle;