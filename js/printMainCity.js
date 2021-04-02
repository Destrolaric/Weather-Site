function printMainCity (response){
    console.log( response)
    let headerCity = document.querySelector('.main_city');
    headerCity.querySelector('.head_city').textContent = response.data[0].city_name;
    // headerCity.querySelector('.weather_icon').src = response.data.weather.icon;
    headerCity.querySelector('.degree').innerHTML = response.data[0].temp;
    let ul = document.querySelector('.main_city').querySelector('#main_city_weather_element');
    console.log(ul)

    let params = ul.querySelectorAll('.weatherInfo');
    console.log(params)
    params[1].textContent = response.data[0].wind_spd;
    params[3].textContent = response.data[0].weather['description'];
    params[5].textContent = response.data[0].pres;
    params[7].textContent = response.data[0].rh + '%' ;
    params[9].textContent = response.data[0].lon + ' '+ response.data[0].lat;
}