const iconEl = document.querySelector(".icon-hamburger");
const navEl = document.querySelector(".nav");

iconEl.addEventListener("click", function (e) {
  if (e.target.closest(".icon-hamburger")) {
    navEl.classList.toggle("hidden");
  }
});
