export const ThemeSetter = () => {
  const themeScript = `(function(){try{var s=localStorage.getItem("theme");var m=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";var t=s==="dark"||s==="light"?s:m;document.documentElement.dataset.theme=t;}catch(e){}})();`;

  return (
    <script id="theme" dangerouslySetInnerHTML={{ __html: themeScript }} />
  );
};
