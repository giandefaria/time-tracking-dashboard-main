console.log (obj[0].title)

const boxWork = document.querySelector(".work");
const title = document.querySelectorAll(".title");
const currentHour = document.querySelectorAll(".current--hour");
const lastWeek = document.querySelectorAll(".last--week");

var selector = 'weekly';

let i = 0;


for (let i = 0; i < title.length; i++) {
    console.log(i);
    title[i].innerText = obj[i].title;
    currentHour[i].innerText = obj[i].timeframes[selector].current + "hrs";
    lastWeek[i].innerText = "Last Week - " + obj[i].timeframes[selector].previous;
    
}

