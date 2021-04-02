const api = "b15bf862390a4bd783a42e1edb3be371"

async function fetchCityByName(name) {
    const url = `http://api.weatherbit.io/v2.0/current?key=${api}&city=${name}`
    let response = await fetch(url, {
        "method": "GET",
    })
    if (response.status === 200) {
        return response.json();
    }
    if (response.status === 204){
        throw new Error("This city does not exist!")
    }
    else{
        throw new Error(`something wrong ${response.status}`)
    }
}

async function fetchCitybyCoord(lat, lon) {
    const url = `http://api.weatherbit.io/v2.0/current?key=${api}&lon=${lon}&lat=${lat}`
    let response = await fetch(url, {
        "method": "GET",
    })
    if (response.status === 200) {
        return response.json();
    }
    if (response.status === 204){
        return new Error("This city does not exist!")
    }
    else{
        throw new Error(`something wrong ${response.status}`)
    }
}