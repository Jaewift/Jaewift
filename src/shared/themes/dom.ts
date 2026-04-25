import type { Theme } from "./types";

const THEME_CHANGE_EVENT = "theme-change";

export const getSystemTheme = (): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const getStoredTheme = (): Theme | null => {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return null;
};

export const resolveInitialTheme = (): Theme => getStoredTheme() ?? getSystemTheme();

export const getCurrentTheme = (): Theme | null => {
  const current = document.documentElement.dataset.theme;
  if (current === "dark" || current === "light") return current;
  return null;
};

export const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
};

export const subscribeThemeChange = (callback: () => void) => {
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, callback);
};

export const toggleTheme = () => {
  const base = getCurrentTheme() ?? resolveInitialTheme();
  const next: Theme = base === "dark" ? "light" : "dark";
  applyTheme(next);
};
