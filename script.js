
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const menuOverlay = document.getElementById("menuOverlay");
const navLinks = document.querySelectorAll(".nav-link");

function openMenu() {
    navMenu.classList.add("active");
    menuOverlay.classList.add("active");
    menuToggle.classList.add("open");

    document.body.classList.add("menu-open");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Menüyü kapat");
}

function closeMenu() {
    navMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    menuToggle.classList.remove("open");

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Menüyü aç");
}

menuToggle.addEventListener("click", function () {
    if (navMenu.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Menü bağlantısına basılınca kapat.
navLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

// Menü dışına basılınca kapat.
menuOverlay.addEventListener("click", closeMenu);

// Escape tuşuyla kapat.
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});
