function button() {
    let appParam = '078e5e42537d9436497e5d21ac170c20';
    let inp = document.querySelector('.i_city').value;
    let aParam = inp.toLowerCase();
    let city = document.querySelector('.city_name');
    let cityTemp = document.querySelector('.city_temp');
    let weatherOut = document.querySelector('.city_weather');
    let img = document.querySelector('.image_weather');
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + `${aParam}&appid=${appParam}&lang=ru`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            if (aParam == data.name.toLowerCase()) {
                city.innerHTML = inp + ' ' + data.sys.country;
                cityTemp.innerHTML = Math.floor(data.main.temp - 273.15) + '&deg';
                weatherOut.innerHTML = data.weather[0]['description'];
                img.src = 'http://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png';
            }
        })
}
document.querySelector('.button').onclick = button;