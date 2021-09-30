/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      ganre = poster.querySelector('.promo__genre'),
      moviList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();            //удалил рекламу через функцию
});

ganre.textContent = 'драма';                           //изменил жанар 
poster.style.backgroundImage = 'url("img/bg.jpg")';   //изменил фон сайта 

// moviList.forEach(item => {
//     item.remove();           //удалил через функцию не нужный текст через селектор querySelectorAll
// });
moviList.innerHTML = "";      //очистил текст замениф пустой строкой

movieDB.movies.sort();      //сортировка по алфавиту

// console.log(poster.innerHTML);   //можно получить таким способом код html в консоле браузера

movieDB.movies.forEach((fims, i) => {            //поменял текст на сайте заменив эго 
    moviList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${fims}
            <div class="delete"></div>
        </li>
    `;
});

////////////////////////////////////////////////////////////////////////////





