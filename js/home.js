// toggle active class to faq 
let arrowFaq = document.querySelectorAll(".faq-detalis li i")
let detalisContainer = document.querySelectorAll(".faq-detalis li");

detalisContainer.forEach(li=> {
    li.addEventListener("click", ()=> {
        li.classList.toggle("active")
    })
})

// add border to header on scroll 
let header = document.querySelector(".header");
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 590) {
        header.classList.add("scroll")
    }else  {
        header.classList.remove("scroll");
    }
})

// Open Close Menu 
let menuIcon = document.querySelector(".menu-icon"),
closeMenu = document.querySelector(".close-menu"),
ulLinks = document.querySelector("ul.links"),
liLinks = document.querySelectorAll("ul.links li a");

menuIcon.addEventListener("click", () => ulLinks.classList.add("open"))
closeMenu.addEventListener("click", () => ulLinks.classList.remove("open"))
liLinks.forEach(li => {
    li.addEventListener("click", () => ulLinks.classList.remove("open"))
})
// Start Slider
let carousel = document.querySelector(".carousel"),
firsetWidth = carousel.querySelector(".card").offsetWidth,
iconArrow = document.querySelectorAll(".elementor .wrapper .icon i"),
 isDragging = false,
    startX,
    startScrollLeft;

iconArrow.forEach(arrow => {
    arrow.addEventListener("click", () => {
        carousel.scrollLeft += arrow.id === "left-arrow" ? -firsetWidth :  firsetWidth ;
    })
})

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };
  
  const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  };
  
  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };
  
  carousel.addEventListener("mousemove", dragging);
  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mouseup", dragStop);


// slide When Keyup 
  let arrowRight = document.getElementById("right-arrow"),
  arrowLeft = document.getElementById("left-arrow");
  document.addEventListener("keyup", function (e) {
    if (e.key === "ArrowRight") {
        arrowRight.click()
    }
    else if (e.key === "ArrowLeft") {
        arrowLeft.click()
    }
  })