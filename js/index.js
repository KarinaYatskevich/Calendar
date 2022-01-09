import renderYear from '../modules/renderYear.js';
import renderMonth from '../modules/renderMonth.js';
import renderAllDays from '../modules/renderAllDays.js';

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
