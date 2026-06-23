import { useEffect, useState } from "react";

function useTheme() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {

    document.documentElement.className = theme;

    localStorage.setItem("theme", theme);

  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
}

export default useTheme;