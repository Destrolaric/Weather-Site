window.onload = async function () {
    updateGeo()
    let values = Object.keys(window.localStorage);
    for await (let value of values) {
        let name = window.localStorage.getItem(value)
        loadCity();
        let onSuccess = (data) => {
            document.getElementById("-1").id = value
            printNewCity(data, value);
        }
        let onFail = (e) => {
            alert(e);
            document.getElementById("-1").remove()
        }
        fetchCityByName(name).then(OnSuccess).catch(onFail);

    }
}