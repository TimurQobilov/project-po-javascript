"use strict";                  //строгий современый режим 

let nuber = 5;                 //можно перезаписать 
const leftBorderWidth = 1;     // нельзя перезаписать 

nuber = 10;                    //неошибка 
// leftBorderWidth = 2;        //ошибка
console.log(nuber); 

////////////////////////////////////////////////////////////////////////
const obj = {                 //изменения константы прямых констант в js не бывает      
    a: 50
};

obj .a= 10;
console.log(obj);

///////////////////////////////////////////////////////////////////////

console.log(name);
var name = "Timur";           //устаревший вариянт переменой 

{
    let result =50;           //если написать начале var то ошибки не будет 
}
console.log(result);

////////////////////////////////////////////////////////////////////////

let number = 4.6;

console.log(4/0);                   //Infinity числовой вид данных 
console.log("string" * 9);          //NaN не число 

////////////////////////////////////////////////////////////////////

const persone = "Timur";            // "строка", 'строка', `строка` 

/////////////////////////////////////////////////////////////////////

const bool = true;                  //"true"=да, "false"=нет булиновае значение

/////////////////////////////////////////////////////////////////////

console.log(something);             //null не сушествуеший обект 

/////////////////////////////////////////////////////////////////////

let und; 
console.log(und);                   //undefined нет значения     

/////////////////////////////////////////////////////////////////////

const obj = {                        //обект                       
    name: "Timur",                   //свойства обекта 
    age: 30,
    isMarried: false
}
//console.log(obj.name);              //обрашения к свойству обекта 
console.log(obj ["name"]);            //обрашения к свойству обекта

//////////////////////////////////////////////////////////////////////
                0           1        2      3         4     //ключ масива по умолчанию 
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];     
console.log(arr[1]);                   //класический масив    

///////////////////////////////////////////////////////////////////////

const category = 'toys';                     
//console.log('https://timur.uz/' + category + '/' + '5');   //канкатенация строк 

console.log(`https://timur.uz/${category}/5`);     //интерполятция только с касыми кавычками ``

///////////////////////////////////////////////////////////////////////

alert('Hello');

const result = confirm("Are you here?");
console.log(result);

const answer = prompt("Вам есть 18?", "18");
console.log(answer);                                //вся информатция от пользователя будеть виде строки 

const answer = +prompt("Вам есть 18?", "18");
console.log(answer + 5);                            //динамическая типизатция 

const answers = [];

answers[0] = prompt('Как ваше имя', '');
answers[1] = prompt('Как ваше фамилия', '');
answers[2] = prompt('Сколько вам лет', '');

document.write(answers);

///////////////////////////////////////////////////////////////////////

const user = "Timur";
alert(`Привет, ${user}`);

/////////////////////////////////////////////////////////////////////

console.log('arr' + "-object");        //канкатенатция строки 
console.log(4 + +"5");                 //унарный плюс, плюсик ставится перед чемта 

/////////////////////////////////////////////////////////////////////

let incr = 10,                         
    decr =10;                          

incr++;                                //оператор инкримента увелечения на единицу
decr--;                                //оператор декримента уменшения на единицу 
console.log(incr);
console.log(decr);

console.log(5%2);                      //возврашает остаток деления двух чисел

console.log(2*4 == 8);                 //один раз (=) присвается два раз (==) сравнения три раз (===) строгое сравнения

////////////////////////////////////////////////////////////////////////

 &&                                 //оператор (и) работает тогда 2 или болше правдивых 
 ||                                 //оператор (или) работает тогда одно правдивый 

////////////////////////////////////////////////////////////////////////

const isChecked = true,
      isClouse = true;

console.log(isChecked && isClouse);    //сработал оператор && (и) это верно и это верно 

///////////////////////////////////////////////////////////////////////

const isChecked = true,
      isClouse = false;
console.log(isChecked || isClouse);    //сработал оператор || (или) это верно

///////////////////////////////////////////////////////////////////////

const isChecked = false,
      isClouse = false;
console.log(isClouse || !isChecked);     //сработал оператор отрицания (!)

////////////////////////////////////////////////////////////////////////

// const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberofFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько очените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');
      
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



// console.log(personalMovieDB);

///////////////////////////////////////////////////////////////////

if (4 == 9) {
    console.log('ok!')
}   else {
    console.log('Error');
}

///////////////////////////////////////////////////////////////////////

const num = 50;

if (num < 49){
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error');  //Тернарный оператор 

///////////////////////////////////////////////////////////////////////

4 + 4    //Бинарный оргумент 
+'4';     //Унарный оргумент 

////////////////////////////////////////////////////////////////////////

const num = 50;

switch (num) {
    case 49:
        console.log('Не верно');
        break;
    case 100:
        console.log('Не верно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}

//////////////////////////////////////////////////////////////////////////

let num = 50;

while (num <= 55) {
    console.log(num);                             
    num++;                                       //первый цикл
}

/////////////////////////////////////////////////////////////////////

let numm = 50;
do {
    console.log(numm);
    numm++;
}
while (numm < 55);                               //второй цикл

/////////////////////////////////////////////////////////////////////

let nuum = 50;

for (let i = 1; i < 8; i++) {
    console.log(nuum);
    nuum++;                                       //Третий цикл
}

/////////////////////////////////////////////////////////////////////

for (let i = 1; i < 10; i++){
    if (i === 6) {
        break;                                    //Останавливает цикл когда он дошёл до шести
    }
    console.log(i);
}

//////////////////////////////////////////////////////////////////////

for (let i = 1; i < 10; i++) {
    if (i === 6){
        continue;                                  //Пропускает определёное значения но не прерывает цыкл
    }
    console.log(i);
}

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
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
// }                                           //Первый цыкл                 
////////////////////////////////////////////////////////////////////////

// let count = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько вы его оцените?', '');
//     console.log(count);
//     count++;

// }
// while(count < 2);                                //Второй цыкл
                                                
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
////////////////////////////////////////////////////////////////////////