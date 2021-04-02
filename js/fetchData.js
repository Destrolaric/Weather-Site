const api = "b15bf862390a4bd783a42e1edb3be371"

async function fetchCitybyName(name) {
    const data = await fetch(`http://api.weatherbit.io/v2.0/current?key=${api}&city=${name}`, {
        "method": "GET",
    })
    if (data.status === 200) {
        return await data.json();
    }
    alert(`${data.status}`)
    return data
}

async function fetchCitybyCoord(lat, lon) {
    const {json, status} = await fetch(`http://api.weatherbit.io/v2.0/current?key=${api}&lon=${lon}&lat=${lat}`, {
        "method": "GET",
    })
    if (status === 200) {
        return await json();
    }
    alert(`${status}`)
    throw new Error(`ERROR №${status}`)
}