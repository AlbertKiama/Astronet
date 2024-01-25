let hello = document.getElementById('hello');

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            hello.style.marginBottom = value * 1.56 + 'px';
        });

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
