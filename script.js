var inputvalue = document.querySelector('#cityinput');
var submitBtn = document.querySelector('#submitBtn'); 
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "ad8afb9e143b27efd0501bb8a71d6aa6";

function convertion(val) {
    return (val - 273.15).toFixed(2);
}

submitBtn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descriptionvalue = data['weather'][0]['description'];
            var tempvalue = data['main']['temp'];
            var windspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(tempvalue)} c</span>`;
            description.innerHTML = `Sky condition: <span>${descriptionvalue}</span>`;
            wind.innerHTML = `Wind speed: <span>${windspeed} km/h<span>`;
        })
        .catch(err => alert('You Entered Wrong city name!'));
});
