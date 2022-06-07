const hamburgerBtn = document.getElementById("hamburger");
const navList = document.getElementById("navList");

function toggleBtn() {
    navList.classList.toggle("show");
}

hamburgerBtn.addEventListener("click", toggleBtn);