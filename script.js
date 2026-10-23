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

  // soft, smooth scroll-reveal for key content blocks — cards, pricing,
  // section intros, feature images etc. fade + drift up into place as
  // they enter the viewport. Respects prefers-reduced-motion via CSS.
  var revealSelectors = [
    ".section-head", ".card", ".price-card", ".feature-text",
    ".feature-row > .photo", ".feature-row > .tarot-frame",
    ".service-hub-card", ".value", ".step", ".ba-pair",
    ".coach-card", ".pull-quote", ".aside-note", ".gallery-grid > .photo"
  ].join(", ");
  var revealEls = document.querySelectorAll(revealSelectors);
  var revealCounters = new Map();
  revealEls.forEach(function (el) {
    el.classList.add("reveal-up");
    var parent = el.parentElement;
    var i = revealCounters.get(parent) || 0;
    el.style.setProperty("--reveal-i", i % 4);
    revealCounters.set(parent, i + 1);
  });
  if ("IntersectionObserver" in window) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
    revealEls.forEach(function (el) { revealIO.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  // Contact form — no backend/form service connected, so this builds a
  // pre-filled mailto: to the business inbox and hands off to the
  // visitor's own mail app to actually send it. Works with zero setup;
  // swap for a service like Formspree later for a fully silent submit.
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var interest = form.interest.value;
      var message = form.message.value.trim();

      var subject = "Enquiry from " + name + " — " + interest;
      var body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Interested in: " + interest + "\n\n" +
        message;

      var mailto =
        "mailto:holistichorticultureuk@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;

      var btn = form.querySelector("button[type=submit]");
      var original = btn.textContent;
      btn.textContent = "Opening your email app ✦";
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
        form.reset();
      }, 3200);
    });
  }
});
