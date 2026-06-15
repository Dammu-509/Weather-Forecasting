const apiKey = "c71d877fa4098a434d8e1032df84812f";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

// Search Button searching the buttuo ki
searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if(city){
        getWeather(city);
    }
});

// Dark Mode 
// document
// .getElementById("themeToggle")
// .addEventListener("click", () => {

//     document.body.classList.toggle("dark");

// });


// Fetch Weather weather ni fetch cheydaniki
async function getWeather(city){

    try{

const response = await fetch(
`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
);

const data = await response.json();

        if(data.cod != 200){

            alert("City Not Found");

            return;
        }

        updateUI(data);

        saveSearch(city);

    }
    catch(error){

        console.log(error);

        alert("Something went wrong");

    }
}

// Update UI  geting of the data to it by using the DOM
function updateUI(data){

    const current = data.list[0];

    document.getElementById("cityName").innerText =
    data.city.name;

    document.getElementById("country").innerText =
    data.city.country;

    document.getElementById("temperature").innerText =
    `${Math.round(current.main.temp)}°C`;

    document.getElementById("condition").innerText =
    current.weather[0].description;

    document.getElementById("humidity").innerText =
    `${current.main.humidity}%`;

    document.getElementById("wind").innerText =
    `${current.wind.speed} m/s`;

    document.getElementById("feelsLike").innerText =
    `${Math.round(current.main.feels_like)}°C`;

    updateWeatherImage(current.weather[0].main);

    showForecast(data.list);
}

// Dynamic Background dyanmically changes t
function updateWeatherImage(condition) {

    const card = document.querySelector(".weather-card");

    condition = condition.toLowerCase();

    let bgImage = "";

    if (condition.includes("rain")) {
        bgImage = "https://getwallpapers.com/wallpaper/full/5/b/5/909940-new-rain-drops-wallpaper-1920x1200-for-windows-7.jpg";
    }
    else if (condition.includes("cloud")) {
        bgImage = "https://getwallpapers.com/wallpaper/full/0/8/a/265630.jpg";
    }
    else if (condition.includes("clear")) {
        bgImage = "https://wallpapercave.com/wp/wp6680526.jpg";
    }
    else if (condition.includes("snow")) {
        bgImage = "https://images.wallpapersden.com/image/download/winter-trees-snow-season_am5uaGeUmZqaraWkpJRqaWxnrWhrZWs.jpg";
    }
    else if (condition.includes("thunderstorm")) {
        bgImage = "https://backiee.com/static/wallpapers/3840x2160/201285.jpg";
    }
    else if (condition.includes("mist") || condition.includes("fog")) {
        bgImage = "https://wallpaperaccess.com/full/4773448.jpg";
    }
    else {
        bgImage = "https://wallpapers.com/images/featured/sunny-i2iuwt6dckyhzjmi.jpg";
    }

    card.style.backgroundImage = `url(${bgImage})`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
}
function showForecast(list){

    const container =
    document.getElementById("forecastContainer");

    container.innerHTML = "";

    for(let i = 0; i < list.length; i += 8){

        const item = list[i];

        const card =
        document.createElement("div");

        card.classList.add("forecast-card");

        const date =
        new Date(item.dt_txt);

        card.innerHTML = `
            <h4>${date.toDateString().slice(0,3)}</h4>
            <p>${Math.round(item.main.temp)}°C</p>
            <p>${item.weather[0].main}</p>
        `;

        container.appendChild(card);
    }
}



// Save Searches
function saveSearch(city){

    let searches =
    JSON.parse(localStorage.getItem("cities")) || [];

    if(!searches.includes(city)){

        searches.push(city);

        localStorage.setItem(
            "cities",
            JSON.stringify(searches)
        );
    }

    loadRecentSearches();
}

// Load Searches
function loadRecentSearches(){

    const searches =
    JSON.parse(localStorage.getItem("cities")) || [];

    const div =
    document.getElementById("recentSearches");

    div.innerHTML = "";

    searches.forEach(city => {

        const btn =
        document.createElement("button");

        btn.innerText = city;

        btn.onclick = () => getWeather(city);

        div.appendChild(btn);

    });
}

// Current Location currentlocation kosam
// Current Location Weather

navigator.geolocation.getCurrentPosition(

async (position) => {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log("Latitude:", lat);
    console.log("Longitude:", lon);

    try {

        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        );

        const data = await response.json();

        console.log(data);

        if(data.cod !== "200"){
            alert("Unable to fetch weather data");
            return;
        }

        updateUI(data);

    }
    catch(error){

        console.log(error);

        alert("Failed to fetch location weather");

    }

},

(error) => {

    console.log(error);

    if(error.code === 1){
        alert("Location permission denied");
    }
    else{
        alert("Unable to access location");
    }

}

);

 //loadRecentSearches();const apiKey = "c71d877fa4098a434d8e1032df84812f";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

// Search Button searching the buttuo ki
searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if(city){
        getWeather(city);
    }
});

// Dark Mode 
// document
// .getElementById("themeToggle")
// .addEventListener("click", () => {

//     document.body.classList.toggle("dark");

// });


// Fetch Weather weather ni fetch cheydaniki
async function getWeather(city){

    try{

const response = await fetch(
`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
);

const data = await response.json();

        if(data.cod != 200){

            alert("City Not Found");

            return;
        }

        updateUI(data);

        saveSearch(city);

    }
    catch(error){

        console.log(error);

        alert("Something went wrong");

    }
}

