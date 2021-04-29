function addCity() {
    if (document.querySelector('.add_city_text_bar').value !== "") {
        let city_name = document.querySelector('.add_city').querySelector('.add_city_text_bar').value

        let city = loadCity()
        let onSuccess = (response) => {

            if (response === false) {
                alert("City not exists or already added!")
                city.remove();
                return;
            }
            printNewCity(response, city);
        }
        let onFailure = (e) => {
            alert(e)
            city.remove();

        }
        fetchAddCity(city_name).then(onSuccess).catch(onFailure)
        document.querySelector('.add_city_text_bar').value = "";
    }
}

function pressEnter() {
    document.querySelector('.add_city_text_bar').addEventListener('keypress',
      function (e) {
          if (e.key === 'Enter' && document.querySelector('.add_city_text_bar').value !== "") {
              addCity();
          }
      });
}