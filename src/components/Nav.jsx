import React from "react";

function Nav() {
  const handleDarkClick = () => {
    window.document.documentElement.classList.remove("light");
    window.document.documentElement.classList.add("dark");
  };
  const handleLightClick = () => {
    window.document.documentElement.classList.remove("dark");
    window.document.documentElement.classList.add("light");
  };
  const handleSystemClick = () => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
      window.document.documentElement.classList.remove("light", "dark");
      window.document.documentElement.classList.add(systemTheme);
  };
  return (
    <div class="bg-gray-100 dark:bg-gray-800 p-4">
      <nav class="flex justify-between items-center">
        <h1 class="text-lg font-bold text-gray-800 dark:text-white">
          Theme Navbar
        </h1>
        <div class="flex items-center gap-4">
          <button
            id="light-btn"
            class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md dark:bg-gray-700 dark:text-white"
            onClick={handleLightClick}
          >
            Light
          </button>
          <button
            id="dark-btn"
            class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md dark:bg-gray-700 dark:text-white"
            onClick={handleDarkClick}
          >
            Dark
          </button>
          <button
            id="system-btn"
            class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md dark:bg-gray-700 dark:text-white"
            onClick={handleSystemClick}
          >
            System
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
