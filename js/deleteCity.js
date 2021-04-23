
function deleteCity(obj) {
    let onSuccess = () => {
        obj.parentElement.parentElement.parentElement.remove();
    }
    let onFailure = (e) => {
        alert(e);
    }
    fetchDeleteCity(obj.parentElement.parentElement.querySelector("h2").textContent).then(onSuccess).catch(onFailure)

}