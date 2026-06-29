const body = document.body;
const navToggle = document.querySelector("[data-nav-toggle]");
const contactForm = document.querySelector("[data-contact-form]");
const categoryButtons = document.querySelectorAll("[data-filter]");
const filterItems = document.querySelectorAll("[data-category]");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    categoryButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
      item.setAttribute("aria-current", String(item === button));
    });

    filterItems.forEach((item) => {
      const matches = filter === "all" || item.dataset.category === filter;
      item.hidden = !matches;
    });
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = contactForm.querySelector("[data-form-status]");
    const email = contactForm.querySelector("#email");

    if (!email.value.includes("@")) {
      status.textContent = "Please add a valid email address so a reply can reach you.";
      return;
    }

    status.textContent = "Thanks, your message has been received. You will hear back at the email you provided.";
    contactForm.reset();
  });
}
