(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");
  const admissionForm = document.querySelector("#admission-form");
  const formMessage = document.querySelector("#formMsg");

  function closeMenu() {
    if (!menuButton || !navigation) return;
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.textContent = "☰";
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      menuButton.textContent = isOpen ? "×" : "☰";
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 821px)").matches) closeMenu();
    });
  }

  if (admissionForm && formMessage) {
    admissionForm.addEventListener("submit", (event) => {
      event.preventDefault();
      formMessage.textContent =
        "Thanks! This demo form does not send data yet. Connect a backend or email service to receive enquiries.";
      admissionForm.reset();
    });
  }

  // Update the footer year automatically.
  const copyright = document.querySelector(".copyright");
  if (copyright) {
    copyright.innerHTML = copyright.innerHTML.replace(/©\s*\d{4}/, `© ${new Date().getFullYear()}`);
  }
})();
