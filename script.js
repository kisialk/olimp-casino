(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var burger = document.querySelector(".burger");
    var panel = document.querySelector("#mobile-menu-panel");
    if (!burger || !panel) return;

    function setOpen(open) {
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      panel.classList.toggle("is-open", open);
      panel.setAttribute("aria-hidden", open ? "false" : "true");
    }

    function close() {
      setOpen(false);
    }

    burger.addEventListener("click", function () {
      var expanded = burger.getAttribute("aria-expanded") === "true";
      setOpen(!expanded);
    });

    document.addEventListener("click", function (e) {
      if (!panel.classList.contains("is-open")) return;
      var t = e.target;
      if (burger.contains(t) || panel.contains(t)) return;
      close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        close();
      });
    });
  });
})();
