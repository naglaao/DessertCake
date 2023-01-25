let search =document.querySelector(".search");
document.querySelector('#search').onclick=()=>{
    search.classList.toggle("active");
    
}
let navbar =document.querySelector(".navbar");
document.querySelector('#menu').onclick=()=>{
    navbar.classList.toggle("active");

}
//  Initialize Swiper 
  var swiper = new Swiper(".product-row", {
     spaceBetween: 30,
     loop:true,
     centeredSlides:true,
     autoplay:{
        delay:9500,
        disableOnInteraction:false,
     },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
       },
      768: {
        slidesPerView: 2,
       },
      1024: {
        slidesPerView: 3,
       },
    },
  });