
document.addEventListener("DOMContentLoaded", function () {
    const themeSelector = document.getElementById("theme-selector");
    const themeStyle = document.getElementById("theme-style");

       // Verifica si hay un tema guardado en localStorage y aplícalo
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        themeStyle.setAttribute("href", savedTheme);
        themeSelector.value = savedTheme;
    }

    // Evento para cambiar el tema cuando el usuario selecciona una opción
    themeSelector.addEventListener("change", function () {
        const selectedTheme = this.value;
        themeStyle.setAttribute("href", selectedTheme);

        // Guarda el tema seleccionado en localStorage para que se mantenga al recargar la página
        localStorage.setItem("selectedTheme", selectedTheme);
    });
});
