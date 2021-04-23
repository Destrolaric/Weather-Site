function addCity() {
    if (document.querySelector('.add_city_text_bar').value !== "") {
        let city_name = document.querySelector('.add_city').querySelector('.add_city_text_bar').value

        let city = loadCity()
        let onSuccess = (response) => {

            if (response === false) {
                alert("City already exists")
                city.remove();
                return;
            }
            printNewCity(response, city);
        }
        let onFailure = (e) => {
            alert(e)
            city.remove();

        }
        console.log('success');
        fetchAddCity(city_name).then(onSuccess).catch(onFailure)
        document.querySelector('.add_city_text_bar').value = "";
    }
}