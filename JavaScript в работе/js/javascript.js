// const timerId = setTimeout(function () {                //запустится анимация через 2 секунды
//     console.log('Timur');                   
// }, 2000);

// const timerId = setTimeout(function (text) {                //запустится анимация через 2 секунды
//     console.log(text);                   
// }, 2000, 'Timur');

// const timerId = setTimeout(logger, 2000);             //запустится анимация через 2 секунды
// function logger () {
//     console.log('Timur');
// }

// setTimeout(logger, 2000);                                    //запустится анимация через 2 секунды
// function logger () {
//     console.log('Timur');
// }

// const timerId = setTimeout(logger, 2000);             //запустится анимация через 2 секунды

// clearInterval(timerId);                               //здесь останавливается анимация 
// function logger () {
//     console.log('Timur');
// }

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);             //запустится анимация через 2 секунды после нажатия на кнопку 
//     const timerId = setInterval(logger, 2000);
// });

// // clearInterval(timerId);

// function logger () {
//     console.log('Timur');
// }

// const btn = document.querySelector('.btn');             
// let timerId;
// btn.addEventListener('click', () => {
//     timerId = setTimeout(logger, 2000);             //запустится анимация через 2 секунды после клика на кнопку 
// });

// clearInterval(timerId);

// function logger () {
//     console.log('Timur');
// }

// const btn = document.querySelector('.btn');             
// let timerId,
//     i = 0;
// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500);             //запустится анимация через 0.5 секунды после клика на кнопку 
// });

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('Timur');
//     i++;
// }               

// const btn = document.querySelector('.btn');             
// let timerId,
//     i = 0;
// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500);             //запустится анимация через 0.5 секунды после клика на кнопку 
// });

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('Timur');
//     i++;
// }   

// let id = setTimeout(function log () {
//     console.log('Hello');
//     id = setTimeout (log, 500);
// }, 500); 


// const btn = document.querySelector('.btn');             
// let timerId,
//     i = 0;
// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500);             //запустится анимация через 0.5 секунды после клика на кнопку 
// });

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('Timur');
//     i++;
// }   

// let id = setTimeout(function log () {
//     console.log('Hello');
//     id = setTimeout (log, 500);
// }, 500); 


const btn = document.querySelector('.btn');             
let timerId,
    i = 0;

 
function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;
    

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
    
} 
btn.addEventListener('click', myAnimation);


