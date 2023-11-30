// let menuIcon = document.querySelector(".menuIcon");
// let menuList = document.querySelector(".menuList");
// menuIcon.addEventListener("click", function () {
//     menuList.classList.toggle("show");
// });
const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".menuList");

menuIcon.addEventListener("click", mobileMenu);

function mobileMenu() {
    menuIcon.classList.toggle("active");
    menuList.classList.toggle("show");
}