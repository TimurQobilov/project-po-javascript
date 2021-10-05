/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {                   //скрипт заработает после поной подгрузки сайта
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
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();                                                        //отменяет стандартное поведение браузера он не будет перезагружатся
        
        let newFilm = addInput.value;                                                //здесь отображается веденый новый фильм
        const favorite = checkbox.checked;                                              //здесь чекбокс отмечен или не отмечен

       if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            
            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);                                                   //веденный фильм поподает в базу 
            sortArr(movieDB.movies);                                                         //сортировка базы даных 
            
            createMovieList(movieDB.movies, movieList);
       }

        event.target.reset();                                                           //сброс формы очистика

    });
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();            //удалил рекламу через функцию
        });
    };
    deleteAdv(adv);
    
    const makeChanges = () => {
        ganre.textContent = 'драма';                           //изменил жанар 
    poster.style.backgroundImage = 'url("img/bg.jpg")';   //изменил фон сайта 
    };
    makeChanges();
    
    // moviList.forEach(item => {
    //     item.remove();           //удалил через функцию не нужный текст через селектор querySelectorAll
    // });
   
    const sortArr = arr => {
        arr.sort();
    }; 
    sortArr(movieDB.movies);


    // movieDB.movies.sort();      //сортировка по алфавиту

    function createMovieList(films, parent) {
        parent.innerHTML = "";      //очистил текст замениф пустой строкой
        sortArr(films);             //сортировка после удаления 

        
        // console.log(poster.innerHTML);   //можно получить таким способом код html в консоле браузера
        
        films.forEach((fims, i) => {            //поменял текст на сайте заменив эго 
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${fims}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });

    }

    createMovieList(movieDB.movies, movieList);



});

/////////////////////////////////////////////////////////////////////////////////





