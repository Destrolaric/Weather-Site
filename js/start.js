window.onload = function (){
    updateGeo()
    let values = Object.keys(window.localStorage);
    for (let value of values){
        let name = window.localStorage.getItem(value)
        loadCity();
        let OnSuccess = (data) => {
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