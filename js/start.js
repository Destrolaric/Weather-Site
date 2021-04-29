window.onload = async function () {
    updateGeo()
    pressEnter()
    let onSuccess = (data) => {
        for (let cityName of data.favouriteCities) {
            let city = loadCity();

            let onSuccessFetch = (data) => {
                printNewCity(data, city);
            }

            let onFailFetch = (e) => {
                city.remove();

            }

            fetchCityByName(cityName).then(onSuccessFetch).catch(onFailFetch);
        }
    }

    let onFail = (e) => {
    }
    fetchGetFavourites().then(onSuccess).catch(onFail);

}