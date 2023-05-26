(function getTheme() {
    const theme = localStorage.getItem("theme");
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
})();

