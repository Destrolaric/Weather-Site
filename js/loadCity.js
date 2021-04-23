function loadCity()
{
    let cities = document.querySelector('.weather_elements');
    let template = document.querySelector('#templateFavouriteCity');
    template.content.querySelector('.city').setAttribute("id", `-1`);

    let clone = document.importNode(template.content, true);
    cities.append(clone);
    return cities.lastElementChild;
}