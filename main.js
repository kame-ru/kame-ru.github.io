'use strict'
{
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const ul = document.querySelector('.container>ul');
const slides = ul.children;
let currentIndex = 0;
function moveSlides(){
  const slideWidth = slides[0].getBoundingClientRect().width;
  ul.style.transform=`translateX(${-1 * slideWidth * currentIndex }px)`
}

function updateButton(){
  prev.classList.remove(`hidden`);
  next.classList.remove(`hidden`);
  if(currentIndex === 0){
    prev.classList.add(`hidden`);
  }
  if(currentIndex === slides.length - 1){
    next.classList.add(`hidden`);
  }
}

updateButton();
next.addEventListener('click', ()=>{
  currentIndex++;
  updateButton();
  moveSlides();
});
prev.addEventListener('click', ()=>{
  currentIndex--;
  updateButton();
  moveSlides();
});
}