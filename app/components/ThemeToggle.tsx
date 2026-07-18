"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  console.log("✅ ThemeToggle rendered");

  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    console.log("📦 Loading saved theme...");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      console.log("🌙 Dark theme found in localStorage");
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      console.log("☀️ Light theme found in localStorage");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Apply theme
  useEffect(() => {
    console.log("🎨 Applying theme:", darkMode ? "Dark" : "Light");

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    console.log(
      "Current <html> classes:",
      document.documentElement.className
    );
  }, [darkMode]);

  return (
  <button className="theme-toggle">
    THIS IS MY BUTTON
  </button>
);
}