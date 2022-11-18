console.log (obj[0].title)

const boxWork = document.querySelector(".work");
const title = document.querySelectorAll(".title");
const currentHour = document.querySelectorAll(".current--hour");
const lastWeek = document.querySelectorAll(".last--week");
const buttonSelect = document.querySelectorAll(".selectors");


var selector = 'weekly';


//Função que inserirá no HTML os dados constantes no JSON, que serão escolhidos de acordo com o valor constante na variável 'selector'
//obj é uma variável onde consta os dados em JSON. Pode ser acessada no arquivo dataJson.js
function insertData () {   

    for (let i = 0; i < title.length; i++) {
        console.log(i);
        title[i].innerText = obj[i].title;
        currentHour[i].innerText = obj[i].timeframes[selector].current + "hrs";
        lastWeek[i].innerText = "Last Week - " + obj[i].timeframes[selector].previous + "hrs";
        
    }
}

insertData();


//Possui o papel de remover qualquer seletor de destaque antes de destacar o seletor selecionado
function removeClassList () {

    for (let i = 0; i < buttonSelect.length; i++) {
        
        buttonSelect[i].classList.remove('active');
        
    }
}

//captará o valor do seletor e mudará a variável 'selector'. Limpará o seletor que esteva com o visual ativo e adicionará o visual ao selecionado
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