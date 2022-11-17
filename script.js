console.log (obj[0].title)

const boxWork = document.querySelector(".work");
const title = document.querySelectorAll(".title");
const currentHour = document.querySelectorAll(".current--hour");
const lastWeek = document.querySelectorAll(".last--week");
const buttonSelect = document.querySelectorAll(".selectors");


var selector = 'weekly';



function insertData () {   

    for (let i = 0; i < title.length; i++) {
        console.log(i);
        title[i].innerText = obj[i].title;
        currentHour[i].innerText = obj[i].timeframes[selector].current + "hrs";
        lastWeek[i].innerText = "Last Week - " + obj[i].timeframes[selector].previous + "hrs";
        
    }
}

insertData();

function removeClassList () {

    for (let i = 0; i < buttonSelect.length; i++) {
        
        buttonSelect[i].classList.remove('active');
        
    }
}


for (let i = 0; i < buttonSelect.length; i++) {

    buttonSelect[i].addEventListener("click", () =>{

        const value = buttonSelect[i].innerText;
        const selectedValue = value.toLowerCase();
        selector = selectedValue;

        insertData();
        removeClassList();
        buttonSelect[i].classList.add('active');
        
    })
}