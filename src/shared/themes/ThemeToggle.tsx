"use client";

import { useTheme } from "./useTheme";
import { toggleTheme } from "./dom";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const theme = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 bg-surface px-4 py-2 text-sm font-medium text-text cursor-pointer rounded-full"
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
    >
      {isDark ? <Moon size={14} /> : <Sun size={14} />}
      {isDark ? "Dark" : "Light"}
    </button>
  );
};
