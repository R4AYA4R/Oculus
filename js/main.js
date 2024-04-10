'use strict'
const tabItem=document.querySelectorAll('.tabs__btn-item');
const tabContent=document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
    element.addEventListener('click',open);
});
function open(evt){
    const tabTarget=evt.currentTarget;// помещаем тот элемент,на который нажали в переменную tabTarget
    const button=tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    });
    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    });
    
    tabTarget.classList.add('tabs__btn-item--active'); // добавляем класс нажатой кнопке
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active'); // находим элемент с id дата атрибута,который записан в переменной button(получается,что дата атрибут button и id элемента одинаковые) и добавляем ему класс
}

const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('menu--active');
});