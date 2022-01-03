import renderYear from '../modules/year.js';
import renderMonth from '../modules/currentMonth.js';
import renderAllDays from '../modules/allDays.js';

const prevElement = document.getElementById("prev");
const nextElement = document.getElementById("next");
const date = new Date();


prevElement.addEventListener('click', handleClickPrev);
nextElement.addEventListener('click', handleClickNext);

function handleClickPrev(){
    date.setMonth(date.getMonth()-1)
    render();
};

function handleClickNext(){
    date.setMonth(date.getMonth()+1);
    render();
};



function render(){
    renderAllDays(date);
    renderYear(date);
    renderMonth(date);
}

render();
