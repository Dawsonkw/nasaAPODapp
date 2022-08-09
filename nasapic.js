//-------------------------------
// Constants
//-------------------------------
const button = document.querySelector("button");
const img = document.querySelector('img')



//--------------------------------
//  Fetch Functions
//--------------------------------


button.addEventListener('click', () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=zTf9zsuCeRbhNUHwqsQcSzdcuxSdqbrUOg1VDD5V')
    .then((response) => response.json())
    .then((data) => document.getElementById("picHolder").innerHTML = `<img src="${data.url}">`)  
    event.preventDefault(); 
});

button.addEventListener("click", () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=zTf9zsuCeRbhNUHwqsQcSzdcuxSdqbrUOg1VDD5V')
    .then((response) => response.json())
    .then((data) => document.getElementById("description").innerHTML = `<p>${data.explanation}`)
});


// -----------------------------------
// Helper Functions
// -----------------------------------

function buttonHide(hide) {
    hide.style.display = "none"                 
};                                                         
