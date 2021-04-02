let onSuccess = (data) => {
    printMainCity(data)
}
let onFailure = (e) => {
    alert(e)
}

async function getWeatherFromPosition(pos) {
    let lat = pos.coords.latitude
    let lon = pos.coords.longitude
    let data = await fetchCityByCoordinate(lat, lon).then(onSuccess).catch(onFailure)
}

function updateGeo() {

    let headerCity = document.querySelector('.main_city');

    headerCity.querySelector('.head_city').textContent = 'Loading...';
    headerCity.querySelector('.weather_icon').src = `pics/refresh.svg`;
    headerCity.querySelector('.degree').innerHTML = `_______`;

    let ul = document.querySelector('.main_city').querySelector('#main_city_weather_element');
    console.log(ul)

    let params = ul.querySelectorAll('.weatherInfo');
    console.log(params)
    params[1].textContent = '_______';
    params[3].textContent = '_______';
    params[5].textContent = '_______';
    params[7].textContent = '_______';
    params[9].textContent = '_______';
    navigator.geolocation.getCurrentPosition(getWeatherFromPosition, getDefault)

}


function getDefault() {
    let name = "Null Island"
    fetchCityByName(name).then(onSuccess).catch(onFailure)
}