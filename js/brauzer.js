"use strict";
// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);  

// const answers = [];

// answers[0] = prompt('Как ваше имя', '');
// answers[1] = prompt('Как ваше фамилия', '');
// answers[2] = prompt('Сколько вам лет', '');

// document.write(answers);

//////////////////////////////////////

// const user = "Timur";
// alert(`Привет, ${user}`);

//////////////////////////////

// const numberofFilms = +prompt('Сколько филмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberofFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies [a] = b;
// personalMovieDB.movies [c] = d;
    
// console.log(personalMovieDB);

////////////////////////////////////////////////////////////////////

// let count = 0;

// while (count < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько вы его оцените?', '');
//     console.log(count);
//     count++;
// }                                           Первый цыкл                 


// let count = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько вы его оцените?', '');
//     console.log(count);
//     count++;

// }
// while(count < 2);                                Второй цыкл

/////////////////////////////////////////////////////////////////////////////////////////////

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt('Сколько фильмов ва уже посмотрели', '');
        }
    },
    rememberMyFilms: function() {       
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),        //Третий цыкл
              b = prompt('На сколько вы оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies [a] = b;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
    }    

},
        detectPersonalLevel:function () {
        if (personalMovieDB.count < 10){
            console.log('Просмотрено давольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы класический зритель');
        } else if (personalMovieDB.count >=30){
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
        showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
        writeYourGenres: function() {
    for (let i = 1; i <= 3; i++){
        let genre = prompt(`Ваш любимый жанр по номером ${i}`);

        if (genre === '' || genre == null) {
            console.log('Вы ввули некоректные данные или не ввели их вовше');
            i--;
        } else{
            personalMovieDB.genres[i - 1] = genre;

        }

        } 

        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i + 1} - это ${item}`);

        });
    } 

};

///////////////////////////////////////////////////////////////////

const str =  prompt("", "");
const products = str.split(", ");                                       //разделили ту строку которую вели
products.sort();                                                        //сортирует елементы по альфавиту
console.log(products.join(';'));                                        //склейл обратно в троку масив с точка запитой

//////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////

// const btn =  document.querySelector('button');
// btn.onclick = function() {                                   //если повторить это свойства оно заменить его 
//     alert('Timur');
// };

// btn.addEventListener('click', () => {
//     alert('Timur');                                             //прописал через кол бэк функцию его можно переписывать для нескольких действии
// });

// btn.addEventListener('click', () =>{
//     alert('Timurs');                                            //оно добавляется в очерет от других событи               
// });

// btn.addEventListener('mouseenter', (event) => {                      // (event)  может следить за кардинатами этого элемента
//     console.log(event);
//     console.log(event.target);                                         //получает тот элемент при наведени  
//     e.target.remove();                                             //удолает полученый элемент при наведени                         
//     console.log('Hover');                                       //следить за мышкой при наведении на обект 
// });

// const deleteElement = (e) => {
//     e.target.remove();
// };
// btns.addEventListener('click', deleteElement);                      //удалится этот элемент после нажатия на него             

// const link = document.querySelector('a');
// link.addEventListener('click', function(event){
//     event.preventDefault();

//     console.log(event.target);
// });

const btns = document.querySelectorAll('button');
const deleteElement = (e) => {
    e.target.remove();
};                                                                     //одним кодом назначил функцию  на несколько элементов 
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});

////////////////////////////////////////////////////////////////////////////////

//console.log(document.body);                                      //обрашаюсь к html тег body

// console.log(document.documentElement);                             //обращаюсь к html со всем содержимом 

//console.log(document.body.childNodes);                              //получили псевда масив всех нодов которые находятся вснутри этого родителя 

// console.log(document.body.firstChild);                                 // получения первого ребёнка родителя
// console.log(document.body.lastChild);                                 //  получения последнего  ребёнка родителя 

// console.log(document.querySelector('#current').parentNode.parentNode); 


// console.log(document.querySelector('[data-current="3"]').nextSibling);   //текствая нода следуюшего соседа


// console.log(document.querySelector('[data-current="3"]').previousSibling); //текстовая нода преведушего соседа

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);  //получаеть следушего соседа 

// console.log(document.querySelector('[data-current="3"]').previousElementSibling);  //получает преведушего соседа

// console.log(document.querySelector('#current').parentElement);  /*  */        //получает преведушего элемента 


for (let node of document.body.childNodes){
    if (node.nodeName == '#text') {
        continue;                                           //если эта нода равна #text то его остановить 
    }

    console.log(node);

}    //перебераем всех чайл нодов и избавитса от всех текстовых нодов полусаем их текстовых свойсть или названи 
