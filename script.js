/*const menuOpenButton=document.querySelector(#menu-open-button);  
    
menuOpenButton.addEventListener("click",()=>{
	
	
	document.body.classList.toggle("show-mobile-menu");
});*/

const navLinks= document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton=document.querySelector("#menu-open-button");  
const menuCloseButton=document.querySelector("#menu-close-button");    
menuOpenButton.addEventListener("click",()=>{
	/*toggle mobile menu visibility*/
	
	document.body.classList.toggle("show-mobile-menu");
});

/*close menu when the close button is clicked*/
menuCloseButton.addEventListener("click",()=> menuOpenButton.click());
 
 
 /*close menu when the nav link is clicked*/
navLinks.forEach(link =>{
link.addEventListener("click",()=>menuOpenButton.click());
}) 

/*initialize*/
const swiper = new Swiper('.slider-wrapper', {

  loop: true,
 
  spaceBetween:25,

 
  pagination: {
    el: '.swiper-pagination',
	clickable:true,
	dynamicBullets:true,
  },

 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
//Responsiveness Breakpoint
breakpoints:{
0:{slidesPerView:1},
768:{slidesPerView:2},
1024:{slidesPerView:3}
}

});