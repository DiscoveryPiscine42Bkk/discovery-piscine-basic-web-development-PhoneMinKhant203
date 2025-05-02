// Menu Bar Transaction
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// About Section Slide Button
function showSlide(n) {
  const slides = document.querySelectorAll(".info-slide");
  slides.forEach((slide, index) => {
    slide.classList.toggle("hidden", index !== n - 1);
  });
}