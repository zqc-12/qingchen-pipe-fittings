/* QINGCHEN METAL — Main JS */
(function() {
  "use strict";

  // ─── Mobile Nav ────────────────────────────────────────────
  var navToggle = document.getElementById("navToggle");
  var navList = document.getElementById("navList");
  if (navToggle && navList) {
    navToggle.addEventListener("click", function() {
      navToggle.classList.toggle("open");
      navList.classList.toggle("open");
    });
  }

  // ─── Header shadow ──────────────────────────────────────────
  var header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", function() {
      header.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });
  }

  // ─── Back to top ─────────────────────────────────────────────
  var backBtn = document.createElement("button");
  backBtn.className = "back-to-top"; backBtn.innerHTML = "↑";
  backBtn.setAttribute("aria-label", "Back to top");
  document.body.appendChild(backBtn);
  window.addEventListener("scroll", function() {
    backBtn.classList.toggle("show", window.scrollY > 400);
  }, { passive: true });
  backBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ─── AOS Scroll Animation ─────────────────────────────────
  var aosElements = document.querySelectorAll("[data-aos]");
  var aosObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var parent = entry.target.closest("[data-stagger]");
        if (parent) {
          var children = Array.from(parent.querySelectorAll("[data-aos]"));
          var idx = children.indexOf(entry.target);
          entry.target.style.setProperty("--i", idx);
        }
        entry.target.classList.add("aos-visible");
        aosObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
  aosElements.forEach(function(el) { aosObserver.observe(el); });

  // ─── Language Toggle ────────────────────────────────────────
  var langBtn = document.getElementById("langToggle");
  if (langBtn) {
    var currentLang = localStorage.getItem("site_lang") || "en";
    applyLang(currentLang);
    langBtn.addEventListener("click", function() {
      currentLang = currentLang === "cn" ? "en" : "cn";
      localStorage.setItem("site_lang", currentLang);
      applyLang(currentLang);
    });
  }
  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang === "cn" ? "zh-CN" : "en");
    if (langBtn) langBtn.textContent = lang === "cn" ? "EN" : "中文";
  }

  // ─── Parallax mouse effect on hero ────────────────────────
  var hero = document.querySelector(".hero");
  if (hero) {
    document.addEventListener("mousemove", function(e) {
      if (window.innerWidth > 768) {
        var x = (e.clientX / window.innerWidth - 0.5) * 10;
        var y = (e.clientY / window.innerHeight - 0.5) * 10;
        hero.style.setProperty("--mouse-x", x + "px");
        hero.style.setProperty("--mouse-y", y + "px");
      }
    }, { passive: true });
  }

  console.log("QingChen Metal — ready");
})();
