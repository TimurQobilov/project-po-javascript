"use script";
//////////////////////////////////////////////////////////////////////////////
// 37. ClassList и делегирование событий
/////////////////////////////////////////////////////////////////////////////

// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');

// // console.log(btns [0].classList.length);                  //посмотреть сколько класов у элемента
// // console.log(btns [0].classList.item(1));                 //получаю класс если он по какимто номером индекса
// // console.log(btns [0].classList.add('red', 'yellow'));    //Добавил класс в этот элемент 
// // console.log(btns [0].classList.remove('blue'));          //удалил класс из этого элемента 
// // console.log(btns [0].classList.toggle('blue'));          //добавит класс если нет его удалит класс если есть в элементе 


// btns [0].addEventListener('click', () => {                      //кликаю на первый элемент что бы сработало функция                
//     // if (!btns [1].classList.contains('red')) {                //проверил есть ли класс red в элементе
//     //      btns [1].classList.add('red');                        //добавил класс red в элемент
//     // } else{
//     //     btns[1].classList.remove('red');                      //удалил класс red из элемента    
//     // }
//     btns[1].classList.toggle('red');                             //добавил клас red если его нет или удалит класс red если он есть в элементе 

// });

// // console.log(btns [0].className);                                //получаю классы 

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == "BUTTON") {         //делигирование с его родителя на его потомков  (это для отдельного класса .classList.contains('blue'))       
//         console.log('Timur');
//     }
// });

// // wrapper.addEventListener('click', (event) => {
// //     if (event.target && event.target.matches("button.red")) {         //это продвинутое делигирование любят сотрудники google ))      
// //         console.log('Timur');
// //     }
// // });

// // btns.forEach(btn => {
// //     btn.addEventListener('click', () => {                           //эта функция без делигирования и она не сработеет на все кнопки 
// //         console.log('Timur');
// //     });
// // });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);

/////////////////////////////////////////////////////////////////////////////
// 38. Создаем табы в новом проекте
/////////////////////////////////////////////////////////////////////////////

window.addEventListener('DOMContentLoaded', () => {
    
    let tabs = document.querySelectorAll('.tabheader__item'),    //достаём все классы 
          tabsContent = document.querySelectorAll('.tabcontent'),       //достаём все класс
          tabsParent = document.querySelector('.tabheader__items');    //достаём класс 

    function hideTabContent() {                                  //скрываем все табы
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {                                      //Удаляем класс активности но точку не ставим так как мы работаем с классом
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';                     //показал класс активности 
        tabs[i].classList.add('tabheader__item_active');            //добавил класс активности 
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

});

