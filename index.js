"use stict"

const track = document.querySelector(".slide__track");
const slides = Array.from(track.children)
const leftBtn = document.querySelector(".left__btn");
const rightBtn = document.querySelector(".right__btn");
const barBtn = document.querySelector(".fa-bars")
 
 


const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((element, index) =>{
  slides[index].style.left = slideWidth * index + "px"
})

  
//  main function of slide


 const moveToSlide = (track, currentSlide, targetSlide)=>{
    track.style.transform = `translateX(-${targetSlide.style.left})`
    currentSlide.classList.remove("current__slide");
    targetSlide.classList.add("current__slide");
 }


 rightBtn.addEventListener("click", ()=>{
   const currentSlide = document.querySelector(".current__slide");
   const targetSlide = currentSlide.nextElementSibling
   moveToSlide(track, currentSlide, targetSlide)
 })

 leftBtn.addEventListener("click", ()=>{
  const currentSlide = document.querySelector(".current__slide");
  const targetSlide = currentSlide.previousElementSibling;
  moveToSlide(track, currentSlide, targetSlide)
 })



 barBtn.addEventListener("click", ()=>{
   document.querySelector(".mobile__nav").classList.toggle("show");
   document.querySelector(".logo").classList.toggle("hide");
   barBtn.classList.toggle("fa-times");
   document.querySelector(".nav").classList.toggle("white")
   document.querySelector(".cover").classList.toggle("covering")
 })



 


//  function rot13(message){
//   const array = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz".split("");
//   const arr = message.toLowerCase().split("");
//   return arr.map(item => item.replace(item, array[array.indexOf(item) + 13])).join("")
 
// }

// console.log(rot13("Grfg"));