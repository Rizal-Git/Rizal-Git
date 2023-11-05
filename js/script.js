// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Coffee Menu di Klik
document.querySelector("#coffee-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik Diluar Sidebar untuk Menghilangkan Nav
const Coffee = document.querySelector("#coffee-menu");

document.addEventListener("click", function (e) {
  if (!Coffee.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
