const root = document.documentElement;
    document.getElementById("themeToggle").addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    });
    