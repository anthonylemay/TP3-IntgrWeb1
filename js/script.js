const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const header = document.querySelector('header');
const today = new Date().toISOString().slice(0, 10);

if (window.location.pathname === '/reservation.html') {
document.getElementById('reserveDate').setAttribute("min", today);
}

hamburger.addEventListener("click", mobileMenu);


function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

}

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.style.backgroundColor = '#ffffff';
  } else {
    header.style.backgroundColor = '#E9E0CA';
  }
});