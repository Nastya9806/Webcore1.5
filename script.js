let slider = null;
function sliderInit(){
  if(!slider){
    slider = new Swiper('.swiper', {
      direction: 'horizontal',
      spaceBetween: 10,
      slidesPerView: "auto",
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
    });
  }
}

function sliderDestroy() {
  if(slider){
    slider.destroy();
    slider = null;
  }
}

window.addEventListener("resize", function(){
if(window.matchMedia("(max-width: 760px)").matches){
  sliderInit();
  console.log("я должен работаьь");
} else{
  sliderDestroy();
  console.log("я НЕ должен работаьь");
}

});

const slides = document.querySelectorAll(".swiper-slide");
const btn = document.querySelector(".expand");
const mediaQuery = window.matchMedia("(min-width: 976px)");

function buttonChange(){
  if(btn.innerHTML == "Показать всё"){
   btn.innerHTML = "Скрыть";
   btn.classList.add("expand--down");
   btn.classList.remove("expand--on");
  } else{
    btn.innerHTML = "Показать всё";
   btn.classList.add("expand--on");
   btn.classList.remove("expand--down");
  }
}

function showSlides(){
  if(btn.innerHTML == "Показать всё"){
    slides.forEach(item => {
      item.style.display = "none" ? item.style.display = "flex" : "";
    });
  }
}

function closeSlidesMiddle(){
  for(let i = 6; i < slides.length; i++){
    slides[i].style.display = "flex" ? slides[i].style.display = "none" : "";
  }
  buttonChange();
}

function closeSlidesHuge(){
  for(let i = 8; i < slides.length; i++){
    slides[i].style.display = "flex" ? slides[i].style.display = "none" : "";
  }
  buttonChange();
}

function govno(){
  if(btn.innerHTML == "Показать всё"){
    slides.forEach(item => {
      item.style.display = "none" ? item.style.display = "flex" : "";
    });
    buttonChange();
  } else{
    mediaQuery.matches ? closeSlidesHuge() : closeSlidesMiddle();
  }
}

btn.addEventListener("click", govno);


