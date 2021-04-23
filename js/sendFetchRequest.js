const serverURL = "https://quiet-hamlet-22624.herokuapp.com";
const weatherURL = `${serverURL}/weather/city`;
const weatherCoordsURL = `${serverURL}/weather/coordinates`;
const favouritesURL = `${serverURL}/favourite`;

async function fetchCityByName(cityName) {
  let data = await fetch(`${weatherURL}?q=${cityName}`);
  if (data.status === 200) {
    return await data.json();
  }
  throw new Error(`Request is bad. Status ${data.status}`);
}


async function fetchCityByLocation(lat, lon) {
  let data = await fetch(`${weatherCoordsURL}?lat=${lat}&lon=${lon}`);
  if (data.status === 200) {
    return await data.json();
  }
  throw new Error(`Request is bad. Status ${data.status}`);
}

async function fetchGetFavourites() {
  let data = await fetch(favouritesURL);
  if (data.status === 200) {
    return data.json();
  }
  throw new Error(`Request is bad. Status ${data.status}`);
}

async function fetchAddCity(cityName) {
  let data = await fetch(`${favouritesURL}?q=${cityName}`, {method: "POST"});
  console.log('lol')
  if (data.status === 200) {
    return await data.json();
  }

  if (data.status === 404) {
    return false;
  }
  throw new Error(`Request is bad. Status ${data.status}`);
}

async function fetchDeleteCity(cityName) {
  let data = await fetch (`${favouritesURL}?q=${cityName}`, {method: "DELETE"});

  if (data.status !== 200) {
    throw new Error(`Request is bad. Status ${data.status}. Reload your page`);
  }
}