const container =document.querySelector('.container');
const search   =document.querySelector('.search-box button');
const weatherBox=document.querySelector('.weather-box');
const weatherDetails=document.querySelector('.weather-details');
const error404=document.querySelector('.not-found');


search.addEventListener('click',() => {

const APIKey = '8ad0fa5fae56b2b8f1b1350f531af2af';
const city =document.querySelector('.search-box input').value;

if(city=='')
    return;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response=>response.json()).then(json=>{

    if(json.cod=='404'){
        container.style.height='400px';
        weatherBox.classList.remove('active');
        weatherDetails.classList.remove('active');
        error404.classList.add('active');
        return;
    }

    container.style.height='555px';
    weatherBox.classList.add('active');
    weatherDetails.classList.add('active');
    error404.classList.remove('active');

    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');
     
      
    switch(json.weather[0].main){
        case'Clear':
          image.src='img/clear.JPG';
          break;

        case'Rain':
          image.src='img/rain.JPG';
          break;

        case'Snow':
          image.src='img/snow.JPG';
          break;

        case'Clouds':
          image.src='img/cloud.JPG';
          break;

        case'Mist':
          image.src='img/mist.JPG';
          break;

        case'Haze':
          image.src='img/mist.JPG';
          break;

        default:
            image.src="img/cloud.JPG";
            break;
      }

      temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML=`${json.weather[0].description}`;
      humidity.innerHTML=`${json.main.humidity}%`;
      wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`;


    });
});