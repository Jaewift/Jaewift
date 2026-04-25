export const initTheme = () => {
  try {
    const stored = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    const theme = stored === "dark" || stored === "light" ? stored : system;

    document.documentElement.dataset.theme = theme;
    return theme;
  } catch {}
};