// Update UI  geting of the data to it by using the DOM
function updateUI(data){

    const current = data.list[0];

    document.getElementById("cityName").innerText =
    data.city.name;

    document.getElementById("country").innerText =
    data.city.country;

    document.getElementById("temperature").innerText =
    `${Math.round(current.main.temp)}°C`;

    document.getElementById("condition").innerText =
    current.weather[0].description;

    document.getElementById("humidity").innerText =
    `${current.main.humidity}%`;

    document.getElementById("wind").innerText =
    `${current.wind.speed} m/s`;

    document.getElementById("feelsLike").innerText =
    `${Math.round(current.main.feels_like)}°C`;

    updateWeatherImage(current.weather[0].main);

    showForecast(data.list);
}

// Dynamic Background dyanmically changes t
function updateWeatherImage(condition) {

    const card = document.querySelector(".weather-card");

    condition = condition.toLowerCase();

    let bgImage = "";

    if (condition.includes("rain")) {
        bgImage = "https://getwallpapers.com/wallpaper/full/5/b/5/909940-new-rain-drops-wallpaper-1920x1200-for-windows-7.jpg";
    }
    else if (condition.includes("cloud")) {
        bgImage = "https://getwallpapers.com/wallpaper/full/0/8/a/265630.jpg";
    }
    else if (condition.includes("clear")) {
        bgImage = "https://wallpapercave.com/wp/wp6680526.jpg";
    }
    else if (condition.includes("snow")) {
        bgImage = "https://images.wallpapersden.com/image/download/winter-trees-snow-season_am5uaGeUmZqaraWkpJRqaWxnrWhrZWs.jpg";
    }
    else if (condition.includes("thunderstorm")) {
        bgImage = "https://backiee.com/static/wallpapers/3840x2160/201285.jpg";
    }
    else if (condition.includes("mist") || condition.includes("fog")) {
        bgImage = "https://wallpaperaccess.com/full/4773448.jpg";
    }
    else {
        bgImage = "https://wallpapers.com/images/featured/sunny-i2iuwt6dckyhzjmi.jpg";
    }

    card.style.backgroundImage = `url(${bgImage})`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
}
function showForecast(list){

    const container =
    document.getElementById("forecastContainer");

    container.innerHTML = "";

    for(let i = 0; i < list.length; i += 8){

        const item = list[i];

        const card =
        document.createElement("div");

        card.classList.add("forecast-card");

        const date =
        new Date(item.dt_txt);

        card.innerHTML = `
            <h4>${date.toDateString().slice(0,3)}</h4>
            <p>${Math.round(item.main.temp)}°C</p>
            <p>${item.weather[0].main}</p>
        `;

        container.appendChild(card);
    }
}



// Save Searches
function saveSearch(city){

    let searches =
    JSON.parse(localStorage.getItem("cities")) || [];

    if(!searches.includes(city)){

        searches.push(city);

        localStorage.setItem(
            "cities",
            JSON.stringify(searches)
        );
    }

    loadRecentSearches();
}

// Load Searches
function loadRecentSearches(){

    const searches =
    JSON.parse(localStorage.getItem("cities")) || [];

    const div =
    document.getElementById("recentSearches");

    div.innerHTML = "";

    searches.forEach(city => {

        const btn =
        document.createElement("button");

        btn.innerText = city;

        btn.onclick = () => getWeather(city);

        div.appendChild(btn);

    });
}

// Current Location currentlocation kosam
// Current Location Weather

navigator.geolocation.getCurrentPosition(

async (position) => {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log("Latitude:", lat);
    console.log("Longitude:", lon);

    try {

        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        );

        const data = await response.json();

        console.log(data);

        if(data.cod !== "200"){
            alert("Unable to fetch weather data");
            return;
        }

        updateUI(data);

    }
    catch(error){

        console.log(error);

        alert("Failed to fetch location weather");

    }

},

(error) => {

    console.log(error);

    if(error.code === 1){
        alert("Location permission denied");
    }
    else{
        alert("Unable to access location");
    }

}

);

 //loadRecentSearches();