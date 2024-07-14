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

/*===================Functionality for my home module=================*/

let hello = document.getElementById('hello');

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            hello.style.marginBottom = value * 1.56 + 'px';
        });

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

const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible",'true');
        navToggle.setAttribute('aria-expanded', 'true');
        } else if (visibility === "true") {
            primaryNav.setAttribute("data-visible", 'false');
            navToggle.setAttribute('aria-expanded', 'false');
        }
})
