let changeLocation = document.getElementById('change-location');
let card = document.getElementById('card');
let details = document.getElementById('details');
let weatherIcon = document.getElementById('weather-icon');
let overlay = document.getElementById('overlay');
let btn = document.querySelector(".send");
changeLocation.city.focus();
// loader
function loader(state) {
    if (state) {
        overlay.classList.remove("d-none");
    } else {
        overlay.classList.add("d-none");
    };
};
let updateUI = (weather) => {
    details.innerHTML = `
        <h5 class="mb-3">${weather.name}, ${weather.sys.country} </h5>
        <p class="mb-3"> ${weather.weather[0].main} </p>
        <div class="display-4 mb-3">
          <span> ${Math.ceil(weather.main.temp)} </span>
          <span>&deg;C</span>
        </div>
    `
    if (card.classList.contains("d-none")) {
        card.classList.remove("d-none");
    };
    weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
};
// get weather
let getWeather = async (shahar) => {
    let data = await getData(shahar);
    return data;
};
changeLocation.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = changeLocation.city.value.trim()
    changeLocation.reset();
    getWeather(cityName)
        .then((datas) => {
            updateUI(datas)
        })
});
btn.addEventListener("click", () => {
    e.preventDefault();
    let cityName = changeLocation.city.value.trim()
    changeLocation.reset();
    loader(true);
    getWeather(cityName)
        .then((datas) => {
            updateUI(datas)
        })
        .finally(() => {
            loader(false);
        })
})