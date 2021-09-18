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


const numberofFilms = +prompt('Сколько фильмов вы уже мосмотрели?', '');

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных филмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
