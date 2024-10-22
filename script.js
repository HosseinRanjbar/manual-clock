const numberHours = document.querySelector('.number-hours');
const barSecond = document.querySelector('.bar-second');
const numberElemet = [];
const barElemet = [];

for (let index = 1; index <= 12; index++) {
    numberElemet.push(
        `<span style="--index:${index}"><p>${index}</p></span>`
    );
};
numberHours.insertAdjacentHTML('afterbegin',numberElemet.join(""))

for (let index = 0; index <= 60; index++) {
    barElemet.push(
        `<span style="--index:${index}"><p></p></span>`
    );
    
}
barSecond.insertAdjacentHTML('afterbegin',barElemet.join(""))

////
const handHour = document.querySelector('.hand.hour');
const handMinute = document.querySelector('.hand.minute');
const handsecond = document.querySelector('.hand.second');

function getcurrentTime(){
    let date = new Date();
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentSecond = date.getSeconds();

    handHour.style.transform = `rotate(${currentHour * 30 + currentMinute / 2}deg)`;
    handMinute.style.transform = `rotate(${currentMinute * 6}deg)`;
    handsecond.style.transform = `rotate(${currentSecond * 6}deg)`;
}

setInterval(getcurrentTime,1000);