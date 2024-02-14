"use strict"

// --------- Jokes ----------------------

// fetch("https://official-joke-api.appspot.com/random_joke")
// // console.log(fetch("https://official-joke-api.appspot.com/random_joke"));
// .then (response => response.json())
// .then (data => {
//     console.log(data);
//     console.log(data.id);
//     console.log(data.setup);
//     console.log(data.punchline);
// });

// -------- Weather --------------------

// fetch("https://api.openweathermap.org/data/2.5/weather?q=nepal&appid=1ac41d822f470089588e62f6ac6cbdce&units=metric")
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     console.log(data.name);
//     console.log(data.main.temp);
// })


// let cityName = prompt("Enter the city Name : ");
// let url = "https://api.openweathermap.org/data/2.5/weather?units=metric"

// let apiKey = "1ac41d822f470089588e62f6ac6cbdce";
// fetch(url + `&appid=${apiKey}&q=${cityName}`)
// .then(response => response.json())
// .then(data => {
//     // console.log(data);
//     console.log(data.name);
//     console.log(data.main.temp);
// })


// ------------- Weather Application ---------------------

const city_name = document.querySelector("#city");
const search_btn = document.querySelector("#btn");

// console.log(city_name.value);
search_btn.addEventListener("click", (e) => {
    e.preventDefault();
    let list_cityname = document.querySelector("#list_cityname")
    let value_city = city_name.value;
    console.log(value_city);
    let url = "https://api.openweathermap.org/data/2.5/weather?units=metric"
    let apikey = "1ac41d822f470089588e62f6ac6cbdce"
    // let apiKey = "ee3b7219140acadaf8d8ab826f50752d"
    fetch(url + `&appid=${apikey}&q=${value_city}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.name);
        console.log(data.main.temp);
        console.log(data.wind.speed);
        console.log(data.main.humidity);
        let name = data.name;
        let bf = document.querySelector("#bf");
        let bf2 = document.querySelector("#bf2");
        let wind = data.wind.speed;
        let tmpu = data.main.temp;
        let hum = data.main.humidity;
        let humidi = document.querySelector("#humidi");
        console.log(tmpu);
        if(tmpu >= 26)
        {
            list_cityname.innerHTML = name;
            bf.innerHTML = tmpu + "℃";
            bf2.innerHTML = wind + " " + `<i class="fas fa-wind"></i>`;
            humidi.innerHTML = hum + " " + `<img src="humi2.jpeg" class="hum_img">`;
            document.getElementById("para").style.backgroundImage = "url('above.jpeg')"

        }
        else if(tmpu > 20 && tmpu <= 25)
        {
            list_cityname.innerHTML = name;
            bf.innerHTML = tmpu + "℃";
            bf2.innerHTML = wind + " " + `<i class="fas fa-wind"></i>`;
            humidi.innerHTML = hum + " " + `<img src="humi2.jpeg" class="hum_img">`;
            document.getElementById("para").style.backgroundImage = "url('range.jpeg')"
        }
        else if(tmpu <= 20)
        {
            list_cityname.innerHTML = name;
            bf.innerHTML = tmpu + "℃";
            bf2.innerHTML = wind + " " + `<i class="fas fa-wind"></i>`;
            humidi.innerHTML = hum + " " + `<img src="humi2.jpeg" class="hum_img">`;
            document.getElementById("para").style.backgroundImage = "url('below.jpeg')"
        }
    });
});