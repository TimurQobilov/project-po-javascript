"use strict";

const box = document.getElementById('box'),         
      btns = document.getElementsByTagName('button'),  
      circles = document.getElementsByClassName('circle'),   
      hearts = document.querySelectorAll('.heart'),               
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
// box.style.backgroundColor = '#222';
// box.style.width = '415px';
// box.style.height = '400px';
box.style.cssText = `background-color: #111; width: 500px`;

btns[2].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'green';
circles[1].style.backgroundColor = 'yellow';
circles[2].style.backgroundColor = 'red';


// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }
hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});
 

const div = document.createElement('div');                                  //это элемент он на странице не появитса 
const text = document.createTextNode('Туд был я');                          //это элемент он появитса на странице 


div.classList.add('black');
// document.body.append(div);                                                 //в родителя body внизу добавили div
// div.style.cssText = `background-color: #456; height: 500px`;
// document.querySelector('.wrapper').append(div);                               //вставил div в под селектор wrapper                           
// div.style.cssText = `background-color: #852; width: 500px`;
//wrapper.prepend(div);                                                          //перенес перед селектором

wrapper.append(div);                                                            //перенес после селектора 
// wrapper.appendChild(div);                                                          //перенес после селектора                                      

// hearts[0].before(div);                                                        //перед элементом бефор
// hearts[0].after(div);                                                         //после элемента афтер
// wrapper.insertBefore(div, hearts[0]);                                            //перенес элемент на первый hearts(старая версия афтер бефор)  

// circles[0].remove();                                                             //удалит первый элемент 
// wrapper.removeChild(hearts[1]);                                                     //старая версидя удаления с индексом                                 

// hearts[0].replaceWith(circles[0]);                                               //современный код один элемент заменить другим 
// wrapper.replaceChild(circles[0], hearts[0]);                                        //замена элемента старая версия работаем с тримя оргументами                                              

div.innerHTML = "<h1>Timur</h1>";                                                  //так можно размешать html структуру в коде
div.insertAdjacentHTML("beforebegin", '<h2>Timurs</h2>');      //beforebegin = перед элементом || afterbegin = в начало элемента || beforeend = перед концом элемента afterend = вставляет после элемента                                                                                                                      

// div.textContent = "Timur";                                                             //так можно размещать текст в коде          










