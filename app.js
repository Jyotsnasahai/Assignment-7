const months = ["January", "February", "March", "April", 'May', "June", "July", 'August', 'September', "October", 'November', "December"]
const weatherText = document.querySelector('.weatherText');

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=bbf4378d7abeb988c9b73ca8a24ec2a6`)
    .then((data) => {
        return data.json();
    }).then((data) => {
        if (data.name !== undefined) {
            let curr = new Date().getDate() + " " + months[new Date().getMonth()] + " 2021";
            let temp = `<span class="temp">${data.main.temp} &#176;C</span>`

            document.querySelector('.city_name').innerHTML = data.name;
            document.querySelector('.curr_date').innerHTML = curr;
            document.querySelector('.curr_temp').innerHTML = temp;
            document.querySelector('.desc').innerHTML = data.weather[0].description;
            document.querySelector('.icon').src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

            document.querySelector('.maxmin_temp').innerHTML = data.main.temp_max + " &#176;C (max) / " + data.main.temp_min + " &#176;C (min) ";
        }
    }).catch((err) => {
        console.log(err.message);
    })

weatherText.addEventListener('keypress', function (e) {
    if (e.which === 13) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherText.value}&units=metric&appid=bbf4378d7abeb988c9b73ca8a24ec2a6`)
            .then((data) => {
                return data.json();
            }).then((data) => {
                if (data.name !== undefined) {
                    let curr = new Date().getDate() + " " + months[new Date().getMonth()] + " ,2021";
                    let temp = `<span class="temp">${data.main.temp} &#176;C</span>`

                    document.querySelector('.city_name').innerHTML = data.name;
                    document.querySelector('.curr_date').innerHTML = curr;
                    document.querySelector('.curr_temp').innerHTML = temp;
                    document.querySelector('.desc').innerHTML = data.weather[0].description;
                    document.querySelector('.icon').src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";;

                    document.querySelector('.maxmin_temp').innerHTML = data.main.temp_max + " &#176;C (max) / " + data.main.temp_min + " &#176;C (min) ";
                    
                    let newUrl;
                    switch (data.weather[0].main) {
                        case 'Drizzle':
                            newUrl = "https://wallpapercave.com/wp/wp7226285.jpg";
                            break;
                        case 'Clouds':
                            newUrl = "https://presstories.com/wp-content/uploads/2021/04/Weather-forecast-for-May-2021.jpg";
                            break;
                        case 'Rain':
                            newUrl = "https://img2.goodfon.com/wallpaper/nbig/d/b1/gorod-sankt-peterburg-kanal-devushka-dozhd-vecher-ogni.jpg";
                            break;
                        case 'Snow':
                            newUrl = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
                            break;
                        case 'Clear':
                            newUrl = "https://c1.wallpaperflare.com/preview/961/236/22/sky-cloud-sunny-weather.jpg";
                            break;
                        case 'Thunderstom':
                            newUrl = "https://wallpaperaccess.com/full/1096121.jpg";
                            break;
                        default:
                            newUrl = "https://images.alphacoders.com/711/711683.png";
                            break;
                    }
                    document.querySelector('.bg-image').style.backgroundImage = `url("${newUrl}")`
                } else {
                    let curr = `<span>No such Place</span>`;
                    document.querySelector('.card-title').innerHTML = curr;
                }
            }).catch((err) => {
                console.log(err.message);
            })
    }
})