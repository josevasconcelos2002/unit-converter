document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("themeSelect");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(`${savedTheme}-mode`);
        select.value = savedTheme;
    }

    select.addEventListener("change", (e) => {
        const theme = e.target.value;

        body.classList.remove("dark-mode", "pink-mode");

        if (theme === "dark") body.classList.add("dark-mode");
        if (theme === "pink") body.classList.add("pink-mode");

        localStorage.setItem("theme", theme);
    });
});
