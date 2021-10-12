

const now = new Date();                           //Получил дату 
console.log(now);
// Это методы геторы 
console.log(now.getFullYear());                   //получил год через метод 
console.log(now.getMonth());                      //получил месяц через метод 
console.log(now.getDate());                          //получил дату
console.log(now.getHours());                         //получил время 
console.log(now.getUTCHours());                      //получил временую разницу
console.log(now.getTimezoneOffset());                //разница между часовым поисом 
console.log(now.getTime());                          //прошедшее время с начала 1970 года


//Это методы сеторы 

const sow = new Date();                           //Получил дату 
console.log(sow.setHours(15)); 
console.log(sow);

////

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end =new Date();

alert(`Цикл отработал за ${end - start} милисекунд`);