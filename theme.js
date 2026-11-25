// Sets the colour theme before the page paints, so there is no light/dark flash.
// Order: the visitor's saved choice, then the operating system preference, then light.
(function () {
  var saved = null;
  try {
    saved = window.localStorage.getItem("theme");
  } catch (error) {
    saved = null;
  }
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = saved === "dark" || saved === "light" ? saved : prefersDark ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  // marks that JavaScript works, so the scroll animations only hide content when they can also reveal it
  document.documentElement.classList.add("js");
})();
