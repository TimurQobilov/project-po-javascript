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
///////////////////////////////////////////////////////////////////////

let num = 20; 

function showFirstMessage(text) {
    console.log(text);
    console.log(num);                          //Локалная достает переменую из глобальной выше это Замыкание функци 
}                                              //function declaration

showFirstMessage('Hello World');
console.log(num);

///////////////////////////////////////////////////////////////////////

function calc(a, b) {
    return (a + b);
    console.log('Unreachable')                     //мертвый код не выполница
}                                                  //function declaration

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

////////////////////////////////////////////////////////////////////////

function ret () {
    let num = 50;

    //

    return num;                                   //return выводит из локалного на глобалный 
}                                                 //function declaration

const anotherNum = ret();
console.log(anotherNum);
                                             //Функции работаю до того как она была уже вызвана 
///////////////////////////////////////////////////////////////////////
                                          
const logger = function() {
    console.log('Hello');
};                                                 //function expression нужно ставить ( {}; ) 

logger();

///////////////////////////////////////////////////////////////////////

const calca = (a, b) => {
    console.log('1');                              //Стрелочная function ()=>
    return a + b;
};                         

//////////////////////////////////////////////////////////////////////

const str = "test";
const arr = [1, 2, 4];

console.log(str.length);                           //свойства пишутся через точку

console.log(str.toUpperCase());                    //это метод верхнего регистра он возврашает новое значения
console.log(str.toLowerCase());                    //это метот нижнего регистра он тоже возврашает новое значения
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));               //это метод исползуется для определения есть ли искомое значения

const logg = "Hello World";
console.log(logg.slice(6, 11));                    //это метод вырежит слово с определёного места до определеного места 
console.log(logg.substring(6, 11));                //это тоже самый метод
console.log(logg.substr(6, 5));                    //это тоже самый метод но в конце прописывается сколко символов нужно выразить 

///////////////////////////////////////////////////////////////////////
                                        //Методы числа 
const num = 12.9;
console.log(Math.round(num));            //Метод для округления 

const test = "12.2px";
console.log(parseInt(test));              //метот преврашает из строки в целой число
console.log(parseFloat(test));            //метод возврашает из числовой строки в обыч число

////////////////////////////////////////////////////////////////////////

function first() {

    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

///////////////////////////////////////////////////////////////////////

function learnJS (lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}                                                              //callback

learnJS('JavaScript', function() {
    console.log('Я прошел этот урок!');
});

///////////////////////////////////////////////////////////////////////

function learnJS (lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}                                                             //callback               

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);

///////////////////////////////////////////////////////////////////////

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();
const {border, bg} =options.colors;
console.log(border);

console.log(Object.keys(options).length);                        //получить масив со всеми ключами  
// console.log(options.name);
// delete options.name;
// console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]) {
            console.log(`Свойства ${i} имеет значения ${options[key][i]}`);
            counter++;
        }
    } else{
        console.log(`Свойства ${key} имеет значения ${options[key]}`);
        counter++;
    }
}
console.log(counter);

///////////////////////////////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item}: внутри массива ${arr}`);        
});                                                      //кол бэк функция выполница строка определёной дествии


// arr[99] = 0;
// console.log(arr.length)                                //ленг свойтва состоить из последнего индекса плюс один 
// console.log(arr);

// arr.pop();
// arr.push(7);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {                                   //такая конструкция работает с масиваподобными сушнастями 
//     console.log(value);
// }

/////////////////////////////////////////////////////////////////////////////////

const aar =[1, 10, 21, 0, 12, 11];
aar.sort(compareNum);                                          //сортирует  
console.log(aar);                               

function compareNum(a, b) {
    return a - b;
}

/////////////////////////////////////////////////////////////////////////////////

let a = 5,                                                                
    b = a;      

b = b + 5;

console.log(b);
console.log(a);


const obj = {
    a = 5,
    b = 1
}; 

