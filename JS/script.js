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

/*===========Functionality for Testimonials==========*/       


var dot = document.getElementsByClassName("dot");
var slide = document.getElementById("slide");

        dot[0].onclick = function(){
            slide.style.transform = "translateX(0px)";
            for(i=0;i<4;i++){
                dot[i].classList.remove("active");
            }
            this.classList.add("active");
        }
        dot[1].onclick = function(){
            slide.style.transform = "translateX(-900px)";
            for(i=0;i<4;i++){
                dot[i].classList.remove("active");
            }
            this.classList.add("active");
        }
        dot[2].onclick = function(){
            slide.style.transform = "translateX(-1800px)";
            for(i=0;i<4;i++){
                dot[i].classList.remove("active");
            }
            this.classList.add("active");
        }
        dot[3].onclick = function(){
            slide.style.transform = "translateX(-2700px)";
            for(i=0;i<4;i++){
                dot[i].classList.remove("active");
            }
            this.classList.add("active");
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