const parent = document.querySelector(".parent");
const navLink = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

parent.addEventListener("click", () => {
    navLink.classList.toggle("open");
});