const copy = obj;                                            //в этот обект кладется ссылка
copy.a = 10;

console.log(copy);
console.log(obj);

///////////////////////////////////////////////////////////////////////////////

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj [key];
    }
    return objCopy;
}


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;                                                   //глубокая копия обекта
newNumbers.c.x = 10;                                                 //поверхсная копия обекта
console.log(newNumbers);
console.log(numbers); 

////////////////////////////////////////////////////////////////////////////

const numbers1 = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers1, add));
const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);

////////////////////////////////////////////////////////////////////////////

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'Timur';

console.log(newArray);
console.log(oldArray);

///////////////////////////////////////////////////////////////////////////////

const video = ['yotube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

////////////////////////////////////////////////////////////////////////////// 

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];

log(...num);

///////////////////////////////////////////////////////////////////////////////

const array = ["a", "b"];
const newAarray = [...array];

console.log(newAarray);


const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);

///////////////////////////////////////////////////////////////////////////////////

const soldier = {
    health: 400,
    armor: 100
};

const jonh = { 
    health: 100
};
const jonh = Object.create(soldier);                        //прототипная связ 

// jonh.__proto__ = soldier;                                //старый вид записи 
// Object.setPrototypeOf(jonh, soldier);                       //новый вид записи 


console.log(jonh.armor);

///////////////////////////////////////////////////////////////////

// To string
//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)Канкатенация
console.log(typeof(5 + ''));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

//To Number
//1)
console.log(typeof(Number('4')));

//2)Унарный плюс
console.log(typeof(+'5'));

//3) 
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("hello", "");

//To boolean
//0, '', null, undefined, NaN;   всегда будет преврашатся ( false ) 
//1)нативный
let switcher = null;

if (switcher) {
    console.log('Wocking...');
}
switcher = 1;

if (switcher) {
    console.log('Working...');
}

//2)логический тип данных
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!"44444"));

/////////////////////////////////////////////////////////////////////////////

// let x = 5; alert(x++);      // ответ 5
// let x = 5; alert(++x);      //ответ 6

//  console.log([] + false -null + true);  // не математической значение  "NaN"

// let y = 1;  let x = y = 2; alert(x);   // ответ 2

// console.log([] + 1 + 2);      // ответ строка "12"

// alert("1" [0]);    //ответ 1

// console.log(2 && 1 && null && 0 && undefined); //ответ null. Оператор && (и) запенается на лжи

// console.log(!! (1 && 2) === (1 && 2));  //ответ false оператор !! (не) превратил значения в булиновае

// alert( null || 2 && 3 || 4);  // ответ 3 оператор &&(и) в преоритете 

// const a = [1,2,3]; 
// const b = [1,2,3];
// console.log(a == b);           //false не равно 

// alert ( +"Infinity" );              //ответ Infinity 

// console.log("Ёжик" > "яблоко");        //ответ false не равно 

//оператов || (или) запенается в правде 
// console.log(0 || "" || 2 || undefined || true || false);    // ответ 2 далше код не пройдет 

///////////////////////////////////////////////////////////////////////////////////////

const box = document.getElementById('box');           //достанет элемент через ID  

console.log(box);

////////////////////////////////////////////////////////////////

const btns = document.getElementsByTagName('button');    // Достанет элемент через TAG

console.log(btns[1]);

/////////////////////////////////////////////////////////////

const circles = document.getElementsByClassName('circle');     //достанет элемент Class нужно писать без точки 

console.log(circles);

/////////////////////////////////////////////////////////////////


const hearts = document.querySelectorAll('.hearts');                //достаёт любой селектор из css нужно писать с точкой

console.log(hearts);

////////////////////////////////////////////////////////////////////////

const oneHeart = document.querySelector('.heart');                   //этот селектор позволяет получить только один первый элемент
console.log(oneHeart);

///////////////////////////////////////////////////////////////////////////////////