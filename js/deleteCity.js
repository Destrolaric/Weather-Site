function deleteCity(obj) {
    let id = obj.parentElement.parentElement.parentElement.id;
    window.localStorage.removeItem(id);
    obj.parentElement.parentElement.parentElement.remove();

}