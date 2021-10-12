"use strict";

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth;             //получил  внутреная ширину
// const height = box.clientHeight;           //получил внутреная высоту
// const width = box.offsettWidth;               //получил наружную ширину
// const height = box.offsettHeight;             //получил наружную высоту
const width = box.scrollWidth;                   //получил ширину 
const height = box.scrollHeight; 

console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());                //получили кординаты страницы

const style = window.getComputedStyle(box);
console.log(style);

