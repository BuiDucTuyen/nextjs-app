"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setMounted(true);
    const currentTheme = theme === "system" ? systemTheme : theme;
    setDarkMode(currentTheme === "dark");
  }, [systemTheme, theme]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    setTheme(darkMode ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer"
      onClick={handleToggle}
    >
      <div
        className={clsx(
          "w-6 h-6 bg-white rounded-full shadow-md transform transition-transform",
          {
            "translate-x-8": darkMode,
            "translate-x-0": !darkMode,
          }
        )}
      >
        {darkMode ? (
          <MoonIcon className="w-6 h-6 text-gray-700" />
        ) : (
          <SunIcon className="w-6 h-6 text-yellow-500" />
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
