// console.log('Loading for a javascript file');

fetch('http://localhost:3000/weather?address=boston').then((response) => {
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data)
        }
    });
});

const weatherForm = document.querySelector('.search');
const search = document.querySelector('input');
const temperature = document.querySelector('.temp');
const address = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

weatherForm.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('form created succesfull');
    const location = search.value;

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }else{
            temperature.textContent = data.temperature;
            address.textContent = data.location;
            humidity.textContent = data.humidity;
            wind.textContent = data.wind_speed;
        }
    });
});

    // console.log(location);
})