const api='c6175bcf171b4b0e9ec172707242511';

function fetchWeather(city){
    const url = 'https://api.weatherapi.com/v1/current.json?key=' + api + '&q=' + city + '&aqi=no';
    fetch(url)
    .then(function(response){
        if(response.ok){
            return response.json();
        }
        else{
            throw new Error("Ошибка получения данных с сервера")
        }
    })
    .then(function(data){
        showWeather(data);
    })
    .catch(function(error){
        showError(error.message);
    })
}


function showWeather(data){
    const output=document.getElementById('weather-output');
    const error=document.getElementById('errorMessage');
    error.textContent=' ';
    output.innerHTML=
    '<div class="city"> Город: '+ data.location.name+'</div>'+ '<div class="weather">Погода: '+ data.current.temp_c+ '</div>'+
    '<div class="weather">Состояние: ' + data.current.condition.text + '</div>';
}

function showError(message) {
    const error = document.getElementById('errorMessage');
    error.textContent = message;  // Теперь 'message' передаётся как параметр
}

document.getElementById('getWeather').addEventListener('click', function () {
    const city = document.getElementById('cityInput').value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        showError('Введите название города!');
    }
});


// function showError(message){
//     const output=document.getElementById('weather-output');
//     const error=document.getElementById('errorMessage');
//     output.innerHTML=' ';
//     error.textContent=message;
// }

// const weatherContainer=document.getElementById('weather-container');
// const refreshBtn=document.getElementById('refresh-btn');
// async function fecthWeather(city){
//     const url = 'https://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + city + '&aqi=no';
//     const responce=

// }