/*===========Functionality for sticky menu==========*/

window.onscroll = function() {myFunction()};
    
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

/*==================Functionality for my side menu==================*/


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

     hamburger.addEventListener("click", mobileMenu);

     function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
       }

// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
       hamburger.classList.remove("active");
       navMenu.classList.remove("active");
    }