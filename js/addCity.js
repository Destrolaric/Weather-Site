function addCity() {
    if (document.querySelector('.add_city_text_bar').value !== "") {
        let city_name = document.querySelector('.add_city').querySelector('.add_city_text_bar').value
        console.log(city_name)
        loadCity()
        let onSuccess = (response) => {
            console.log(response)
            let cities = Object.keys(window.localStorage)
            for (let city of cities) {
                if (window.localStorage.getItem(city) === response.data[0].city_name) {
                    alert("City is already existing!")
                    document.getElementById("-1").remove();
                    return;
                }
            }
            let id_number;
            if (window.localStorage.length === 0) {
                id_number = 0;
                window.localStorage.setItem(id_number, response.data[0].city_name);
            } else {
                id_number = Math.max.apply(null, cities) + 1;
                window.localStorage.setItem(id_number, response.data[0].city_name)
            }
            document.getElementById("-1").id = id_number;
            printNewCity(response, id_number);
        }
        let onFailure = (e) => {
            alert(e)
            document.getElementById("-1").remove();
        }
        console.log(city_name)
        fetchCityByName(city_name).then(onSuccess).catch(onFailure)
        document.querySelector('.add_city_text_bar').value = "";
    }
}