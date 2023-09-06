const chickenCurry = document.querySelector('.chicken');
const lentilCurry = document.querySelector('.daal');
const potatoCurry = document.querySelector('.aloo');
const wrapper = document.querySelector('.wrapper');

let curries = {
    chickenCurry: document.querySelector('.chicken'),
    lentilCurry: document.querySelector('.daal'),
    potatoCurry: document.querySelector('.aloo'),
}

for (let key in curries){
    let curry = curries[key];
    curry.addEventListener('mouseover', function(e){
        e.target.classList.toggle('transition');
    })
    curry.addEventListener('mouseout', function(e){
        e.target.classList.toggle('transition');
    })
}
