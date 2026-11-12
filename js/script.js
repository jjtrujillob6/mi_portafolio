
document.addEventListener("DOMContentLoaded", () => {

    // Seleccionar los elementos del menú
    const menuButton = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    // Abrir y cerrar el menú
    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const menuAbierto = navLinks.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            menuAbierto
        );

        menuButton.textContent = menuAbierto ? "✕" : "☰";

    });

    // Cerrar el menú al seleccionar una sección
    const enlaces = navLinks.querySelectorAll("a");

    enlaces.forEach((enlace) => {

        enlace.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.textContent = "☰";

        });

    });

    // Actualizar automáticamente el año
    document.getElementById("year").textContent =
        new Date().getFullYear();

    console.log("Portafolio cargado correctamente.");

});
