function addCity(){
    let city_name = document.getElementsByClassName("add_city_text_bar").value

    let onSuccess = (data) =>{
        let cities = Object.keys(window.localStorage)
        for (let city of cities){
            if (window.localStorage.getItem(city) === data.data[0].city_name){
                alert("City is already existing!")
                document.getElementById(-1).remove();
                return;
            }
        }
        let id_number;
        if (window.localStorage.length === 0){
            id = 0;
            window.localStorage.setItem(id, data.data[0].city_name);
        }
        else {
            id = Math.max.apply(null, cities) + 1 ;
            window.location.setItem(id, data.data[0].city_name)
        }
        printNewCity(data, id);
    }
    let onFailure = (e) => {
        document.getElementById("-1").remove();
        alert(e);
    }
    fetchCitybyName().then(onSuccess).catch(onFailure)
    document.querySelector('.addNewCity').value = "";

}