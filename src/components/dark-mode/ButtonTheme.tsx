import { ThemeProvider, useTheme } from "next-themes";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme() as unknown as {
    theme: string;
    toggleTheme: () => void;
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className={`bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded transition-colors duration-300`}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      <style jsx>{`
        button {
          transition: transform 0.3s ease-in-out;
        }
        button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default ThemeToggleButton;
