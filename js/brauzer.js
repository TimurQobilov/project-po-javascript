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

/////////////////////////////////////////////////////////////

const numberofFilms = +prompt('Сколько фильмов ва уже посмотрели', '');

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
///////////////////////////////////////////////////////////////////////
// let count = 0;

// while (count < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько вы его оцените?', '');
//     console.log(count);
//     count++;
// }                                           Первый цыкл                 
////////////////////////////////////////////////////////////////////////

// let count = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько вы его оцените?', '');
//     console.log(count);
//     count++;

// }
// while(count < 2);                                Второй цыкл
                                                
////////////////////////////////////////////////////////////////////////
for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько вы оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies [a] = b;
        console.log('done');
    } else {
        console.log('Error');
        i--;
    }

}                                             //Третий цыкл
////////////////////////////////////////////////////////////////////////

if (personalMovieDB.count < 10){
    console.log('Просмотрено давольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы класический зритель');
} else if (personalMovieDB.count >=30){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);

//////////////////////////////////////////////////////////////