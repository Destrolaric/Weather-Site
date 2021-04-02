function printNewCity(response, id) {
    console.log(id)
    let main_city = document.getElementById(`${id}`);
    main_city.querySelector('.name_of_city').textContent = response.data[0].city_name;
    main_city.querySelector('.icon_small').src = `https://www.weatherbit.io/static/img/icons/${response.data[0].weather.icon}.png `;
    main_city.querySelector('.degree_small').innerHTML = response.data[0].temp + "°C";
    let ul = main_city.querySelector('.weather_element');
    fillUL(ul, response)


}

function fillUL(ul, response) {
    let params = ul.querySelectorAll('.weatherInfo');
    params[1].textContent = response.data[0].wind_spd + "m/s";
    params[3].textContent = response.data[0].weather['description'];
    params[5].textContent = response.data[0].pres;
    params[7].textContent = response.data[0].rh + '%';
    params[9].textContent = response.data[0].lon + ' ' + response.data[0].lat;
}