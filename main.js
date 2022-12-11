import data from './data.json' assert {type: 'json'}

console.log(data)

let bgColors = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(15, 84%, 65%)',
    'hsl(245, 84%, 65%)',
    'hsl(130, 84%, 65%)',
]

let option1Array = data.map(item => item.timeframes)

console.log(option1Array)

let option1Btn = document.querySelector('#option1');
let option2Btn = document.querySelector('#option2');
let option3Btn = document.querySelector('#option3');

let secondSection =  document.querySelector('.second-section');

drawElements(option1Array)

option1Btn.addEventListener('click', ()=>{
    drawElements(option1Array)
});

option2Btn.addEventListener('click', ()=>{
    drawContent("Hiciste click en la opción 2")
});

option3Btn.addEventListener('click', ()=>{
    drawContent("Hiciste click en la opción 3")
});

function drawElements(array){
    secondSection.innerHTML = '';
    array.forEach( (element, index) =>{
        // console.log(element)

        let title = data[index].title;
        let titleLowerCase = title.toLocaleLowerCase()

        if(titleLowerCase == 'self care'){
            titleLowerCase = 'self-care'
        }

        console.log(title)
        console.log(titleLowerCase)

        secondSection.innerHTML += `
        <div class="card">
            <div class="card__background" style="background-color: ${bgColors[index]};">
            <img class="card__image" src="./images/icon-${titleLowerCase}.svg" alt="">
            </div>
            <div class="card__details">
            <div class="card__activity">
                <p class="card__title">${title}</p>
                <img class="card__dots" src="./images/icon-ellipsis.svg" alt="three dots">
            </div>
            <div class="card__time">
                <p class="card__hour">${element.daily.current}hrs</p>
                <p class="card__previous">Dia anterior - ${element.daily.previous}hrs</p>
                <p class="card__previous">Semana anterior - ${element.weekly.previous}hrs</p>
                <p class="card__previous">Mes anterior - ${element.monthly.previous}hrs</p>
            </div>
            </div>
        </div>
        ` 
    } )
}

function drawContent(mensaje){
    secondSection.innerHTML = `<h1>${mensaje}</h1>`;
}