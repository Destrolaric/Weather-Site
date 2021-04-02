const api = "4ebd41ef190c4dbdbc6c3b8cab1e5e31"

async function fetchCityByName(name) {
    const url = `https://api.weatherbit.io/v2.0/current?key=${api}&city=${name}`
    let response = await fetch(url, {
        "method": "GET",
    })
    if (response.status === 200) {
        return response.json();
    }
    if (response.status === 204) {
        throw new Error("This city does not exist!")
    } else {
        throw new Error(`Something wrong ${response.status}`)
    }
}

async function fetchCityByCoordinate(lat, lon) {
    const url = `https://api.weatherbit.io/v2.0/current?key=${api}&lon=${lon}&lat=${lat}`
    let response = await fetch(url, {
        "method": "GET",
    })
    if (response.status === 200) {
        return response.json();
    }
    if (response.status === 204) {
        return new Error("This city does not exist!")
    } else {
        throw new Error(`Something wrong ${response.status}`)
    }
}