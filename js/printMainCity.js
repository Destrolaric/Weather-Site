function printMainCity (response){
    let main_city = document.querySelector('.main_city');
    main_city.querySelector('.head_city').textContent = response.data[0].city_name;
    main_city.querySelector('.weather_icon').src = `https://www.weatherbit.io/static/img/icons/${response.data[0].weather.icon}.png `;
    main_city.querySelector('.degree').innerHTML = response.data[0].temp;
    let ul = document.querySelector('.main_city').querySelector('#main_city_weather_element');
    fillUL(ul, response)
}