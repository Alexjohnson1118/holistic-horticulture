document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // services dropdown — click/tap to open, works the same on desktop and mobile
  document.querySelectorAll(".nav-dropdown-toggle").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var parent = this.closest(".nav-dropdown");
      var wasOpen = parent.classList.contains("open");
      document.querySelectorAll(".nav-dropdown.open").forEach(function (d) {
        d.classList.remove("open");
        d.querySelector(".nav-dropdown-toggle").setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        parent.classList.add("open");
        this.setAttribute("aria-expanded", "true");
      }
    });
  });
  document.addEventListener("click", function () {
    document.querySelectorAll(".nav-dropdown.open").forEach(function (d) {
      d.classList.remove("open");
      d.querySelector(".nav-dropdown-toggle").setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".nav-dropdown.open").forEach(function (d) { d.classList.remove("open"); });
    }
  });

  // simple contact form handler — no backend wired up yet, just a
  // friendly confirmation so the form can be demoed before an inbox
  // / form service (e.g. Formspree) is connected.
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      var original = btn.textContent;
      btn.textContent = "Message sent ✦";
      btn.disabled = true;
      form.reset();
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
      }, 3200);
    });
  }
});
