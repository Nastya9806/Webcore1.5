const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
      
  //  },
  spaceBetween: 10,
  slidesPerView: "auto",
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});

const slides = document.querySelectorAll("swiper-slide");
const slide = document.querySelectorAll(".swiper-slide--readmore");
const btnOpen =  document.querySelector(".expand__read-more");
const btnClose = document.querySelector(".expand__read-less");
let btnsChange = document.querySelectorAll(".swiper__image--back");

let hiddenSlides;
let openSlides;
let middleWidth = false;
let maxWidth = false;


window.addEventListener("resize", function() {
if (window.matchMedia("(min-width: 768px)").matches) {
    console.log("ШРЕК ЛУЧШИЙ");
    for(let i = 0; i < slide.length; i++){
      hiddenSlides = slide[i].classList.add("swiper-slide--hidden");
      }
    middleWidth = true;
} 

});

window.addEventListener("resize", function() {
if (window.matchMedia("(min-width: 1100px)").matches) {
    console.log("GIIIRLS HIIII");
    for(let i = 0; i < 2; i++){
     hiddenSlides = slide[i].classList.toggle("swiper-slide--hidden");
}
maxWidth = true; 
return maxWidth;
}
});


function showMore(){
  btnOpen.classList.remove("expand--active");
  btnClose.classList.add("expand--active");
  for(let i = 0; i < slide.length; i ++){
      slide[i].classList.remove("swiper-slide--hidden");
      openSlides = slide[i].classList.add("swiper-slide--show");
    }
  return openSlides;
}



function closeInf(){
  btnClose.classList.remove("expand--active");
  btnOpen.classList.add("expand--active");
  if(maxWidth){
    for(let i = 2; i < slide.length; i++){
      slide[i].classList.remove("swiper-slide--show");
      slide[i].classList.add("swiper-slide--hidden");
    }
  } else if(!maxWidth){
    for(let i = 0; i < slide.length; i++){
      slide[i].classList.remove("swiper-slide--show");
      slide[i].classList.add("swiper-slide--hidden");
    }
  }

}

btnOpen.addEventListener("click", showMore);
btnClose.addEventListener("click", closeInf);
